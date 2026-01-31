import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="mx-auto max-w-6xl px-4">
        <Outlet />
      </main>

      <footer className="mt-20 border-t py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-500">
          © {new Date().getFullYear()} Your Site
        </div>
      </footer>
    </div>
  );
}