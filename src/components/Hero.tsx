import hero from "../assets/TestPicture.jpg";

export default function Hero() {
  return (
    <section className="mt-6 overflow-hidden rounded-3xl border">
      <div className="relative h-[46vh] min-h-[320px] w-full">
        <img
          src={hero}
          alt="hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
        <div className="absolute bottom-0 p-6 md:p-10">
          <h1 className="text-2xl md:text-4xl font-semibold text-white">
            鉄門国際医療研究会Outreach
          </h1>
          <p className="mt-2 max-w-xl text-white/85">
            国際医療を支える
          </p>
        </div>
      </div>
    </section>
  );
}