import { Link } from "react-router-dom";

export default function ContactSuccess() {
  return (
    <div className="py-14">
      <h1 className="text-2xl font-semibold">送信しました</h1>
      <p className="mt-2 text-slate-600">
        お問い合わせありがとうございます。内容を確認してご連絡します。
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-full bg-slate-900 px-5 py-2 text-sm text-white"
      >
        Homeへ戻る
      </Link>
    </div>
  );
}