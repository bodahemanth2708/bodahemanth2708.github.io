import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Particle system for sci-fi effect
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.opacity = Math.random() * 0.5 + 0.3
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = `rgba(0, 255, 255, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const particles: Particle[] = []
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-aos]')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="app">
      <canvas ref={canvasRef} className="particle-canvas" />

      <section className="hero-section">
        <div className="glitch-wrapper">
          <h1 className="glitch-text">HEMANTH BODA</h1>
        </div>

        <div className="subtitle-container">
          <h2 className="role-text">VLSI ENGINEER</h2>
          <div className="hologram-line"></div>
        </div>
        <p className="tagline">
          <span className="highlight">Transforming</span> complex chip design into{' '}
          <span className="highlight">elegant silicon</span>
        </p>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow-down">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <h2 className="section-title">
          <span className="title-bracket">&lt;</span>
          Featured Work
          <span className="title-bracket">/&gt;</span>
        </h2>

        <div className="project-grid">
          <a href="https://github.com/bodahemanth2708" className="project-card" data-aos="zoom-in">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="project-number">02</div>
              <h3>Chip Design Automation</h3>
              <div className="tech-bar">
                <div className="tech-progress"></div>
              </div>
              <p>Advanced RTL design methodologies</p>
              <div className="project-tags">
                <span className="tag">Verilog</span>
                <span className="tag">VLSI</span>
                <span className="tag">EDA</span>
              </div>
            </div>
          </a>

          <a href="https://github.com/bodahemanth2708" className="project-card" data-aos="zoom-in">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="project-number">01</div>
              <h3>VLSI CONTENT CREATION</h3>
              <div className="tech-bar">
                <div className="tech-progress"></div>
              </div>
              <p>PTeachibg complex topic in a funny and easy way</p>
              <div className="project-tags">
                <span className="tag">VLSI LEARN WITH FUN</span>
                <span className="tag">posts in Linkedin</span>
                <span className="tag">Explanation in Youtube</span>
              </div>
            </div>
          </a>

          <a href="https://github.com/bodahemanth2708" className="project-card" data-aos="zoom-in">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="project-number">03</div>
              <h3>Physical Design Flow</h3>
              <div className="tech-bar">
                <div className="tech-progress"></div>
              </div>
              <p>Place & Route optimization</p>
              <div className="project-tags">
                <span className="tag">Cadence</span>
                <span className="tag">P&R</span>
                <span className="tag">Layout</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <h2 className="section-title">
          <span className="title-bracket">&lt;</span>
          Tech Stack
          <span className="title-bracket">/&gt;</span>
        </h2>

        <div className="skills-grid">
          <div className="skill-category" data-aos="flip-left">
            <div className="skill-icon">⚙️</div>
            <h3>Hardware Design</h3>
            <div className="skill-items">
              <span>Verilog/SystemVerilog</span>
              <span>VHDL</span>
              <span>RTL Design</span>
              <span>Synthesis</span>
            </div>
          </div>

          <div className="skill-category" data-aos="flip-left">
            <div className="skill-icon">🔧</div>
            <h3>EDA Tools</h3>
            <div className="skill-items">
              <span>Cadence Virtuoso</span>
              <span>Synopsys DC</span>
              <span>Mentor Graphics</span>
              <span>ModelSim</span>
            </div>
          </div>

          <div className="skill-category" data-aos="flip-left">
            <div className="skill-icon">🚀</div>
            <h3>Programming</h3>
            <div className="skill-items">
              <span>Python</span>
              <span>C/C++</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>

          <div className="skill-category" data-aos="flip-left">
            <div className="skill-icon">📊</div>
            <h3>Analysis</h3>
            <div className="skill-items">
              <span>Static Timing</span>
              <span>Power Analysis</span>
              <span>SI Analysis</span>
              <span>SPICE Simulation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <h2 className="section-title">
          <span className="title-bracket">&lt;</span>
          Experience
          <span className="title-bracket">/&gt;</span>
        </h2>

        <div className="timeline">
          <div className="timeline-item" data-aos="fade-right">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="company-badge">VLSI Engineer</div>
              <h3>Physical Design & Verification</h3>
              <p className="duration">2025 - Present</p>
              <p>Optimizing chip designs for performance and power efficiency. Working on advanced technology nodes with complex design challenges.</p>
              <div className="achievement-bars">
                <div className="bar-item">
                  <span>Design Closure</span>
                  <div className="bar">
                    <div style={{ width: '85%' }}></div>
                    <div className="company-badge">VLSI Engineer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item" data-aos="fade-right">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="company-badge">VLSI Intern</div>
              <h3>RTL Design & Verification</h3>
              <p className="duration">2022 - 2023</p>
              <p>Developed and verified digital designs using Verilog. Contributed to multiple successful tape-outs with zero critical issues.</p>
              <div className="achievement-bars">
                <div className="bar-item">
                  <span>Test Coverage</span>
                  <div className="bar">
                    <div style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <h2 className="section-title">
          <span className="title-bracket">&lt;</span>
          Get In Touch
          <span className="title-bracket">/&gt;</span>
        </h2>

        <div className="contact-grid">
          <a href="https://www.linkedin.com/in/hemanthboda2708" className="contact-card" data-aos="zoom-in">
            <div className="contact-icon">🔗</div>
            <h3>LinkedIn</h3>
            <p>Connect with me professionally</p>
            <div className="link-arrow">→</div>
          </a>

          <a href="https://www.youtube.com/@HemanthBoda-2708" className="contact-card" data-aos="zoom-in">
            <div className="contact-icon">▶️</div>
            <h3>Youtube</h3>
            <p>VLSI Learn With Fun</p>
            <div className="link-arrow">→</div>
          </a>

          <a href="https://github.com/bodahemanth2708" className="contact-card" data-aos="zoom-in">
            <div className="contact-icon">🌐</div>
            <h3>GitHub</h3>
            <p>Check out my projects</p>
            <div className="link-arrow">→</div>
          </a>
        </div>

        <div className="footer-message">
          <p className="glowing-text">Building the future of semiconductor design, one chip at a time.</p>
        </div>
      </section>
    </div>
  )
}

export default App
