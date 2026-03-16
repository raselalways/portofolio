export default function PortfolioWebsite() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'Java',
    'C#',
    'Git / GitHub',
    'SQL',
  ];

  const projects = [
    {
      title: 'Projekt 01',
      description:
        'Hier kannst du eines deiner Projekte eintragen, zum Beispiel eine Todo App, Wetter App oder eine kleine Webanwendung.',
      tech: 'HTML • CSS • JavaScript',
    },
    {
      title: 'Projekt 02',
      description:
        'Nutze diesen Bereich für ein React- oder Node.js-Projekt und beschreibe kurz deine Aufgaben und Funktionen.',
      tech: 'React • Node.js • SQL',
    },
    {
      title: 'Projekt 03',
      description:
        'Füge hier ein weiteres Projekt hinzu, etwa aus deiner Umschulung oder ein eigenes Lernprojekt von GitHub.',
      tech: 'Python • Java • GitHub',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-lg font-bold tracking-tight">Rasel Miah</div>
            <div className="text-xs text-slate-400">Portfolio</div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">Über mich</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#projects" className="transition hover:text-white">Projekte</a>
            <a href="#contact" className="transition hover:text-white">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-5 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
              Developer Portfolio
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Rasel Miah
            </h1>
            <p className="mt-4 text-lg font-medium text-cyan-300">
              Umschüler Fachinformatiker Anwendungsentwicklung
            </p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Ich bin Umschüler zum Fachinformatiker für Anwendungsentwicklung und entwickle moderne Webanwendungen.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
              >
                Meine Projekte
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Kontakt
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
              <div className="mb-3 text-sm font-medium text-slate-400">Profil</div>
              <div className="text-2xl font-semibold">Motiviert, lernbereit und praxisnah</div>
              <p className="mt-4 leading-7 text-slate-300">
                Mein Fokus liegt auf moderner Webentwicklung mit sauberem Code, verständlicher Struktur und benutzerfreundlichen Oberflächen.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl font-bold text-cyan-300">10</div>
                <p className="mt-2 text-sm text-slate-300">Technologien in meinem aktuellen Stack</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl font-bold text-cyan-300">Web</div>
                <p className="mt-2 text-sm text-slate-300">Fokus auf moderne Anwendungen und saubere Entwicklung</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 bg-slate-900/60 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Über mich</h2>
              <p className="mt-5 leading-8 text-slate-300">
                Ich befinde mich in der Umschulung zum Fachinformatiker für Anwendungsentwicklung und baue meine Kenntnisse in Frontend- und Backend-Technologien kontinuierlich aus. Besonders spannend finde ich die Entwicklung moderner Webanwendungen mit React, Node.js und Datenbanken.
              </p>
              <p className="mt-4 leading-8 text-slate-400">
                Mein Ziel ist es, praktische Projekte umzusetzen, mein technisches Verständnis zu vertiefen und mich als Entwickler professionell zu präsentieren.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">Was diese Website zeigt</h3>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>✓ Mein Profil und meine berufliche Ausrichtung</li>
                <li>✓ Meine technischen Skills</li>
                <li>✓ Projekte aus Lernen, Praxis und GitHub</li>
                <li>✓ Eine professionelle Präsenz für Bewerbungen</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
              <p className="mt-4 text-slate-400">
                Diese Technologien gehören aktuell zu meinem Lern- und Entwicklungsbereich.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-200 shadow-lg shadow-cyan-950/20"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-white/10 bg-slate-900/60 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Projekte</h2>
              <p className="mt-4 text-slate-400">
                Hier kannst du deine besten Projekte präsentieren und später GitHub-Links oder Live-Demos ergänzen.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20"
                >
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-4 text-sm font-medium text-cyan-300">{project.tech}</p>
                  <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-6 flex gap-3">
                    <button className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
                      GitHub
                    </button>
                    <button className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5">
                      Live Demo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/15 to-slate-800 p-10 text-center shadow-2xl shadow-black/20">
              <h2 className="text-3xl font-bold tracking-tight">Kontakt</h2>
              <p className="mt-4 text-slate-300">
                Hier kannst du später deine E-Mail, dein GitHub-Profil und dein LinkedIn-Profil ergänzen.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  E-Mail: mahdirasel84@gmail.com
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  GitHub: github.com/deinprofil
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  LinkedIn: linkedin.com/in/deinprofil
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
