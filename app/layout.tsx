// NOTE: layout.tsx — wraps every page
import "./globals.css";

export const metadata = {
  title: "Grove Sandbox",
  description: "Experimental Grove environment"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
