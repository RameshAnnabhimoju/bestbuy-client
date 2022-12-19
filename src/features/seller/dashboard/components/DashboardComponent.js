import React from "react";
import { CCard, CCardHeader, CCardTitle, CCardText } from "@coreui/react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function DashboardComponent() {
  const seller = useSelector((state) => state.seller);
  const data = [
    {
      month: "Aug 06",
      salesRevenue: 4000,
      refunds: 2400,
    },
    {
      month: "Aug 13",
      salesRevenue: 3000,
      refunds: 1398,
    },
    {
      month: "Aug 20",
      salesRevenue: 2000,
      refunds: 9800,
    },
    {
      month: "Aug 27",
      salesRevenue: 2780,
      refunds: 3908,
    },
    {
      month: "Sep 03",
      salesRevenue: 1890,
      refunds: 4800,
    },
    {
      month: "Sep 10",
      salesRevenue: 2390,
      refunds: 3800,
    },
    {
      month: "Sep 17",
      salesRevenue: 3490,
      refunds: 4300,
    },
    {
      month: "Sep 24",
      salesRevenue: 3490,
      refunds: 4300,
    },
    {
      month: "Oct 01",
      salesRevenue: 3490,
      refunds: 4300,
    },
    {
      month: "Oct 08",
      salesRevenue: 3490,
      refunds: 4300,
    },
    {
      month: "Oct 15",
      salesRevenue: 3490,
      refunds: 4300,
    },
    {
      month: "Oct 17",
      salesRevenue: 3490,
      refunds: 4300,
    },
  ];
  return (
    <div className="dashboard-background">
      <div className="dashboard-container">
        <CCard className="mn-3 border-top-primary dashboard-card">
          <CCardHeader>Sales</CCardHeader>
          <CCardTitle>₹ {seller.sellerData?.displayDetails?.sales}</CCardTitle>
          <CCardText className="dashboard-text">this month</CCardText>
        </CCard>
        <CCard className="mn-3 border-top-primary dashboard-card">
          <CCardHeader>Orders</CCardHeader>
          <CCardTitle>{seller.sellerData?.displayDetails?.orders}</CCardTitle>
          <CCardText className="dashboard-text">this month</CCardText>
        </CCard>
        <CCard className="mn-3 border-top-primary dashboard-card">
          <CCardHeader>Refunds</CCardHeader>
          <CCardTitle>
            ₹ {seller.sellerData?.displayDetails?.refunds}
          </CCardTitle>
          <CCardText className="dashboard-text">this month</CCardText>
        </CCard>
        <CCard className="mn-3 border-top-primary dashboard-card">
          <CCardHeader>Visitors</CCardHeader>
          <CCardTitle>32000</CCardTitle>
          <CCardText className="dashboard-text">this month</CCardText>
        </CCard>

        <ResponsiveContainer
          width="100%"
          height="100%"
          className="dashboard-chart"
        >
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="salesRevenue" stroke="#8884d8" />
            <Line type="monotone" dataKey="refunds" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DashboardComponent;
