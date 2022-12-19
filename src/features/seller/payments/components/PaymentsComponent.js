import React from "react";
import {
  CCard,
  CCardHeader,
  CCardTitle,
  CCardText,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CCardFooter,
} from "@coreui/react";
import { useSelector } from "react-redux";

function PaymentsComponent() {
  const seller = useSelector((state) => state.seller);
  return (
    <div className="payments-background">
      <div className="payments-container">
        <div className="payments-cards">
          <CCard className="mn-3 border-top-primary payments-card">
            <CCardHeader>Unsettled Amount</CCardHeader>
            <CCardTitle>
              ₹ {seller.sellerData?.displayDetails?.unsettledAmount}
            </CCardTitle>
            <CCardText className="dashboard-text">this month</CCardText>
            <CCardFooter>
              {" "}
              <CCardText className="dashboard-text">
                Next Settlement on 2022-12-15
              </CCardText>
            </CCardFooter>
          </CCard>
          <CCard className="mn-3 border-top-primary payments-card">
            <CCardHeader>Settled Amount</CCardHeader>
            <CCardTitle>
              ₹ {seller.sellerData?.displayDetails?.settledAmount}
            </CCardTitle>
            <CCardText className="dashboard-text">this month</CCardText>
            <CCardFooter>
              {" "}
              <CCardText className="dashboard-text">
                Next Payment on 2022-12-16
              </CCardText>
            </CCardFooter>
          </CCard>
          <CCard className="mn-3 border-top-primary payments-card">
            <CCardHeader>Last Payment</CCardHeader>
            <CCardTitle>₹ 95,000</CCardTitle>
            <CCardText className="dashboard-text">30 Days</CCardText>
            <CCardFooter>
              {" "}
              <CCardText className="dashboard-text">
                Transaction completed on 2022-12-16
              </CCardText>
            </CCardFooter>
          </CCard>
          <CCard className="mn-3 border-top-primary payments-card">
            <CCardHeader>Total Earnings</CCardHeader>
            <CCardTitle>
              ₹ {seller.sellerData?.displayDetails?.totalEarnings}
            </CCardTitle>
            <CCardText className="dashboard-text">till today</CCardText>
            <CCardFooter>
              {" "}
              <CCardText className="dashboard-text">
                Total Earnings from day one up until today
              </CCardText>
            </CCardFooter>
          </CCard>
        </div>
        <br />
        <CTable>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell scope="col">Date</CTableHeaderCell>
              <CTableHeaderCell scope="col">Description</CTableHeaderCell>
              <CTableHeaderCell scope="col">Ref.</CTableHeaderCell>
              <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            <CTableRow>
              <CTableDataCell>2022-12-15</CTableDataCell>
              <CTableDataCell>
                Transfro to accout 18236512511521 a NEFT a asjdnk askdnkas
              </CTableDataCell>
              <CTableDataCell>sas5465as13as165</CTableDataCell>
              <CTableDataCell>19000</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>2022-12-18</CTableDataCell>
              <CTableDataCell>
                Transfro to accout 18236512511521 a NEFT a asjdnk askdnkas
              </CTableDataCell>
              <CTableDataCell>sas5465as13as165</CTableDataCell>
              <CTableDataCell>19000</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>2022-12-15</CTableDataCell>
              <CTableDataCell>
                Transfro to accout 18236512511521 a NEFT a asjdnk askdnkas
              </CTableDataCell>
              <CTableDataCell>sas5465as13as165</CTableDataCell>
              <CTableDataCell>19000</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </div>
    </div>
  );
}

export default PaymentsComponent;
