export default function Contact() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold">Contact Us</h1>
      <p className="mt-2 text-sm text-slate-600">とりあえずのフォーム（後で送信先を追加）</p>

      <form className="mt-6 space-y-4 rounded-3xl border p-6">
        <div>
          <label className="text-sm font-medium">お名前</label>
          <input
            className="mt-2 w-full rounded-xl border px-3 py-2"
            placeholder="例）山田 太郎"
          />
        </div>

        <div>
          <label className="text-sm font-medium">メール</label>
          <input
            type="email"
            className="mt-2 w-full rounded-xl border px-3 py-2"
            placeholder="example@mail.com"
          />
        </div>

        <div>
          <label className="text-sm font-medium">内容</label>
          <textarea
            className="mt-2 w-full rounded-xl border px-3 py-2"
            rows={6}
            placeholder="お問い合わせ内容"
          />
        </div>

        <button
          type="button"
          className="rounded-full bg-slate-900 px-5 py-2 text-sm text-white"
        >
          送信（ダミー）
        </button>
      </form>
    </div>
  );
}