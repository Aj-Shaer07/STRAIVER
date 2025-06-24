import { useEffect, useRef, useState } from 'react'
import '../App.css'
import { Navbar } from '../components/ui/navbar.tsx'
import Particles from '../blocks/Backgrounds/Particles/Particles'
import { BoxReveal } from '../components/magicui/box-reveal.tsx'
import ScrollReveal from '../blocks/TextAnimations/ScrollReveal/ScrollReveal'

function App() {
  const [showScrollReveal, setShowScrollReveal] = useState(false);
  const [scrollRevealVisible, setScrollRevealVisible] = useState(true);
  const scrollRevealRef = useRef<HTMLDivElement>(null);

  // Show ScrollReveal after scrolling 70px
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollReveal(window.scrollY > 70);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide ScrollReveal when it goes under the navbar
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setScrollRevealVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
      }
    );
    if (scrollRevealRef.current) {
      observer.observe(scrollRevealRef.current);
    }
    return () => {
      if (scrollRevealRef.current) {
        observer.unobserve(scrollRevealRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Full-page Background Layer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
          backgroundColor: "black"
        }}
      >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={400}
          particleSpread={15}
          speed={0.3}
          particleBaseSize={200}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Foreground Content */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          width: "100vw",
          margin: 0,
          padding: 0,
          overflow: "hidden",
          background: "transparent",
        }}
      >
        <Navbar />
        <div
          style={{
            minHeight: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            fontFamily: "Inter, sans-serif",
            color: "white",
            textAlign: "center",
            position: "relative",
          }}
        >
          {/* BoxReveal fades out on scroll */}
          <div
            style={{
              transition: "opacity 0.6s",
              opacity: showScrollReveal ? 0 : 1,
              pointerEvents: showScrollReveal ? "none" : "auto",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              zIndex: 2,
            }}
          >
            <BoxReveal>
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        style={{ height: "150px", width: "200px" }}
                    />
                    <h1 className="text-4xl font-bold text-white">Welcome to Str-aver</h1>
                </div>
                <p className="text-lg text-gray-300 mt-4">Your go-to platform for learning DSA</p>
                </div>
            </BoxReveal>
          </div>
          {/* ScrollReveal fades in on scroll and disappears under navbar */}
          <div
            ref={scrollRevealRef}
            style={{
              transition: "opacity 0.6s",
              opacity: showScrollReveal && scrollRevealVisible ? 1 : 0,
              pointerEvents: showScrollReveal && scrollRevealVisible ? "auto" : "none",
              marginTop: "40vh",
              width: "900px",
              maxWidth: "100vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontSize: "1.1rem",
              paddingTop: "2rem",
              lineHeight: 1.6,
              color: "#f3e8ff",
              textAlign: "center",
            }}
          >
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={0}
              blurStrength={10}
            >
              Elevate your coding skills by mastering Data Structures and Algorithms.
              Gain confidence and solve problems efficiently.
              Stand out in interviews with strong problem-solving abilities.
              Start your journey and unlock endless software development opportunities!
            </ScrollReveal>
          </div>
          {/* Spacer to allow scrolling up and down */}
          <div style={{ height: "30vh" }} />
        </div>
      </section>
    </>
  )
}

export default App