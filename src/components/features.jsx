import React from "react";
import BentoCard from "./utilities/bento-card";
import BentoTilt from "./utilities/bento-tilt";

const Features = () => {
  return (
    <section className="bg-black pb-2 md:pb-52 ">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md pb-32 font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in an IP-rich product universe where AI-driven
            gamification and hyper-personalization lead the human-agentic
            economy.
          </p>

          <BentoTilt
            className={
              "border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]"
            }
          >
            <BentoCard
              src="videos/feature-1.mp4"
              title={
                <>
                  radi<b>n</b>t
                </>
              }
              description="A cross-platform metagame app, turning activities across Web2 and Web3 games into rewarding adventures"
              isComingSoon={true}
            />
          </BentoTilt>
          <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
            <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
              <BentoCard
                src="videos/feature-2.mp4"
                title={
                  <>
                    zig<b>m</b>a
                  </>
                }
                description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              />
            </BentoTilt>
            <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
              <BentoCard
                src="videos/feature-3.mp4"
                title={
                  <>
                    n<b>e</b>xus
                  </>
                }
                description="The first-ever AI-driven, hyper-personalized metagame layer."
              />
            </BentoTilt>
            <BentoTilt className="bento-tilt_1">
              <BentoCard
                src="videos/feature-4.mp4"
                title={
                  <>
                    az<b>u</b>le
                  </>
                }
                description="A Web3 metaverse, where the real and virtual worlds collide."
              />
            </BentoTilt>
            <BentoTilt className="bento-tilt_2">
              <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                <h1 className="bento-title special-font max-w-64">
                  M<b>o</b>re co<b>m</b>ing s<b>o</b>on!
                </h1>
                <img src="img/triangle-dark.png" className="self-end w-16 " />
              </div>
            </BentoTilt>
            <BentoTilt className="bento-tilt_2">
              <video
                src="videos/feature-5.mp4"
                loop
                muted
                autoPlay
                className="size-full object-cover object-center"
              />
            </BentoTilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
