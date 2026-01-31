import { NavLink } from "react-router-dom";

const tabs = [
  { to: "/", label: "Home" },
  { to: "/news", label: "Recent News" },
  { to: "/blog", label: "Blog Archive" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* 左上ロゴ */}
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white font-bold">
            L
          </div>
          <div className="leading-tight">
            <div className="font-semibold">Your Logo</div>
            <div className="text-xs text-slate-500">subtitle / tagline</div>
          </div>
        </div>

        {/* 右上タブ */}
        <nav className="hidden gap-1 md:flex">
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              className={({ isActive }) =>
                [
                  "rounded-full px-4 py-2 text-sm transition",
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