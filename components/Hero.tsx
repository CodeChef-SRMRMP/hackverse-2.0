// @ts-ignore
import MovingText from "react-moving-text";
import { Counter } from "./Counter";
import { useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="w-screen snap-start h-[calc(100vh-100px)] flex flex-col justify-center items-center">
      <Image
        alt="human"
        src="/assets/images/man-illustration.png"
        width={100}
        height={100}
        className="absolute md:fixed top-36  left-0 z-0"
      />
      <div className="flex flex-col items-center rounded-md">
        <div className="flex items-center font-bold gap-1 text-4xl md:text-7xl lg:text-9xl">
          {"Hack verse"
            .toUpperCase()
            .split("")
            .map((letter, index) => {
              return (
                <MovingText
                  key={index}
                  type="shakeMix"
                  duration="1500ms"
                  delay={index * 100 + "ms"}
                  direction="normal"
                  timing="ease"
                  iteration="infinite"
                  fillMode="none"
                >
                  {letter}
                </MovingText>
              );
            })}
        </div>
        <div className="text-sm md:text-xl font-bold">
          <MovingText
            type="shakeMix"
            duration="2000ms"
            delay={"100ms"}
            direction="normal"
            timing="ease"
            iteration="infinite"
            fillMode="none"
          >
            2.0
          </MovingText>
        </div>
      </div>

      <div className="border bg-secondary p-5 my-5 flex flex-col items-center">
        <div className="mb-5 flex flex-col items-center">
          <h2 className="font-medium text-xl">
            Largest Web3 Hackathon in South India
          </h2>
          <p>27th - 29th october 2023</p>
        </div>
        <div
          className="apply-button"
          data-hackathon-slug="YOUR-HACKATHON-SLUG"
          data-button-theme="dark"
          style={{ height: "44px", width: "312px" }}
        ></div>
      </div>
      <div className=" p-5 my-5 flex flex-col items-center">
        <Counter />
      </div>
    </div>
  );
};

export default Hero;
