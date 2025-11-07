"use client";
import { TextFade } from "@/components/animations-and-loading/TextFade";
import { loadFirePreset } from "@tsparticles/preset-fire";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";

export default function TopSection() {
  const textList = [
    "Precisa de criar vídeos institucionais?",
    "Quer aumentar suas vendas com funis de marketing?",
    "Deseja crescer nas redes sociais com vídeos para Reels?",
    "Buscando uma agência de marketing digital completa?",
  ];

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFirePreset(engine);
    }).then(() => setInit(true));
  }, []);

  const handleNavigateToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-[100vw] h-[72vh] overflow-hidden flex items-center justify-center bg-gradient-to-b from-primary-700 via-primary-900 to-black">
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0 pointer-events-none"
          options={{
            fullScreen: { enable: false },
            background: {
              color: { value: "transparent" },
            },
            backgroundMask: { enable: false },

            preset: "fire",
            detectRetina: true,
            smooth: true,

            particles: {
              color: {
                value: [
                  "#fda4c6",
                  "#ff65a0",
                  "#ff287b",
                  "#fc0061",
                  "#cc004e",
                  "#a3003e",
                ],
              },
            },
          }}
        />
      )}

      {/* content above */}
      <div className="relative z-10 flex flex-col items-center gap-4 px-4 text-center">
        <TextFade
          items={textList}
          wrapper="h1"
          className="text-white text-3xl sm:text-5xl font-extrabold text-center"
          intervalMs={5000} // 5s per text
          fadeMs={700} // 0.7s fade
        />
        <button
          className="w-fit rounded-md px-5 py-3 bg-primary-500 text-white font-semibold shadow-lg hover:bg-emerald-600 transition mt-4"
          onClick={handleNavigateToContact}
        >
          Fale com um Especialista
        </button>
      </div>

      <style jsx global>{`
        #tsparticles canvas {
          background: transparent !important;
        }
      `}</style>
    </div>
  );
}
