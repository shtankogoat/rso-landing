import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Страница не найдена", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="page-hero error-hero">
      <div className="wrap">
        <p className="error-code">404</p>
        <h1 className="h1">Такой страницы нет</h1>
        <p className="error-text">Возможно, она переехала или в адресе опечатка. Начните с главной — там все проекты общества.</p>
        <div className="hero-actions">
          <Link className="btn btn-gold" href="/">На главную</Link>
          <Link className="btn btn-ghost-light" href="/#projects">Наши проекты</Link>
        </div>
      </div>
    </section>
  );
}
