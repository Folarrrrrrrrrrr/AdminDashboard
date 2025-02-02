import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "./DoughnutChart.module.css"; // Import CSS Module

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ totalRevenue, goalRevenue, dailyRevenue, monthlyEarnings }) => {
  const data = {
    labels: ["Revenue Collected", "Remaining"],
    datasets: [
      {
        data: [totalRevenue, goalRevenue - totalRevenue],
        backgroundColor: ["#002F6C", "#E0E6F1"],
        hoverBackgroundColor: ["#002F6C", "#CBD5E1"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "75%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className={styles.chartContainer}>
      {/* Doughnut Chart */}
      <div className={styles.chartWrapper}>
        <Doughnut data={data} options={options} />
        <div className={styles.chartCenterText}>
          <p className={styles.totalRevenue}>Total Revenue</p>
          <p className={styles.revenueAmount}>${totalRevenue.toLocaleString()}</p>
        </div>
      </div>

      {/* Revenue Details */}
      <div className={styles.revenueDetails}>
        <div className={styles.detailBlock}>
          <p className={styles.detailTitle}>Daily Revenue</p>
          <p className={styles.detailNote}>70% more than last month.</p>
          <p className={styles.detailAmount}>${dailyRevenue.toLocaleString()}</p>
        </div>
        <div className={styles.detailBlock}>
          <p className={styles.detailTitle}>Earnings This Month</p>
          <p className={styles.detailNote}>70% more than last month.</p>
          <p className={styles.detailAmount}>${monthlyEarnings.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
