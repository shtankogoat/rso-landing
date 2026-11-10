import { Fragment } from "react";
import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { Socials } from "@/components/Socials";
import { HeroSlider } from "@/components/HeroSlider";
import { Photo } from "@/components/Photo";
import { AUDIENCES, PROJECTS } from "@/lib/data";
import dna from "@/public/img/partners/dna.png";
import intelsport from "@/public/img/partners/intelsport.png";
import sporttech from "@/public/img/partners/sporttech.png";
import sber from "@/public/img/partners/sber.png";
import pride from "@/public/img/partners/pride.png";
import sporthunter from "@/public/img/partners/sporthunter.png";
import sportvolna from "@/public/img/partners/sportvolna.png";
import dobroservis from "@/public/img/partners/dobroservis.png";
import eus from "@/public/img/partners/eus.png";
import space from "@/public/img/partners/space.png";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const PARTNERS: [StaticImageData, string][] = [
  [dna, "ДНК Спорта"],
  [intelsport, "Интелспорт"],
  [sporttech, "СпортТех Сколково"],
  [sber, "Сбер"],
  [pride, "Pride Marketing"],
  [sporthunter, "SportHunter"],
  [sportvolna, "Спортволна"],
  [dobroservis, "Добросервис"],
  [eus, "ЕЮС групп"],
  [space, "SPACE"],
];

const CARD_SIZES = "(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 440px";

function ProjectCard({ id, href, children }: { id: string; href?: string; children: React.ReactNode }) {
  // id — якорь карточки: ссылки из подвала («СпортТех» и др.) ведут прямо к своему проекту
  return href ? <a id={id} className="pcard reveal" href={href}>{children}</a> : <div id={id} className="pcard reveal" tabIndex={0}>{children}</div>;
}

export default function HomePage() {
  return (
    <>
      <HeroSlider
        slides={[
        <Fragment key="s0">
          <Photo name="hero-premium" sizes="100vw" priority />
          <div className="wrap hero-content">
            <span className="kicker">Русское спортивное общество</span>
            <h2 className="title-xl">Премия «Лидеры индустрии спорта»</h2>
            <div className="hero-actions">
              <a className="btn btn-gold" href="https://leaders.rusport.org/" target="_blank" rel="noopener noreferrer">На сайт премии</a>
            </div>
          </div>
        </Fragment>,
        <Fragment key="s1">
          <Photo name="hero-unite" sizes="100vw" mobilePos="80% 50%" />
          <div className="wrap hero-content">
            <h1 className="title-xl">Русское спортивное общество</h1>
            <p>Объединяем тех, кто делает российский спорт сильнее.</p>
            <div className="hero-actions">
              <Socials />
            </div>
          </div>
        </Fragment>,
        <Fragment key="s2">
          <Photo name="hero-nation" sizes="100vw" mobilePos="40% 0%" />
          <div className="wrap hero-content">
            <span className="kicker">Русское спортивное общество</span>
            <h2 className="title-xl">Здоровая нация — сильная нация</h2>
            <div className="hero-actions">
              <Socials />
            </div>
          </div>
        </Fragment>,
        ]}
      />

      <section className="section" id="projects">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2 className="h2">Наши проекты</h2>
              <p className="lead">РСО находится между государством и бизнесом и создаёт платформу, где встречаются заказчики и исполнители спортивной отрасли.</p>
            </div>
          </div>
          <div className="grid-3">
            {PROJECTS.map((p, i) => {
              // работающие платформы (статистика) — карточки-ссылки; медиа (/news) пока не готово — без ссылки
              const live = false; // демо: без переходов на платформы
              return (
              <ProjectCard key={p.id} id={`project-${p.id}`} href={undefined}>
                <Photo name={`project-${p.id}`} sizes={CARD_SIZES} />
                <span className="pcard-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="pcard-body">
                  <h3 className="pcard-title">{p.title}{live && <span aria-hidden="true"> →</span>}</h3>
                  <p className="pcard-text">{p.lead}</p>
                </div>
              </ProjectCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bleed" id="about">
        <Photo name="dialog" sizes="100vw" />
        <div className="wrap">
          <span className="kicker" style={{ color: "var(--gold-light)" }}>Об обществе</span>
          <h2 className="bleed-title">Инфраструктура диалога со спортивной страной</h2>
          <p className="lead" style={{ maxWidth: 720 }}>РСО не просит «поддержать сообщество». Оно даёт инструмент, который помогает видеть отрасль, слышать людей и реализовывать инициативы.</p>
          <div className="pillars">
            <div className="pillar reveal">
              <h3>Слышать</h3>
              <p>Комитеты, региональная сеть и сообщество дают постоянный канал обратной связи от отрасли и людей спорта.</p>
            </div>
            <div className="pillar reveal">
              <h3>Знать</h3>
              <p>Исследования, индексы и ежегодный доклад дают объективную картину состояния спортивной индустрии.</p>
            </div>
            <div className="pillar reveal">
              <h3>Делать</h3>
              <p>РСО объединяет государство, бизнес и спорт вокруг конкретных проектов национального и регионального масштаба.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band-gold">
        <div className="wrap">
          <div>
            <h2 className="band-title">Следите за Русским спортивным обществом</h2>
            <p>Подпишитесь на нас, чтобы быть в курсе всех новостей и проектов Общества.</p>
          </div>
          <Socials />
        </div>
      </section>

      <section className="section section-ivory">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">Две идеи. Одна страна</h2>
          </div>
          <div className="ideas">
            <div className="pcard idea reveal">
              <Photo name="idea-state" sizes="(max-width: 767px) 100vw, 660px" />
              <div className="pcard-body">
                <span className="kicker">Государство</span>
                <h3 className="pcard-title">Спорт как национальная идея</h3>
                <p className="pcard-text">Объединяет людей, регионы и поколения. Говорит на всех языках. Создаёт общую идентичность, гордость и чувство принадлежности.</p>
              </div>
            </div>
            <div className="pcard idea reveal">
              <Photo name="idea-life" sizes="(max-width: 767px) 100vw, 660px" />
              <div className="pcard-body">
                <span className="kicker">Человек</span>
                <h3 className="pcard-title">Спорт как норма жизни</h3>
                <p className="pcard-text">Здоровье, семья, образование, досуг, городская среда и ежедневная привычка миллионов граждан России.</p>
              </div>
            </div>
          </div>
          <div className="ideas-result reveal">Усиливая индустрию — <span>мы усиливаем страну</span></div>
        </div>
      </section>

      <section className="section" id="members">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">Что получает профессиональная спортивная индустрия</h2>
          </div>
          <div className="values">
            {AUDIENCES.map((a) => (
              <div className="value reveal" key={a.id}>
                <div className="value-img">
                  <Photo name={`audience-${a.id}`} sizes="(max-width: 767px) 100vw, 330px" />
                </div>
                <div className="value-body">
                  <h3 className="value-title">{a.title}</h3>
                  <ul>{a.items.map((it) => <li key={it}>{it}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ivory" id="partners">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2">Партнёры</h2>
          </div>
          <div className="partners">
            {PARTNERS.map(([src, alt], i) => (
              <div className="partner reveal" style={{ transitionDelay: `${i * 160}ms` }} key={alt}>
                <Image src={src} alt={alt} sizes="200px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section manifesto">
        <div className="wrap">
          <div className="manifesto-words reveal">
            <span>Люди</span><i /><span>Организации</span><i /><span>Бизнес</span><i /><span>Спорт</span>
          </div>
          <p className="manifesto-claim reveal">Наша цель — <b>крупнейшее спортивное сообщество в стране</b></p>
          <Socials dark />
        </div>
      </section>
    </>
  );
}
