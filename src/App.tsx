import './App.css'

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <h1>Hemanth Boda</h1>
        <h2>VLSI Engineer</h2>
        <p className="tagline">Transforming chip design concepts into silicon reality | Physical Design & Timing Analysis Specialist</p>
      </section>

      {/* Projects Section */}
      <section className="section projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Digital Circuit Synthesis</h3>
            <p>Optimized RTL-to-gate synthesis flow achieving 15% area reduction</p>
          </div>
          <div className="project-card">
            <h3>Static Timing Analysis</h3>
            <p>Custom STA scripts for multi-corner multi-mode timing closure</p>
          </div>
          <div className="project-card">
            <h3>Physical Design Flow</h3>
            <p>Complete PD implementation from floorplan to signoff</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Design Tools</h3>
            <p>Cadence, Synopsys, Vivado, Quartus</p>
          </div>
          <div className="skill-category">
            <h3>Languages</h3>
            <p>Verilog, SystemVerilog, Python, TCL</p>
          </div>
          <div className="skill-category">
            <h3>Specialization</h3>
            <p>Physical Design, STA, Power Analysis</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>PRS Semicon Technologies</h3>
          <p className="role">VLSI Engineer</p>
          <p>Working on synthesis and physical design projects</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact">
        <h2>Get In Touch</h2>
        <p>LinkedIn: Hemanth Boda</p>
        <p>GitHub: bodahemanth2708</p>
        <p>Building the future of semiconductor design, one chip at a time.</p>
      </section>
    </div>
  )
}

export default App