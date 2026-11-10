import Image from "next/image";
const webUrl = (p: string) => p;
import { SOCIAL } from "./social";

// Общий подвал всех сервисов РСО (сайт, профиль, B2B, статистика) — один на всех.
// Логотип ведёт на главную того сервиса, где находится человек.

const PROJECTS = [
  "Сообщество", "B2B платформа", "Аналитика рынка",
  "СпортТех", "Инвестиции", "Медиа",
  "Благотворительная платформа", "Академия", "Организация мероприятий",
];


// работающие платформы ведут прямо в них, остальные проекты — в раздел «Наши проекты» на сайте
const LINKS: Record<string, string> = {}; // демо: без переходов на платформы

// якоря карточек в разделе «Наши проекты» на сайте (id в apps/web/lib/data.ts)
const ANCHORS: Record<string, string> = {
  "Сообщество": "community", "СпортТех": "sporttech", "Инвестиции": "investments", "Медиа": "media",
  "Благотворительная платформа": "charity", "Академия": "academy", "Организация мероприятий": "events",
};

const per = Math.ceil(PROJECTS.length / 3);
const COLUMNS = [0, 1, 2].map((c) => PROJECTS.slice(c * per, (c + 1) * per));

export function RsoFooter() {
  return (
    <footer className="bg-[linear-gradient(120deg,var(--color-navy-deep),var(--color-navy)_55%,var(--color-navy-2))] text-[rgba(255,255,255,.75)]">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-8 px-[clamp(16px,3.2vw,40px)] pb-10 pt-14 min-[481px]:grid-cols-2 lg:grid-cols-[1.3fr_repeat(3,1fr)] max-[480px]:gap-y-0">
        <div className="min-[481px]:max-lg:col-span-2 max-[480px]:mb-8">
          <a href="/" aria-label="На главную">
            <Image src="/rso-logo-full.png" alt="Русское спортивное общество" width={128} height={141} className="mb-[18px] h-auto w-32" />
          </a>
          <p className="mb-[18px] max-w-[280px] text-sm">Объединяем тех, кто делает российский спорт сильнее.</p>
          <div className="flex flex-wrap gap-2">
            {SOCIAL.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3.5 py-[9px] text-[13.5px] font-medium transition hover:border-white hover:bg-white/5 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white" aria-hidden="true"><path fillRule="evenodd" d={s.d} /></svg>
                {s.name}
              </a>
            ))}
          </div>
        </div>
        {COLUMNS.map((col, c) => (
          <div key={c}>
            <h4
              aria-hidden={c > 0}
              className={`mb-4 font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-white ${c > 0 ? "max-[480px]:hidden" : ""}`}
            >
              {c === 0 ? "Проекты" : " "}
            </h4>
            <ul className="grid gap-2.5 text-[14.5px] max-[480px]:mb-3.5">
              {col.map((p) => (
                <li key={p}><a href={LINKS[p] ?? webUrl(ANCHORS[p] ? `/#project-${ANCHORS[p]}` : "/#projects")} className="hover:text-white">{p}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="flex flex-wrap justify-between gap-2.5 border-t border-white/10 px-[clamp(16px,3.2vw,40px)] pb-[26px] pt-[22px] text-[13px] text-white/50">
          <span>© {new Date().getFullYear()} Русское спортивное общество · rusport.org</span>
          <span>Некоммерческая организация · <a href={webUrl("/privacy")} className="hover:text-white">Политика конфиденциальности</a></span>
        </div>
      </div>
    </footer>
  );
}
