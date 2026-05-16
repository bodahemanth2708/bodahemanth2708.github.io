import { useEffect, useRef } from 'react'
import './App.css'

const projects = [
  {
    number: '01',
    title: 'Physical Design Flow',
    summary:
      'Focused on floorplanning, power planning, placement, CTS, routing, timing closure, and signoff-ready layout quality.',
    tags: ['Floorplan', 'P&R', 'STA', 'DRC/LVS'],
  },
  {
    number: '02',
    title: 'RTL to GDSII Practice',
    summary:
      'Building confidence across synthesis, constraints, timing reports, area tradeoffs, and backend implementation steps.',
    tags: ['Verilog', 'Synthesis', 'SDC', 'GDSII'],
  },
  {
    number: '03',
    title: 'VLSI Learn With Fun',
    summary:
      'Creating simple LinkedIn and YouTube explanations that make VLSI concepts easier for students and beginners.',
    tags: ['LinkedIn', 'YouTube', 'Teaching', 'VLSI'],
  },
]

const skillGroups = [
  {
    title: 'Physical Design',
    items: ['Floorplanning', 'Placement', 'Clock Tree Synthesis', 'Routing', 'ECO awareness'],
  },
  {
    title: 'Timing & Signoff',
    items: ['Static Timing Analysis', 'Setup/Hold debug', 'Power intent basics', 'IR/EM awareness'],
  },
  {
    title: 'EDA & Design',
    items: ['Cadence flow exposure', 'Synopsys basics', 'Verilog/SystemVerilog', 'Linux workflow'],
  },
  {
    title: 'Automation',
    items: ['Python scripting', 'Tcl basics', 'Report reading', 'Design documentation'],
  },
]

const experience = [
  {
    role: 'Physical Design Engineer',
    title: 'Backend VLSI Implementation',
    duration: '2025 - Present',
    description:
      'Working toward clean physical implementation with attention to timing, congestion, power planning, and signoff checks.',
  },
  {
    role: 'Jr. VLSI Engineer',
    title: 'RTL, Verification & PD Fundamentals',
    duration: '2023 - 2025',
    description:
      'Built a strong base in digital design, verification concepts, synthesis flow, and physical design fundamentals.',
  },
  {
    role: 'VLSI Learner & Creator',
    title: 'Technical Content',
    duration: 'Ongoing',
    description:
      'Explaining chip design concepts in a practical, friendly way through posts and short-form educational content.',
  },
]

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrame = 0
    const particles = Array.from({ length: 85 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.8 + 0.6,
      speedX: Math.random() * 0.35 - 0.175,
      speedY: Math.random() * 0.35 - 0.175,
      opacity: Math.random() * 0.45 + 0.25,
    }))

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * ratio
      canvas.height = window.innerHeight * ratio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.fillStyle = 'rgba(2, 8, 23, 0.46)'
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      particles.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x > window.innerWidth) particle.x = 0
        if (particle.x < 0) particle.x = window.innerWidth
        if (particle.y > window.innerHeight) particle.y = 0
        if (particle.y < 0) particle.y = window.innerHeight

        ctx.fillStyle = `rgba(45, 212, 191, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particles.slice(index + 1).forEach((nextParticle) => {
          const dx = particle.x - nextParticle.x
          const dy = particle.y - nextParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 92) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.16 * (1 - distance / 92)})`
            ctx.lineWidth = 0.7
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(nextParticle.x, nextParticle.y)
            ctx.stroke()
          }
        })
      })

      animationFrame = requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('aos-animate')
        })
      },
      { threshold: 0.12 }
    )

    const elements = document.querySelectorAll('[data-aos]')
    elements.forEach((element) => observer.observe(element))

    return () => elements.forEach((element) => observer.unobserve(element))
  }, [])

  return (
    <div className="app">
      <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />

      <header className="site-header">
        <a href="#top" className="brand-mark" aria-label="Hemanth Boda home">
          HB
        </a>
        <nav aria-label="Portfolio navigation">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy" data-aos="fade-up">
            <p className="eyebrow">Physical Design Engineer</p>
            <h1>Hemanth Boda</h1>
            <p className="hero-lede">
              I work on the backend side of chip design, turning digital logic into manufacturable
              silicon through physical design flow, timing closure, and signoff-focused thinking.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-action">
                View Work
              </a>
              <a href="https://www.linkedin.com/in/hemanthboda2708" className="secondary-action">
                LinkedIn
              </a>
            </div>

            <div className="metrics" aria-label="Profile highlights">
              <div>
                <strong>RTL-GDSII</strong>
                <span>Flow focus</span>
              </div>
              <div>
                <strong>STA</strong>
                <span>Timing closure</span>
              </div>
              <div>
                <strong>P&R</strong>
                <span>Backend design</span>
              </div>
            </div>
          </div>

          <div className="profile-panel" data-aos="zoom-in" aria-label="Physical design profile">
            <div className="chip-shell">
              <div className="chip-core">
                <span>HB</span>
                <small>PD Engineer</small>
              </div>
              <div className="route route-a"></div>
              <div className="route route-b"></div>
              <div className="route route-c"></div>
              <div className="pins pins-top"></div>
              <div className="pins pins-right"></div>
              <div className="pins pins-bottom"></div>
              <div className="pins pins-left"></div>
            </div>
            <div className="profile-note">
              <span>Backend implementation</span>
              <strong>Floorplan . Place . CTS . Route . Signoff</strong>
            </div>
          </div>
        </section>

        <section className="section" id="work" data-aos="fade-up">
          <div className="section-heading">
            <p className="eyebrow">Featured Work</p>
            <h2>Semiconductor projects and learning tracks</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <a href="https://github.com/bodahemanth2708" className="project-card" key={project.title}>
                <span className="project-number">{project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="skills" data-aos="fade-up">
          <div className="section-heading">
            <p className="eyebrow">Tech Stack</p>
            <h2>Skills shaped for physical design work</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-category" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience" data-aos="fade-up">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Growing across VLSI implementation and communication</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="company-badge">{item.role}</div>
                  <h3>{item.title}</h3>
                  <p className="duration">{item.duration}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact" data-aos="fade-up">
          <div className="section-heading">
            <p className="eyebrow">Get In Touch</p>
            <h2>Let us connect around VLSI, PD flow, and learning</h2>
          </div>

          <div className="contact-grid">
            <a href="https://www.linkedin.com/in/hemanthboda2708" className="contact-card">
              <span className="contact-icon">in</span>
              <h3>LinkedIn</h3>
              <p>Professional updates and VLSI posts</p>
            </a>

            <a href="https://www.youtube.com/@HemanthBoda-2708" className="contact-card">
              <span className="contact-icon">YT</span>
              <h3>YouTube</h3>
              <p>VLSI Learn With Fun explanations</p>
            </a>

            <a href="https://github.com/bodahemanth2708" className="contact-card">
              <span className="contact-icon">GH</span>
              <h3>GitHub</h3>
              <p>Code, practice work, and projects</p>
            </a>
          </div>

          <p className="footer-message">Building physical design discipline one block at a time.</p>
        </section>
      </main>
    </div>
  )
}

export default App
