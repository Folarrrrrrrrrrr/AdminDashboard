import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const getElapsedPercentage = (start, end) => {
  const totalDuration = end.getTime() - start.getTime();
  const elapsed = new Date().getTime() - start.getTime();
  return Math.min((elapsed / totalDuration) * 100, 100); // Cap at 100%
};

const getStartEndDates = (interval) => {
  const now = new Date();
  let start, end;

  if (interval === "day") {
    start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    end = new Date(start);
    end.setDate(start.getDate() + 1); // End at midnight
  } else if (interval === "week") {
    const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
    start = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - dayOfWeek
    );
    end = new Date(start);
    end.setDate(start.getDate() + 7); // End at the start of the next week
  } else if (interval === "month") {
    start = new Date(now.getFullYear(), now.getMonth(), 1);
    end = new Date(now.getFullYear(), now.getMonth() + 1, 1); // Start of the next month
  } else if (interval === "year") {
    start = new Date(now.getFullYear(), now.getFullYear(), 1);
    end = new Date(now.getFullYear(), now.getFullYear() - 1, 1); // Start of the next month
  }

  return { start, end };
};

const CircularGraph = ({ revenues, target, interval }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const { start, end } = getStartEndDates(interval);

    const updateProgress = () => {
      const elapsedPercentage = getElapsedPercentage(start, end);
      const totalRevenue = revenues.reduce((sum, revenue) => sum + revenue, 0);
      const revenuePercentage = Math.min((totalRevenue / target) * 100, 100); // Cap at 100%

      // Combine elapsed time and revenue progress
      setProgress(Math.min(elapsedPercentage, revenuePercentage));
    };

    updateProgress();
    const intervalId = setInterval(updateProgress, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up interval
  }, [revenues, target, interval]);

  return (
    <div style={{ width: 150, height: 150 }}>
      <CircularProgressbar
        value={progress}
        text={`${Math.floor(progress)}%`}
        styles={buildStyles({
          textColor: "#000",
          pathColor: progress === 100 ? "#4caf50" : "#00f", // Green if target met
          trailColor: "#ddd",
        })}
      />
    </div>
  );
};

export default CircularGraph;
