// NOTE: simple shared Button for Sandbox
export default function Button({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="px-4 py-2 rounded bg-white text-black hover:bg-gray-300 transition">
      {children}
    </button>
  );
}
