import React from "react";
import { useSelector } from "react-redux";

import {
  CButton,
  CTable,
  CTableDataCell,
  CTableRow,
  CTableHeaderCell,
  CTableHead,
  CTableBody,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
function SellerOrderViewComponent({ vars }) {
  const orders = useSelector((state) => state.order);
  const [visible, setVisible, orderId] = vars;
  const orderItem = orders.orderData.filter((order) => {
    return order._id === orderId;
  });
  return (
    <>
      <CModal
        scrollable
        className="order-row"
        visible={visible}
        onClose={() => setVisible(false)}
        alignment="center"
        size="xl"
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Order ID : {orderItem[0]._id}</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <CTable>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell scope="col" className="title-column">
                  Product Title
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">Product ID</CTableHeaderCell>
                <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                <CTableHeaderCell scope="col">Listing Price</CTableHeaderCell>
                <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
                <CTableHeaderCell scope="col">Total</CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            <CTableBody>
              <CTableRow>
                <CTableDataCell className="title-column">
                  {orderItem[0].title}
                </CTableDataCell>
                <CTableDataCell>{orderItem[0].itemId}</CTableDataCell>
                <CTableDataCell>{orderItem[0].category}</CTableDataCell>
                <CTableDataCell>{orderItem[0].listingPrice}</CTableDataCell>
                <CTableDataCell>{orderItem[0].quantity}</CTableDataCell>
                <CTableDataCell>{orderItem[0].total}</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CModalBody>

        <CModalFooter>
          <CButton color="secondary">Print</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
}

export default SellerOrderViewComponent;
