import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function FloatingBox() {
  const mesh = useRef<THREE.Mesh | null>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.5;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#ff0080" />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />
      <OrbitControls enableZoom={false} autoRotate />
      <FloatingBox />
    </Canvas>
  );
}

const App: React.FC = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#000',
        color: '#fff',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        overflowY: 'auto',
        scrollSnapType: 'y mandatory',
      }}
    >
      {/* EPISODE 01 – HERO */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          scrollSnapAlign: 'start',
          overflow: 'hidden',
        }}
      >
        {/* 3D background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
          }}
        >
          <Scene />
        </div>

        {/* UI overlay */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '24px',
            boxSizing: 'border-box',
            background:
              'radial-gradient(circle at top, rgba(0,0,0,0.3), transparent 60%)',
          }}
        >
          {/* Top nav / title */}
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '14px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <div>VLSI • PORTFOLIO</div>
            <nav style={{ display: 'flex', gap: '16px' }}>
              <a
                href="#about"
                style={{ textDecoration: 'none', color: '#ccc' }}
              >
                About
              </a>
              <a
                href="#skills"
                style={{ textDecoration: 'none', color: '#ccc' }}
              >
                Skills
              </a>
              <a
                href="#projects"
                style={{ textDecoration: 'none', color: '#ccc' }}
              >
                Projects
              </a>
              <a
                href="#content"
                style={{ textDecoration: 'none', color: '#ccc' }}
              >
                Content
              </a>
            </nav>
          </header>

          {/* Hero text */}
          <main
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              maxWidth: '640px',
            }}
          >
            <p
              style={{
                fontSize: '13px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#a1a1aa',
                marginBottom: '12px',
              }}
            >
              EPISODE 01 • ORIGIN STORY
            </p>
            <h1
              style={{
                fontSize: '40px',
                lineHeight: 1.1,
                marginBottom: '16px',
              }}
            >
              The Cinematic World of
              <br />
              <span style={{ color: '#ff0080' }}>VLSI Learn With Fun</span>
            </h1>
            <p
              style={{
                fontSize: '14px',
                color: '#d4d4d8',
                maxWidth: '520px',
              }}
            >
              VLSI design engineer, educator, and storyteller. This is not a
              portfolio. This is an animated series about chips, timing, and
              building the future one transistor at a time.
            </p>
          </main>

          {/* Bottom bar */}
          <footer
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '12px',
              color: '#a1a1aa',
            }}
          >
            <div>Next: EPISODE 02 • SKILLS LAB</div>
            <div>LinkedIn • YouTube • Instagram • GitHub</div>
          </footer>
        </div>
      </section>

      {/* EPISODE 02 – ABOUT */}
      <section
        id="about"
        style={{
          minHeight: '100vh',
          scrollSnapAlign: 'start',
          padding: '80px 24px',
          boxSizing: 'border-box',
          background:
            'radial-gradient(circle at top, #020617, #020617 40%, #000 100%)',
        }}
      >
        <p
          style={{
            fontSize: '13px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#a1a1aa',
            marginBottom: '12px',
          }}
        >
          EPISODE 02 • ABOUT
        </p>
        <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>
          Origin of a VLSI Storyteller
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: '#d4d4d8',
            maxWidth: '680px',
          }}
        >
          This section will narrate your journey: how you started in
          electronics, discovered VLSI, built projects, and began teaching
          concepts with fun and storytelling. We will later replace this text
          with your real story and animated timeline.
        </p>
      </section>

      {/* EPISODE 03 – SKILLS */}
      <section
        id="skills"
        style={{
          minHeight: '100vh',
          scrollSnapAlign: 'start',
          padding: '80px 24px',
          boxSizing: 'border-box',
          background: 'radial-gradient(circle at top, #020617, #000 80%)',
        }}
      >
        <p
          style={{
            fontSize: '13px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#a1a1aa',
            marginBottom: '12px',
          }}
        >
          EPISODE 03 • SKILLS LAB
        </p>
        <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>
          Your VLSI Arsenal
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: '#d4d4d8',
            maxWidth: '680px',
            marginBottom: '24px',
          }}
        >
          Here we will showcase your skills as interactive elements: Verilog,
          STA, Synthesis, Physical Design, Timing Closure, and more. Later, we
          can animate each skill like a glowing chip or lab instrument.
        </p>
      </section>

      {/* EPISODE 04 – PROJECTS */}
      <section
        id="projects"
        style={{
          minHeight: '100vh',
          scrollSnapAlign: 'start',
          padding: '80px 24px',
          boxSizing: 'border-box',
          background: 'radial-gradient(circle at top, #020617, #000 80%)',
        }}
      >
        <p
          style={{
            fontSize: '13px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#a1a1aa',
            marginBottom: '12px',
          }}
        >
          EPISODE 04 • PROJECT LAB
        </p>
        <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>
          Experiments on Silicon
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: '#d4d4d8',
            maxWidth: '680px',
            marginBottom: '24px',
          }}
        >
          This will become an interactive lab showcasing your top VLSI projects:
          RTL design, synthesis flows, STA reports, physical design, and
          characterization. Each project can be a 3D card that opens like a lab
          experiment when clicked.
        </p>
      </section>

      {/* EPISODE 05 – CONTENT / LIVE STATS */}
      <section
        id="content"
        style={{
          minHeight: '100vh',
          scrollSnapAlign: 'start',
          padding: '80px 24px',
          boxSizing: 'border-box',
          background: 'radial-gradient(circle at top, #020617, #000 80%)',
        }}
      >
        <p
          style={{
            fontSize: '13px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#a1a1aa',
            marginBottom: '12px',
          }}
        >
          EPISODE 05 • CONTENT UNIVERSE
        </p>
        <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>
          Live Social Signals
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: '#d4d4d8',
            maxWidth: '680px',
            marginBottom: '24px',
          }}
        >
          Soon this section will auto-update with your latest LinkedIn posts,
          YouTube videos, and Instagram clips, along with live stats like post
          count, impressions, and subscribers. It will feel like a data cockpit
          for your personal brand.
        </p>
      </section>
    </div>
  );
};

export default App;
