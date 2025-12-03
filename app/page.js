// app/page.js
// Simple home landing that links into the sandbox dashboard.

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>GrovePortal Sandbox</h1>
      <p>Testing ground for all experimental functions.</p>

      <Link href="/dashboard">
        <button style={{ marginTop: '20px', padding: '10px' }}>
          Enter Sandbox Dashboard
        </button>
      </Link>
    </main>
  );
}
