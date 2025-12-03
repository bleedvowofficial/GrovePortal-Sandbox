// components/HeadphoneAlarm.js
// This plays a sound through headphones when triggered.
// Notes inside explain how to wire it to schedule later.

'use client';
import { useState, useRef } from 'react';

export default function HeadphoneAlarm() {
  const audioRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const play = () => {
    setStatus('playing');
    audioRef.current.play();
  };

  return (
    <div>
      <audio ref={audioRef} src="/alarm.mp3" preload="auto" />

      <button
        onClick={play}
        style={{ marginTop: '10px', padding: '10px' }}
      >
        Test Headphone Alarm
      </button>

      <p>Status: {status}</p>

      {/* Notes:
         - Later: replace manual button with time-based trigger
         - Later: add Bluetooth routing detection
      */}
    </div>
  );
}
