import { existsSync } from "node:fs";
import { join } from "node:path";
import type { CSSProperties } from "react";
import CountUp from "@/components/CountUp";
import IntroFilm from "@/components/IntroFilm";
import Pulse from "@/components/Pulse";
import ReplayIntro from "@/components/ReplayIntro";
import RevealObserver from "@/components/RevealObserver";
import { education, experience, fit, principles, profile, skills, stack, stats, work } from "@/lib/content";

const delay = (i: number) => ({ "--d": `${i * 80}ms` }) as CSSProperties;

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <header className="section-head" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </header>
  );
}

export default function Home() {
  const hasResume = existsSync(join(process.cwd(), "public", profile.resumeFile));
  const current = experience[0];

  return (
    <>
      <IntroFilm />
      <RevealObserver />

      <div className="site">
        <nav className="nav" aria-label="Main">
          <div className="container nav__inner">
            <a href="#top" className="nav__brand">
              <span className="nav__dot" aria-hidden="true" />
              James Stearns
            </a>
            <ul className="nav__links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#skills">Toolkit</a></li>
            </ul>
            <a className="btn btn--small" href={`mailto:${profile.email}`}>Email me</a>
          </div>
        </nav>

        <main id="top">
          {/* Hero */}
          <section className="hero">
            <div className="hero__blob hero__blob--teal" aria-hidden="true" />
            <div className="hero__blob hero__blob--coral" aria-hidden="true" />
            <div className="container hero__grid">
              <div className="hero__copy">
                <p className="eyebrow" data-reveal>
                  {profile.role} · {profile.focus}
                </p>
                <h1 data-reveal style={delay(1)}>
                  Turning fragmented clinical workflows into <em>secure, empathetic</em> digital health.
                </h1>
                <p className="hero__lede" data-reveal style={delay(2)}>
                  I&rsquo;m James, a senior full-stack engineer with {profile.years} years designing, building and
                  operating cloud-native healthcare systems, unified patient portals and distributed data engines —
                  Python and Flask behind, React and NextJS in front.
                </p>
                <div className="hero__actions" data-reveal style={delay(3)}>
                  <a className="btn" href="#work">See my work</a>
                  <a className="btn btn--outline" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn <span aria-hidden="true">↗</span>
                  </a>
                  {hasResume && (
                    <a className="btn btn--outline" href={`/${profile.resumeFile}`} download>
                      Résumé <span aria-hidden="true">↓</span>
                    </a>
                  )}
                  <ReplayIntro />
                </div>
              </div>

              <aside className="vitals" data-reveal style={delay(2)} aria-label="At a glance">
                <div className="vitals__head">
                  <span className="vitals__live" aria-hidden="true" />
                  <span>Now</span>
                </div>
                <p className="vitals__role">{current.title}</p>
                <p className="vitals__org">
                  {current.company} · since {current.period.split(" — ")[0]}
                </p>
                <Pulse className="vitals__pulse" id="hero-pulse" />
                <dl className="vitals__rows">
                  <div>
                    <dt>Uptime baseline</dt>
                    <dd>99.9%</dd>
                  </div>
                  <div>
                    <dt>Test coverage on PHI paths</dt>
                    <dd>95%</dd>
                  </div>
                  <div>
                    <dt>Faster delivery with AI tools</dt>
                    <dd>40%</dd>
                  </div>
                </dl>
                <p className="vitals__foot">{profile.location}</p>
              </aside>
            </div>
          </section>

          {/* Stack marquee */}
          <div className="marquee" aria-label="Core stack">
            <div className="marquee__track">
              {[...stack, ...stack].map((item, i) => (
                <span key={i} aria-hidden={i >= stack.length}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Numbers */}
          <section className="section" aria-labelledby="numbers">
            <div className="container">
              <SectionHead eyebrow="Impact" title={<span id="numbers">By the numbers</span>} />
              <div className="stats">
                {stats.map((s, i) => (
                  <div className="stat" key={s.label} data-reveal style={delay(i)}>
                    <p className="stat__value">
                      <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
                    </p>
                    <p className="stat__label">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* About */}
          <section className="section section--tinted" id="about">
            <div className="container about">
              <div>
                <SectionHead eyebrow="About" title={<>Healthcare systems, built <em>end to end</em></>} />
                <div className="about__copy" data-reveal>
                  <p>
                    I&rsquo;m a high-agency senior full-stack engineer and technical generalist. I manage a portfolio of
                    high-stakes product features end to end — from relational schemas in PostgreSQL and scalable services
                    on AWS to responsive React and NextJS applications.
                  </p>
                  <p>
                    My work has focused on turning fragmented clinical workflows into secure, empathetic and integrated
                    digital health experiences, while using AI development tools responsibly and mentoring engineering
                    squads on technical and architectural standards.
                  </p>
                </div>
              </div>
              <div className="principles">
                {principles.map((p, i) => (
                  <article className="principle" key={p.title} data-reveal style={delay(i)}>
                    <span className="principle__n">0{i + 1}</span>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="section" id="experience">
            <div className="container">
              <SectionHead
                eyebrow="Experience"
                title="Where I’ve been"
                sub="From backend services at Amazon to healthcare platforms at HealthTap and platform leadership at Airbnb."
              />
              <ol className="timeline">
                {experience.map((role, i) => (
                  <li className="role" key={`${role.company}-${role.title}`} data-reveal style={delay(i)}>
                    <div className="role__meta">
                      <p className="role__period">{role.period}</p>
                      <p className="role__place">{role.place}</p>
                    </div>
                    <div className="role__body">
                      <h3>
                        {role.title} <span>· {role.company}</span>
                      </h3>
                      <ul>
                        {role.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Selected work */}
          <section className="section section--tinted" id="work">
            <div className="container">
              <SectionHead
                eyebrow="Selected work"
                title="Case notes"
                sub="Four problems I owned, what I built, and what changed."
              />
              <div className="cases">
                {work.map((c, i) => (
                  <article className="case" key={c.id} data-reveal style={delay(i)}>
                    <header className="case__head">
                      <span className="case__id">Case {c.id}</span>
                      <span className="case__metric">
                        <strong>{c.metric.value}</strong> {c.metric.label}
                      </span>
                    </header>
                    <h3>{c.title}</h3>
                    <p className="case__where">{c.where}</p>
                    <dl className="case__notes">
                      <div>
                        <dt>Challenge</dt>
                        <dd>{c.challenge}</dd>
                      </div>
                      <div>
                        <dt>Built</dt>
                        <dd>{c.built}</dd>
                      </div>
                      <div>
                        <dt>Outcome</dt>
                        <dd>{c.outcome}</dd>
                      </div>
                    </dl>
                    <ul className="tags">
                      {c.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Fit */}
          <section className="section" id="fit">
            <div className="container">
              <SectionHead
                eyebrow="Fit"
                title="What I bring to a patient-focused team"
                sub="The role’s requirements, and where my experience covers each one."
              />
              <ul className="fit">
                {fit.map((f, i) => (
                  <li className="fit__row" key={f.need} data-reveal style={delay(i % 4)}>
                    <span className="fit__check" aria-hidden="true">✓</span>
                    <div className="fit__need">
                      <p>{f.need}</p>
                      <span className={`fit__level${f.level === "Required" ? "" : " fit__level--nice"}`}>
                        {f.level}
                      </span>
                    </div>
                    <p className="fit__proof">{f.proof}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Skills + education */}
          <section className="section section--tinted" id="skills">
            <div className="container">
              <SectionHead eyebrow="Toolkit" title="The stack I reach for" />
              <div className="skills">
                {skills.map((g, i) => (
                  <div className="skill" key={g.group} data-reveal style={delay(i)}>
                    <h3>{g.group}</h3>
                    <ul className="tags">
                      {g.items.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="education" data-reveal>
                <p className="eyebrow">Education</p>
                <div className="education__grid">
                  {education.map((e) => (
                    <div className="degree" key={e.degree}>
                      <p className="degree__period">{e.period}</p>
                      <h3>{e.degree}</h3>
                      <p>{e.detail}</p>
                      <p className="degree__school">{e.school}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="contact" id="contact">
            <Pulse className="contact__pulse" id="contact-pulse" />
            <div className="container contact__inner" data-reveal>
              <p className="eyebrow eyebrow--light">Contact</p>
              <h2>
                Let&rsquo;s build secure, <em>empathetic</em> health experiences.
              </h2>
              <div className="contact__actions">
                <a className="btn btn--light" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <a className="btn btn--outline-light" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
              <p className="contact__where">{profile.location}</p>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footer__inner">
            <p>© {new Date().getFullYear()} {profile.name}</p>
            <p>Built with Next.js &amp; TypeScript</p>
          </div>
        </footer>
      </div>
    </>
  );
}
