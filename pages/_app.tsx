import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function App({ Component, pageProps }: AppProps) {
  // const particlesInit = useCallback(async (engine: Engine) => {
  //   console.log(engine);

  //   await loadSlim(engine);
  // }, []);

  // const particlesLoaded = useCallback(
  //   async (container: Container | undefined) => {
  //     await console.log(container);
  //   },
  //   []
  // );

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* <Particles
        id="tsparticles"
        url="http://foo.bar/particles.json"
        init={particlesInit}
        loaded={particlesLoaded}
      /> */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
