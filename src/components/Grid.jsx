import React, { useState, useEffect } from "react";
import "./Grid.css";

const Grid = () => {
  const rows = 9;
  const cols = 26;
  const totalCells = rows * cols;

  const [activeCells, setActiveCells] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * totalCells);

      setActiveCells((prev) => [...prev, newIndex]);

      //this is done to remove the purple block after sometime
      setTimeout(() => {
        setActiveCells((prev) => prev.filter((index) => index !== newIndex));
      }, 500);
    }, 100);

    return () => clearInterval(interval);
  }, [totalCells]);

  return (
    <div className="grid-container">
      {Array.from({ length: totalCells }).map((_, index) => (
        <div
          className={`grid-cell ${activeCells.includes(index) ? "active" : ""}`}
          key={index}
        ></div>
      ))}
    </div>
  );
};

export default Grid;
