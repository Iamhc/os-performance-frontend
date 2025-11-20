"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

export default function Charts({ history = [] }) {
  if (!history || history.length === 0) {
    return (
      <p className="text-gray-400 text-sm text-center mt-10">
        Loading chart data...
      </p>
    );
  }

  const labels = history.map((h) => new Date(h.time).toLocaleTimeString());

  const cpuData = {
    labels,
    datasets: [
      {
        label: "CPU Load",
        data: history.map((h) => h.cpu),
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md mt-6">
      <Line data={cpuData} />
    </div>
  );
}
