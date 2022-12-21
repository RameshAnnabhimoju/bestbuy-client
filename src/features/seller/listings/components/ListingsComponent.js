import React, { useState, useRef, useEffect } from "react";
import NewListingComponent from "./NewListingComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchItemListings, fetchItemsByfilter } from "../../../api/itemSlice";
import {
  CCard,
  CCardHeader,
  CCardTitle,
  CCardText,
  CButton,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CInputGroup,
  CFormInput,
  CFormSelect,
} from "@coreui/react";
import searchIcon from "../../../../assets/search.png";

function ListingsComponent() {
  const category = useRef();
  const searchId = useRef();
  const items = useSelector((state) => state.item);
  const seller = useSelector((state) => state.seller);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItemListings(seller.sellerData.seller._id));
  }, []);
  function refreshListings() {
    dispatch(fetchItemListings(seller.sellerData.seller._id));
  }
  function searchByIdHandler() {
    const query = new URLSearchParams({
      _id: searchId.current.value,
    }).toString();
    dispatch(fetchItemsByfilter(query));
  }
  function changeHandler(e) {
    const query = new URLSearchParams({
      _id: searchId.current.value,
      category: e.target.value,
    }).toString();
    dispatch(fetchItemsByfilter(query));
  }
  return (
    <div className="listings-background">
      <NewListingComponent var={[visible, setVisible]} />
      <div className="listings-container">
        <div className="listings-cards">
          <CCard className="mn-3 border-top-primary dashboard-card">
            <CCardHeader>Total Listings</CCardHeader>
            <CCardTitle>
              {seller.sellerData?.displayDetails?.totalListings}
            </CCardTitle>
            <CCardText className="dashboard-text">this month</CCardText>
          </CCard>
          <CCard className="mn-3 border-top-primary dashboard-card">
            <CCardHeader>Discounted Listings</CCardHeader>
            <CCardTitle>
              {seller.sellerData?.displayDetails?.discountedListings}
            </CCardTitle>
            <CCardText className="dashboard-text">this month</CCardText>
          </CCard>
          <CCard className="mn-3 border-top-primary dashboard-card">
            <CCardHeader>Low Stock Listings</CCardHeader>
            <CCardTitle>
              {seller.sellerData?.displayDetails?.lowStockListings}
            </CCardTitle>
            <CCardText className="dashboard-text">this month</CCardText>
          </CCard>
          <div>
            <CButton
              className="listing-button"
              color="dark"
              variant="outline"
              onClick={() => setVisible(!visible)}
            >
              Add New Listing
            </CButton>
            <CButton
              className="listing-button"
              color="dark"
              variant="outline"
              onClick={() => refreshListings()}
            >
              Refresh Listings
            </CButton>
          </div>
        </div>
        <div className="filters">
          <CInputGroup className="table-search">
            <CFormInput
              type="text"
              id="product-title"
              placeholder="Search by Id"
              ref={searchId}
            />
            <CButton
              type="button"
              color="primary"
              variant="ghost"
              onClick={searchByIdHandler}
            >
              <img className="nav-search" src={searchIcon} alt="" />
            </CButton>
          </CInputGroup>
          <CFormSelect ref={category} onChange={changeHandler}>
            <option>Category</option>
            <option value="mobile">Mobiles</option>
            <option value="tablet">Tablets</option>
            <option value="laptop">Laptops</option>
            <option value="audio">Audio</option>
            <option value="watch">Watches</option>
          </CFormSelect>
        </div>
        <CTable>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell scope="col" className="header-row">
                Product Title
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" className="header-row">
                Product ID
              </CTableHeaderCell>
              <CTableHeaderCell scope="col">Category</CTableHeaderCell>
              <CTableHeaderCell scope="col">Listing Price</CTableHeaderCell>
              <CTableHeaderCell scope="col">Actual Price</CTableHeaderCell>
              <CTableHeaderCell scope="col">Stock Left</CTableHeaderCell>
              <CTableHeaderCell scope="col">Units sold</CTableHeaderCell>
              <CTableHeaderCell scope="col">Units Refunded</CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            <>
              {items.itemData?.data &&
                items.itemData?.data?.map((item) => {
                  return (
                    <CTableRow key={item._id}>
                      <CTableDataCell className="name-cell">
                        {item.title}
                      </CTableDataCell>
                      <CTableDataCell>{item._id}</CTableDataCell>
                      <CTableDataCell>{item.category}</CTableDataCell>
                      <CTableDataCell>{item.listingPrice}</CTableDataCell>
                      <CTableDataCell>{item.actualprice}</CTableDataCell>
                      <CTableDataCell>{item.stock}</CTableDataCell>
                      <CTableDataCell>{item.unitsSold}</CTableDataCell>
                      <CTableDataCell>{item.unitsRefunded}</CTableDataCell>
                    </CTableRow>
                  );
                })}
            </>
          </CTableBody>
        </CTable>
      </div>
    </div>
  );
}

export default ListingsComponent;
