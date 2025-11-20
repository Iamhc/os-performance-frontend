"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import StatsCards from "./components/StatsCards";
import Charts from "./components/Charts";
import DiskList from "./components/DiskList";

const API = "http://localhost:4000/api";

export default function Page() {
  const [current, setCurrent] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  async function fetchData() {
    try {
      const [currRes, histRes] = await Promise.all([
        axios.get(`${API}/stats`),
        axios.get(`${API}/stats/history`),
      ]);

      // FIXED HERE
      setCurrent(currRes.data);
      setHistory(histRes.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold mb-4">OS Analysis Dashboard</h1>

      <StatsCards current={current} />

      <Charts history={history} />

      <DiskList current={current} />
    </div>
  );
}
