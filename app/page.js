const profile = {
  name: 'Will Murphy',
  title: 'Senior Software Engineer',
  email: 'williammurphy9723@gmail.com',
  github: 'https://github.com/Will-Murphy',
  linkedin: 'https://www.linkedin.com/in/will-murphy97',
}

const experience = [
  {
    company: '4G Clinical',
    role: 'Senior Software Engineer',
    period: 'Mar 2024 – Present',
    bullets: [
      'Lead backend design and development for 4C Supply forecasting systems with Django, Celery, NumPy, and Pandas.',
      'Drove critical algorithm rewrites improving memory usage by 3x+ and runtime by 10x+ while increasing forecast accuracy.',
      'Built CI/CD validation pipelines for accuracy, memory, performance, ingestion integrity, and execution consistency.',
      'Act as primary technical liaison for roadmap and feasibility with internal and external clinical supply experts.',
    ],
  },
  {
    company: '4G Clinical',
    role: 'Software Engineer',
    period: 'Nov 2021 – Mar 2024',
    bullets: [
      'Delivered production features for real-time trial supply, randomization, and dispensing workflows using Django/DRF and Angular.',
      'Implemented centralized controls for advanced trial blinding including unblinded pharmacist configurations.',
      'Designed flexible patient capping architecture supporting more complex allocation scenarios with simpler platform logic.',
    ],
  },
  {
    company: 'Decision Point Healthcare',
    role: 'Software Engineer',
    period: 'May 2020 – Nov 2021',
    bullets: [
      'Built APIs, frontend features, and integration pipelines for cloud healthcare applications with Node.js and Angular.',
      'Developed REST authentication and external API services with Django + PostgreSQL.',
      'Migrated key services to AWS (EC2, ECS, ECR, S3, IAM, CodePipeline).',
    ],
  },
]

const projects = [
  ['Address Data Microservice', 'https://github.com/Will-Murphy/dp-address-project'],
  ['Port Scan Detector', 'https://github.com/Will-Murphy/TCP-port-scan-detector'],
  ['Rocket Simulation', 'https://github.com/Will-Murphy/rocket-simulation'],
  ['Self-Driving Car Simulation', 'https://github.com/Will-Murphy/self-driving-car'],
]

export default function Home() {
  return (
    <main className="page">
      <div className="aura aura-one" />
      <div className="aura aura-two" />

      <section className="panel hero">
        <p className="caps">{profile.name}</p>
        <h1>{profile.title}</h1>
        <p className="subtitle">
          Scalable backend systems for clinical trials, with a focus on forecasting,
          reliability, and elegant execution under production constraints.
        </p>
        <div className="quick-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      <section className="panel">
        <h2>Programming Experience</h2>
        {experience.map((job) => (
          <article className="job" key={`${job.company}-${job.role}`}>
            <h3>{job.role}</h3>
            <p className="meta">{job.company} · {job.period}</p>
            <ul>
              {job.bullets.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
        ))}
      </section>

      <section className="panel split">
        <div>
          <h2>Education</h2>
          <p>
            <strong>University of Massachusetts Amherst</strong><br />
            B.S. Computer Science & Mathematics · May 2020<br />
            3.77 GPA, Cum Laude, Honors College, Bay State CS Scholar
          </p>
        </div>
        <div>
          <h2>Leadership</h2>
          <p>
            <strong>Cuba Service Trip — Trip Leader & Organizer</strong><br />
            July 2017<br />
            Helped plan and lead the first American service trip to Manzanillo,
            Cuba since 1956.
          </p>
        </div>
      </section>

      <section className="panel">
        <h2>GitHub Projects</h2>
        <p className="meta">Selected projects (more on GitHub profile):</p>
        <div className="project-grid">
          {projects.map(([name, href]) => (
            <a className="project" key={name} href={href} target="_blank" rel="noreferrer">
              <h3>{name}</h3>
              <p>View source →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Technical Skills</h2>
        <p>
          <strong>Languages:</strong> Python, TypeScript, JavaScript, CSS, HTML, SQL, C++, C, Java, Matlab<br />
          <strong>Frameworks:</strong> Django, Angular, Node.js, Flask, SQLAlchemy, React<br />
          <strong>Tools:</strong> Git, Docker, Bash, PostgreSQL, AWS, Linux, Redis, OpenAI APIs
        </p>
      </section>
    </main>
  )
}
