"use client";
import React, { useState } from "react";
const DepartsData = ({ title, icon }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="bg-white p-4 rounded-md shadow-md">
      <header className="flex items-center justify-between mb-4">
        <h4 className="text-xl">{icon}</h4>
        <h2 className="text-lg font-semibold">{title}</h2>
      </header>
    </article>
  );
};
export default DepartsData;
