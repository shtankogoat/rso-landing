"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
    document.title = "Ошибка — Русское спортивное общество";
  }, [error]);

  return (
    <section className="page-hero error-hero">
      <div className="wrap">
        <p className="error-code">500</p>
        <h1 className="h1">Что-то пошло не так</h1>
        <p className="error-text">Мы уже знаем о проблеме и чиним. Попробуйте обновить страницу через пару минут.</p>
        <div className="hero-actions">
          <Link className="btn btn-gold" href="/">На главную</Link>
          <button className="btn btn-ghost-light" type="button" onClick={() => reset()}>Обновить страницу</button>
        </div>
      </div>
    </section>
  );
}
