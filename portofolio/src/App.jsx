function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "C#",
    "Git / GitHub",
    "SQL",
  ];

  const projects = [
    {
      title: "Projekt 1",
      description:
        "Hier kannst du später dein erstes Projekt eintragen, zum Beispiel eine Todo App oder eine kleine Website.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "Projekt 2",
      description:
        "Hier kannst du ein React- oder Node.js-Projekt zeigen und kurz beschreiben, was du gebaut hast.",
      tech: "React, Node.js, SQL",
    },
    {
      title: "Projekt 3",
      description:
        "Hier kannst du ein weiteres Lernprojekt oder ein Projekt aus deiner Umschulung präsentieren.",
      tech: "Python, Java, GitHub",
    },
  ];

  const styles = {
    page: {
      margin: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#0f172a",
      color: "#ffffff",
      minHeight: "100vh",
    },
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "24px",
    },
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 0",
      borderBottom: "1px solid #334155",
      flexWrap: "wrap",
      gap: "12px",
    },
    navLinks: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
    },
    link: {
      color: "#cbd5e1",
      textDecoration: "none",
      fontSize: "14px",
    },
    hero: {
      padding: "60px 0 40px 0",
    },
    badge: {
      display: "inline-block",
      backgroundColor: "#082f49",
      color: "#67e8f9",
      padding: "8px 14px",
      borderRadius: "999px",
      fontSize: "12px",
      marginBottom: "20px",
    },
    title: {
      fontSize: "48px",
      margin: "0 0 10px 0",
    },
    subtitle: {
      fontSize: "22px",
      color: "#67e8f9",
      marginBottom: "20px",
    },
    text: {
      fontSize: "18px",
      lineHeight: "1.7",
      color: "#cbd5e1",
      maxWidth: "700px",
    },
    section: {
      padding: "40px 0",
    },
    sectionTitle: {
      fontSize: "32px",
      marginBottom: "20px",
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginTop: "20px",
    },
    card: {
      backgroundColor: "#1e293b",
      padding: "20px",
      borderRadius: "16px",
      border: "1px solid #334155",
    },
    skillWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      marginTop: "20px",
    },
    skill: {
      backgroundColor: "#083344",
      color: "#a5f3fc",
      padding: "10px 14px",
      borderRadius: "12px",
      fontSize: "14px",
      border: "1px solid #155e75",
    },
    projectTitle: {
      margin: "0 0 8px 0",
      fontSize: "22px",
    },
    tech: {
      color: "#67e8f9",
      fontSize: "14px",
      marginBottom: "12px",
    },
    contactBox: {
      backgroundColor: "#1e293b",
      padding: "24px",
      borderRadius: "16px",
      border: "1px solid #334155",
      marginTop: "20px",
    },
    footer: {
      textAlign: "center",
      padding: "30px 0 40px 0",
      color: "#94a3b8",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <nav style={styles.nav}>
          <div>
            <div style={{ fontSize: "22px", fontWeight: "bold" }}>Rasel Miah</div>
            <div style={{ fontSize: "13px", color: "#94a3b8" }}>Portfolio</div>
          </div>

          <div style={styles.navLinks}>
            <a href="#about" style={styles.link}>Über mich</a>
            <a href="#skills" style={styles.link}>Skills</a>
            <a href="#projects" style={styles.link}>Projekte</a>
            <a href="#contact" style={styles.link}>Kontakt</a>
          </div>
        </nav>

        <header style={styles.hero}>
          <div style={styles.badge}>Dark Developer Style</div>
          <h1 style={styles.title}>Rasel Miah</h1>
          <div style={styles.subtitle}>
            Umschüler Fachinformatiker Anwendungsentwicklung
          </div>
          <p style={styles.text}>
            Ich bin Umschüler zum Fachinformatiker für Anwendungsentwicklung und
            entwickle moderne Webanwendungen.
          </p>
        </header>

        <section id="about" style={styles.section}>
          <h2 style={styles.sectionTitle}>Über mich</h2>
          <div style={styles.card}>
            <p style={styles.text}>
              Ich befinde mich in der Umschulung zum Fachinformatiker für
              Anwendungsentwicklung und erweitere kontinuierlich meine Kenntnisse
              in Frontend- und Backend-Technologien. Mein Fokus liegt auf
              moderner Webentwicklung, sauberem Code und praxisnahen Projekten.
            </p>
          </div>
        </section>

        <section id="skills" style={styles.section}>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <div style={styles.skillWrap}>
            {skills.map((skill) => (
              <div key={skill} style={styles.skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" style={styles.section}>
          <h2 style={styles.sectionTitle}>Projekte</h2>
          <div style={styles.cardGrid}>
            {projects.map((project) => (
              <div key={project.title} style={styles.card}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <div style={styles.tech}>{project.tech}</div>
                <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={styles.section}>
          <h2 style={styles.sectionTitle}>Kontakt</h2>
          <div style={styles.contactBox}>
            <p style={{ fontSize: "18px", margin: "0 0 12px 0" }}>
              <strong>E-Mail:</strong> mahdirasel84@gmail.com
            </p>
            <p style={{ color: "#cbd5e1", margin: 0 }}>
              GitHub und LinkedIn kannst du später noch ergänzen.
            </p>
          </div>
        </section>

        <footer style={styles.footer}>
          © 2026 Rasel Miah - Portfolio Website
        </footer>
      </div>
    </div>
  );
}

export default App;
