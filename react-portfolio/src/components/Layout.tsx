// src/components/Layout.tsx
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:flex min-h-screen bg-[#0f172a] text-white font-sans text-white">
      <Sidebar />
      <main className="flex-1 p-8 bg-[#0f172a]">{children}</main>
    </div>
  );
}
