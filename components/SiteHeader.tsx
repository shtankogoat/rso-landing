"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logoMark from "@/public/img/logo-mark-light.png";
import { SOCIAL } from "@/components/rso/social";

// Демо-лендинг: только якоря по странице, вместо входа/регистрации — соцсети РСО
const NAV = [
  ["/#projects", "Проекты"],
  ["/#about", "Об обществе"],
  ["/#members", "Участникам"],
  ["/#partners", "Партнёры"],
] as const;

function SocialIcons() {
  return (
    <div className="header-socials">
      {SOCIAL.map((s) => (
        <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name}>
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d={s.d} /></svg>
        </a>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);

  useEffect(() => {
    const els = NAV.map(([h]) => document.getElementById(h.split("#")[1])).filter((el): el is HTMLElement => !!el);
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let cur: string | null = null;
      for (const el of els) if (el.getBoundingClientRect().top <= line) cur = el.id;
      setSection(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header is-home" id="top-header">
      <div className="wrap header-row">
        <Link className="brand" href="/" aria-label="Русское спортивное общество — на главную" onClick={close}>
          <Image src={logoMark} alt="" width={62} height={50} priority />
          <span className="brand-name">Русское<br />спортивное<small>общество</small></span>
        </Link>
        <nav className="nav" id="nav" aria-label="Главное меню">
          {NAV.map(([href, label]) => {
            const on = section === href.slice(2);
            return <Link key={href} href={href} onClick={close} className={on ? "is-active" : undefined}>{label}</Link>;
          })}
          <div className="nav-join"><SocialIcons /></div>
        </nav>
        <div className="header-auth"><SocialIcons /></div>
        <button className="burger" type="button" aria-label="Меню" aria-expanded={open} aria-controls="nav" onClick={() => setOpen((v) => !v)}>
          <span />
        </button>
      </div>
    </header>
  );
}
