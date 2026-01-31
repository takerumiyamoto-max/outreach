export default function Hero() {
  return (
    <section className="mt-6 overflow-hidden rounded-3xl border">
      <div className="relative h-[46vh] min-h-[320px] w-full">
        <img
          src="https://images.unsplash.com/photo-1520975693411-b4f7b1c8b7f8?auto=format&fit=crop&w=1600&q=80"
          alt="hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
        <div className="absolute bottom-0 p-6 md:p-10">
          <h1 className="text-2xl md:text-4xl font-semibold text-white">
            タイトル（活動の名前など）
          </h1>
          <p className="mt-2 max-w-xl text-white/85">
            ここに短い説明。ニュースやブログを増やしながら育てていく想定。
          </p>
        </div>
      </div>
    </section>
  );
}