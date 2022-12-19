import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrder,
  updateOrderStatus,
  fetchOrdersByfilter,
} from "../../../api/orderSlice";
import SellerOrderViewComponent from "./SellerOrderViewComponent";
import {
  CInputGroup,
  CFormInput,
  CButton,
  CFormSelect,
  CTable,
  CTableDataCell,
  CTableRow,
  CTableHeaderCell,
  CTableHead,
  CTableBody,
} from "@coreui/react";
import searchIcon from "../../../../assets/search.png";

function SellerOrdersComponent() {
  const searchInputId = useRef();
  const seller = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder(seller.sellerData.seller._id));
  }, []);
  const orders = useSelector((state) => state.order);
  const [visible, setVisible] = useState(false);
  const [orderId, setOrderId] = useState("");
  function refreshOrders() {
    dispatch(getOrder(seller.sellerData.seller._id));
  }
  const orderStatusArr = ["active", "shipped", "delivered", "refund"];
  const orderStatusObj = { active: 0, shipped: 1, delivered: 2, refund: 3 };
  function updateStatus(e) {
    const { id, status } = e;
    const orderStatusNum = orderStatusObj[status];
    let statusNumber;
    orderStatusNum > 2
      ? (statusNumber = 3)
      : (statusNumber = orderStatusNum + 1);
    dispatch(
      updateOrderStatus({
        id: id,
        payload: orderStatusArr[statusNumber],
      })
    );
  }
  function searchOrdersById() {
    const query = new URLSearchParams({
      _id: searchInputId.current.value,
    }).toString();
    dispatch(fetchOrdersByfilter(query));
  }
  function changeHandler(e) {
    const query = new URLSearchParams({
      _id: searchInputId.current.value || "",
      category: e.target.value,
    }).toString();
    dispatch(fetchOrdersByfilter(query));
  }
  return (
    <div className="listings-background">
      <div className="listings-container">
        {visible && (
          <SellerOrderViewComponent vars={[visible, setVisible, orderId]} />
        )}
        <div className="order-filters">
          <CInputGroup className="table-search">
            <CFormInput
              type="text"
              id="product-title"
              placeholder="Search by title or Id"
              ref={searchInputId}
            />
            <CButton
              onClick={searchOrdersById}
              type="button"
              color="primary"
              variant="ghost"
            >
              <img className="nav-search" src={searchIcon} alt="" />
            </CButton>
          </CInputGroup>

          <CFormSelect onChange={changeHandler}>
            <option>Sort By status</option>
            <option value="active">Active</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="refund">Refund</option>
          </CFormSelect>
          <CButton onClick={refreshOrders}>Refresh Orders</CButton>
        </div>
        <br />
        <CTable>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell>Orderd On</CTableHeaderCell>
              <CTableHeaderCell>Order ID</CTableHeaderCell>
              <CTableHeaderCell>Total</CTableHeaderCell>
              <CTableHeaderCell>Order Status</CTableHeaderCell>
              <CTableHeaderCell>Item</CTableHeaderCell>
              <CTableHeaderCell>Update Status</CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            {orders.orderData.map((order) => {
              return (
                <CTableRow className="order=row" key={order._id}>
                  <CTableDataCell>{order.orderedOn}</CTableDataCell>
                  <CTableDataCell>{order._id}</CTableDataCell>

                  <CTableDataCell>{order.total}</CTableDataCell>
                  <CTableDataCell>
                    <div className={`order-status-${order.orderStatus}`}>
                      {order.orderStatus}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton
                      onClick={() => {
                        setVisible(!visible);
                        setOrderId(order._id);
                      }}
                      size="sm"
                      shape="rounded-pill"
                    >
                      View Item
                    </CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton
                      type="button"
                      size="sm"
                      shape="rounded-pill"
                      onClick={() =>
                        updateStatus({
                          id: order._id,
                          status: order.orderStatus,
                        })
                      }
                    >
                      Update Status
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              );
            })}
          </CTableBody>
        </CTable>
      </div>
    </div>
  );
}

export default SellerOrdersComponent;
