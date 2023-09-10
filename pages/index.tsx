import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { OurSponsors } from '@/components/OurSponsors';
import Head from 'next/head';
import FAQs from '@/components/FAQs';
import PrizeSection from '@/components/PrizeSection';
import Schedule from '@/components/Schedule';
import Footer from '@/components/Footer';

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <main>
      <Head>
        <title>Hackverse • 2.0</title>
        <link rel="icon" href="/assets/images/short-logo.ico" />
      </Head>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{
          zIndex: -1,
        }}
        options={{
          fpsLimit: 90,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: '',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#000000',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <Header />
      <div className="snap-y">
        <Hero />
        <OurSponsors />
        <Schedule />
        <PrizeSection />
        <FAQs />
        <Footer />
      </div>
    </main>
  );
}
