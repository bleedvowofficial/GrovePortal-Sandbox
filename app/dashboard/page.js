// app/dashboard/page.js
// This is the main sandbox dashboard.
// It loads the UbermanCounter, HeadphoneAlarm,
// and an experimental log display.

import UbermanCounter from '@/components/UbermanCounter';
import HeadphoneAlarm from '@/components/HeadphoneAlarm';
import SandboxLogCard from '@/components/SandboxLogCard';

export default function Dashboard() {
  return (
    <main>
      <h1>Sandbox Dashboard</h1>

      {/* Uberman Counter */}
      <section style={{ marginTop: '30px' }}>
        <h2>Uberman Cycle</h2>
        <UbermanCounter />
      </section>

      {/* Alarm System */}
      <section style={{ marginTop: '30px' }}>
        <h2>Headphone Alarm Test</h2>
        <HeadphoneAlarm />
      </section>

      {/* Sandbox logs */}
      <section style={{ marginTop: '30px' }}>
        <h2>Sandbox Logs</h2>
        <SandboxLogCard />
      </section>
    </main>
  );
}
