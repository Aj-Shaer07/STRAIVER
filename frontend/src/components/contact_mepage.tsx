import '../App.css';
import { Navbar } from '../components/ui/navbar.tsx';
import Particles from '../blocks/Backgrounds/Particles/Particles';
import ContactMe from '../components/ui/contactme.tsx';
import { IconCloud } from '../components/magicui/icon-cloud.tsx';
import { Globe } from "@/components/magicui/globe";

export default function ContactMePage() {
  return (
    <>
      <Navbar />
      {/* Background Layer */}
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
          particleCount={200}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div style={{ position: "relative", width: "100vw", height: "50px", zIndex: 1 }} />
      {/* Foreground Content */}
      <main
        className="flex flex-col items-center justify-center"
        style={{
          background: "transparent",
          color: "#fff",
          minHeight: "100vh",
          width: "100vw",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1 className="text-4xl md:text-4xl font-bold mb-8 text-center" 
        style={{ position: "relative", top: 10, right: 80, width: "50%", height: "40%", zIndex: 10 }}>
          Get in Touch with Us !!!
        </h1>
          <div style={{ position: "relative", top: 100, right: 500, width: "50%", height: "40%", zIndex: 10 }}>
            <Globe />
          </div>
        <div className="w-full max-w-6xl flex items-end gap-8 relative flex-1 h-full">
          {/* Icon Cloud as background, aligned right */}
            <div className="absolute inset-0 flex items-center justify-end pointer-events-none z-0 w-full h-full">
            <IconCloud />
            </div>
            {/* Contact Me form centered over Icon Cloud */}
            <div className="flex-1 flex items-center justify-end w-full relative z-10">
            <ContactMe />
            </div>
        </div>
      </main>
    </>
  );
}