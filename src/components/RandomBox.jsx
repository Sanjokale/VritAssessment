"use client";

import React, { useState, useEffect } from "react";

export default function RandomBox() {
    
  const GRID_SIZE_Y = 25; 
  const GRID_SIZE_X = 10
  const TOTAL_BOXES = GRID_SIZE_Y * GRID_SIZE_X;
  const ACTIVE_BOXES_COUNT = 8; // Number of colored boxes at any time

  const [activeBoxes, setActiveBoxes] = useState([]);

  const generateRandomActiveBoxes = () => {
    const indexes = [];
    while (indexes.length < ACTIVE_BOXES_COUNT) {
      const randomIndex = Math.floor(Math.random() * TOTAL_BOXES );
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  };

  useEffect(() => {
    setActiveBoxes(generateRandomActiveBoxes());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBoxes(generateRandomActiveBoxes());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto h-screen flex items-center justify-center bg-gray-50 p-4">
      <div
        className="grid bg-white rounded-lg shadow-lg border border-gray-300 w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE_Y}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_SIZE_X}, 1fr)`,
        }}
      >
        {Array.from({ length: TOTAL_BOXES }, (_, index) => (
          <div
            key={index}
            className={`
              border-r border-b border-gray-300 transition-all duration-500 ease-in-out 
              ${activeBoxes.includes(index) ? "bg-purple-500" : "bg-gray-50 hover:bg-gray-100"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
