import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

const tabs = [
  { to: "/", label: "Home" },
  { to: "/news", label: "News" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        {/* 左上：ロゴ + サイト名（subtitleなし） */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-auto max-w-[260px]"
          />
          <div className="text-xl md:text-2xl font-semibold tracking-tight">
            鉄門国際医療研究会Outreach
          </div>
        </Link>

        {/* 右上タブ */}
        <nav className="hidden gap-1 md:flex">
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              className={({ isActive }) =>
                [
                  "rounded-full px-4 py-2.5 text-sm transition",
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100",
                ].join(" ")
              }
            >
              {t.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}