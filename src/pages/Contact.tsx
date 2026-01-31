import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="py-10">
      <Link className="text-sm text-slate-700 hover:underline" to="/">
        ← Home
      </Link>
      <h1 className="text-2xl font-semibold">Contact Us</h1>
      <p className="mt-2 text-sm text-slate-600">
        ご質問、ご相談はこちらのフォームより承っております。
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/contact/success"
        className="mt-6 space-y-4 rounded-3xl border p-6"
      >
        {/* Netlifyがフォームを識別するために必要 */}
        <input type="hidden" name="form-name" value="contact" />

        {/* スパム対策（見えない項目） */}
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <div>
          <label className="text-sm font-medium" htmlFor="name">
            お名前 <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-xl border px-3 py-2"
            placeholder="例）山田 太郎"
          />
        </div>

        <div>
          <label className="text-sm font-medium" htmlFor="email">
            メール <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border px-3 py-2"
            placeholder="example@mail.com"
          />
        </div>

        <div>
          <label className="text-sm font-medium" htmlFor="message">
            内容 <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="mt-2 w-full rounded-xl border px-3 py-2"
            rows={6}
            placeholder="お問い合わせ内容"
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-slate-900 px-5 py-2 text-sm text-white"
        >
          送信
        </button>

        <p className="text-xs text-slate-500">
          * は必須項目です
        </p>
      </form>
    </div>
  );
}