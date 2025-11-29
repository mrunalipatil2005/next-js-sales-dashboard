"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useEffect, useState } from "react";
import { getSales } from "../../lib/api";
import ChartControls from "../molecule/chartcontrol";

export default function SalesChart() {
  const [data, setData] = useState(() => getSales());

  useEffect(() => {
    // initialize data (getSales is synchronous here)
    setData(getSales());
  }, []);

  function refresh() {
    // In a real app this could fetch from an API; here call getSales()
    setData(getSales());
  }

  return (
    <div>
      <ChartControls refresh={refresh} />
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="blue" strokeWidth={2} />
      </LineChart>
    </div>
  );
}