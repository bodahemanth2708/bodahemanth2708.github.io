import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="glitch-wrapper">
          <h1 className="glitch-text" data-text="HEMANTH BODA">HEMANTH BODA</h1>
        </div>
        <div className="subtitle-container">
          <h2 className="role-text">
            <span className="typing-text">VLSI ENGINEER</span>
          </h2>
          <div className="hologram-line"></div>
        </div>
        <p className="tagline">
          <span className="highlight">Transforming</span> chip design concepts into 
          <span className="highlight"> silicon reality</span>
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

      {/* Projects Section */}
      <section className="section projects-section">
        <h2 className="section-title">
          <span className="title-bracket">[</span>
          FEATURED MISSIONS
          <span className="title-bracket">]</span>
        </h2>
        
        <div className="project-grid">
          <div className="project-card" data-aos="fade-up">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="project-number">01</div>
              <h3>Digital Circuit Synthesis</h3>
              <div className="tech-bar">
                <div className="tech-progress" style={{width: '85%'}}></div>
              </div>
              <p>Optimized RTL-to-gate synthesis flow achieving <span className="stat">15% area reduction</span></p>
              <div className="project-tags">
                <span className="tag">RTL</span>
                <span className="tag">SYNTHESIS</span>
                <span className="tag">OPTIMIZATION</span>
              </div>
            </div>
          </div>

          <div className="project-card" data-aos="fade-up" data-aos-delay="100">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="project-number">02</div>
              <h3>Static Timing Analysis</h3>
              <div className="tech-bar">
                <div className="tech-progress" style={{width: '92%'}}></div>
              </div>
              <p>Custom STA scripts for <span className="stat">multi-corner multi-mode</span> timing closure</p>
              <div className="project-tags">
                <span className="tag">TIMING</span>
                <span className="tag">ANALYSIS</span>
                <span className="tag">SCRIPTS</span>
              </div>
            </div>
          </div>

          <div className="project-card" data-aos="fade-up" data-aos-delay="200">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="project-number">03</div>
              <h3>Physical Design Flow</h3>
              <div className="tech-bar">
                <div className="tech-progress" style={{width: '88%'}}></div>
              </div>
              <p>Complete PD implementation from <span className="stat">floorplan to signoff</span></p>
              <div className="project-tags">
                <span className="tag">PHYSICAL</span>
                <span className="tag">LAYOUT</span>
                <span className="tag">SIGNOFF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <h2 className="section-title">
          <span className="title-bracket">[</span>
          TECHNICAL ARSENAL
          <span className="title-bracket">]</span>
        </h2>
        
        <div className="skills-grid">
          <div className="skill-category" data-aos="flip-left">
            <div className="skill-icon">⚡</div>
            <h3>Design Tools</h3>
            <div className="skill-items">
              <span>Cadence</span>
              <span>Synopsys</span>
              <span>Vivado</span>
              <span>Quartus</span>
            </div>
          </div>

          <div className="skill-category" data-aos="flip-left" data-aos-delay="100">
            <div className="skill-icon">💻</div>
            <h3>Languages</h3>
            <div className="skill-items">
              <span>Verilog</span>
              <span>SystemVerilog</span>
              <span>Python</span>
              <span>TCL</span>
            </div>
          </div>

          <div className="skill-category" data-aos="flip-left" data-aos-delay="200">
            <div className="skill-icon">🎯</div>
            <h3>Specialization</h3>
            <div className="skill-items">
              <span>Physical Design</span>
              <span>STA</span>
              <span>Power Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience-section">
        <h2 className="section-title">
          <span className="title-bracket">[</span>
          EXPERIENCE LOG
          <span className="title-bracket">]</span>
        </h2>
        
        <div className="timeline">
          <div className="timeline-item" data-aos="fade-right">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="company-badge">PRS SEMICON TECHNOLOGIES</div>
              <h3>VLSI Engineer</h3>
              <p className="duration">Current Mission</p>
              <p>Working on synthesis and physical design projects</p>
              <div className="achievement-bars">
                <div className="bar-item">
                  <span>Synthesis</span>
                  <div className="bar"><div style={{width: '90%'}}></div></div>
                </div>
                <div className="bar-item">
                  <span>Physical Design</span>
                  <div className="bar"><div style={{width: '85%'}}></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <h2 className="section-title">
          <span className="title-bracket">[</span>
          INITIATE CONTACT
          <span className="title-bracket">]</span>
        </h2>
        
        <div className="contact-grid">
          <a href="https://www.linkedin.com/in/hemanthboda2708" className="contact-card" data-aos="zoom-in">
            <div className="contact-icon">🔗</div>
            <h3>LinkedIn</h3>
            <p>Hemanth Boda</p>
            <div className="link-arrow">→</div>
          </a>

          <a href="https://github.com/bodahemanth2708" className="contact-card" data-aos="zoom-in" data-aos-delay="100">
            <div className="contact-icon">💾</div>
            <h3>GitHub</h3>
            <p>bodahemanth2708</p>
            <div className="link-arrow">→</div>
          </a>
        </div>

        <div className="footer-message">
          <p className="glowing-text">
            Building the future of semiconductor design, one chip at a time.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
