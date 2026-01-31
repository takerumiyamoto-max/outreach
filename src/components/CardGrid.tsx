import { Link } from "react-router-dom";

export type CardItem = {
  title: string;
  description?: string;
  to: string;
  imageUrl?: string;
  meta?: string;
};

export default function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <Link
          key={it.to}
          to={it.to}
          className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="h-40 w-full bg-slate-100">
            {it.imageUrl ? (
              <img
                src={it.imageUrl}
                alt={it.title}
                className="h-full w-full object-cover transition group-hover:scale-[1.02]"
              />
            ) : (
              <div className="grid h-full place-items-center text-slate-400">
                No Image
              </div>
            )}
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold">{it.title}</h3>
              {it.meta && (
                <span className="text-xs text-slate-500">{it.meta}</span>
              )}
            </div>

            {it.description && (
              <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                {it.description}
              </p>
            )}

            <div className="mt-3 text-sm text-slate-900">詳細を見る →</div>
          </div>
        </Link>
      ))}
    </div>
  );
}