"use client";
import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const DURATION = 7000;

/**
 * Баннерный слайдер: автопрокрутка, прогресс, стрелки, свайп.
 * Слайды — массивом (фрагменты в children сервер «расплющивает» в отдельные элементы).
 */
export function HeroSlider({ slides }: { slides: ReactNode[] }) {
  const n = slides.length;
  const [current, setCurrent] = useState(0);
  const [tick, setTick] = useState(0); // перезапуск анимации прогресса и таймера
  const x0 = useRef<number | null>(null);

  const go = useCallback((i: number) => {
    setCurrent(((i % n) + n) % n);
    setTick((t) => t + 1);
  }, [n]);

  useEffect(() => {
    const t = setTimeout(() => go(current + 1), DURATION);
    return () => clearTimeout(t);
  }, [current, tick, go]);

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Главное"
      style={{ "--slide-ms": `${DURATION}ms` } as CSSProperties}
      onTouchStart={(e) => { x0.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (x0.current === null) return;
        const dx = e.changedTouches[0].clientX - x0.current;
        if (Math.abs(dx) > 50) go(current + (dx < 0 ? 1 : -1));
        x0.current = null;
      }}
    >
      <div className="hero-slides">
        {slides.map((s, k) => (
          <article key={k} className={`hero-slide${k === current ? " is-active" : ""}`} aria-hidden={k !== current}>
            {s}
          </article>
        ))}
      </div>
      <div className="hero-bar">
        <div className="wrap">
          <div className="hero-progress">
            {slides.map((_, k) => (
              <button
                key={k === current ? `a${tick}` : k}
                type="button"
                aria-label={`Слайд ${k + 1}`}
                className={k === current ? "is-active" : k < current ? "is-done" : undefined}
                onClick={() => go(k)}
              >
                <i />
              </button>
            ))}
          </div>
          <span className="hero-count"><b>{current + 1}</b> / {n}</span>
          <div className="hero-arrows">
            <button className="round-btn hero-prev" type="button" aria-label="Предыдущий слайд" onClick={() => go(current - 1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20 12H5M11 6l-6 6 6 6" /></svg>
            </button>
            <button className="round-btn hero-next" type="button" aria-label="Следующий слайд" onClick={() => go(current + 1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
