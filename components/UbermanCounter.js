"use client";

import { useState, useEffect } from "react";

export default function UbermanCounter() {
  // Uberman schedule: 6 naps
  const schedule = ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"];

  const [nextNap, setNextNap] = useState("");
  const [timeRemaining, setTimeRemaining] = useState("");

  // Calculate next nap in minutes
  function getNextNap() {
    const now = new Date();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();

    for (let t of schedule) {
      const [h, m] = t.split(":").map(Number);
      const napMinutes = h * 60 + m;
      if (napMinutes > nowMinutes) return napMinutes;
    }

    return schedule[0]; // wrap to midnight
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const next = getNextNap();
      setNextNap(next);

      const now = new Date();
      const nowMinutes = now.getHours() * 60 + now.getMinutes();

      let diff = next - nowMinutes;
      if (diff < 0) diff += 1440; // minutes in a day

      const hrs = Math.floor(diff / 60);
      const mins = diff % 60;

      setTimeRemaining(`${hrs}h ${mins}m`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 border rounded-xl bg-black/10 backdrop-blur text-white">
      <h2 className="text-2xl font-bold mb-2">Uberman Counter</h2>
      <p>Next nap: <strong>{nextNap}</strong></p>
      <p>Time remaining: <strong>{timeRemaining}</strong></p>
    </div>
  );
    }
