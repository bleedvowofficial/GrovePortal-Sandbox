"use client";

import UbermanCounter from "@/components/UbermanCounter";
import HeadphoneAlarm from "@/components/HeadphoneAlarm";
import SandboxLogCard from "@/components/SandboxLogCard";
import AuthGuard from "@/components/AuthGuard";
import { useState } from "react";

export default function Dashboard() {
  // Track whether alarm is active
  const [alarmActive, setAlarmActive] = useState(false);

  // Example function to trigger alarm manually
  const toggleAlarm = () => setAlarmActive((prev) => !prev);

  return (
    <AuthGuard>
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Sandbox Dashboard</h1>

        {/* Uberman Counter shows next nap, time remaining */}
        <UbermanCounter />

        {/* Headphone alarm component */}
        <HeadphoneAlarm active={alarmActive} />

        {/* Button to toggle alarm manually for testing */}
        <button
          onClick={toggleAlarm}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          {alarmActive ? "Stop Alarm" : "Trigger Alarm"}
        </button>

        {/* Sandbox log panel shows events, testing logs, etc */}
        <SandboxLogCard logs={["Sandbox initialized", "Alarm ready"]} />
      </div>
    </AuthGuard>
  );
}
