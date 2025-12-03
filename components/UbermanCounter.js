// components/UbermanCounter.js
// Simple Uberman cycle generator for testing.
// Notes inside show where to replace with Supabase later.

'use client';
import { useState, useEffect } from 'react';

export default function UbermanCounter() {
  const [timeLeft, setTimeLeft] = useState('');
  const [nextNap, setNextNap] = useState('');

  // Example nap cycle (every 4 hours)
  const NAP_INTERVAL = 4 * 60 * 60 * 1000;

  // On load: calculate the next nap
  useEffect(() => {
    calculateNap();
    const timer = setInterval(calculateNap, 1000);
    return () => clearInterval(timer);
  }, []);

  const calculateNap = () => {
    const now = Date.now();
    const cycleStart = Math.floor(now / NAP_INTERVAL) * NAP_INTERVAL;
    const next = cycleStart + NAP_INTERVAL;

    // Update state
    setNextNap(new Date(next).toLocaleTimeString());

    const diff = next - now;
    const mins = Math.floor(diff / 1000 / 60);
    const secs = Math.floor((diff / 1000) % 60);

    setTimeLeft(`${mins}m ${secs}s`);
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <p>Next nap: {nextNap}</p>
      <p>Time remaining: {timeLeft}</p>
    </div>
  );
}
