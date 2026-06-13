import React from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import storyVideo from "../../assets/workvid3.mp4";
import storyPoster from "../../assets/workimg3.webp";
import LazyVideo from "../LazyVideo";
const Story = ({
  setLogoColor,
}: {
  setLogoColor: React.Dispatch<React.SetStateAction<string>>;
}) => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: `#story`,
      scroller: "#homeFixedContainer",
      start: "top 10%",
      end: "bottom 10%",
      onEnter: () => setLogoColor("#e0ccbb"),
      onEnterBack: () => setLogoColor("#e0ccbb"),
      onLeave: () => setLogoColor("#0d0e13"),
      onLeaveBack: () => setLogoColor("#0d0e13"),
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#story`,
        scroller: "#homeFixedContainer",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
    tl.from(
      "#storyTextContainer",
      {
        yPercent: -100,
      },
      0
    );
    tl.from(
      ".video-container",
      {
        yPercent: -100,
      },
      0
    );
  }, []);

  return (
    <div id="story" className="overflow-hidden h-[85vh] sm:h-screen">
      <div
        id="storyContainer"
        className="relative w-full flex items-center overflow-hidden h-full origin-top  bg-[#070707] text-[#e0ccbb]"
      >
        <div className="video-container absolute top-0 right-0 h-1/2 w-2/3 sm:w-3/5 flex items-center opacity-80">
          <LazyVideo
            className="w-full scale-125"
            poster={storyPoster}
            src={storyVideo}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#070707] via-[#070707]/95 to-[#070707]/20" />
        <div
          id="storyTextContainer"
          className="absolute left-0 top-1/2 z-[2] w-full -translate-y-1/2 px-7 sm:px-28"
        >
          <div className="max-w-[34rem] space-y-6 sm:max-w-[38rem] sm:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-[3rem] font-medium leading-[0.92] text-[#f1e2d4] sm:text-[5rem] sm:leading-[0.9]">
                Our
                <span className="block pl-1">Story</span>
              </h1>
            </div>
            <p className="max-w-[30rem] text-sm font-light leading-[1.65] text-[#e0ccbb]/80 sm:text-base sm:leading-[1.65]">
              SoftBridge Solutions was built by Yunus Emre Gurlek to turn
              sharp product ideas into crafted, dependable digital systems.
            </p>
            <span className="inline-block h-[1px] w-full max-w-[30rem] bg-[#e0ccbb]/28"></span>
            <div className="flex max-w-[30rem] flex-col gap-3 text-[11px] leading-[1.6] text-[#e0ccbb]/58 sm:text-xs">
              <p>Designed, built, and presented by SoftBridge Solutions.</p>
              <div className="flex gap-5 text-[#e0ccbb]/72">
                <a
                  className="border-b border-[#e0ccbb]/25 pb-1 transition-colors hover:text-[#f1e2d4]"
                  href="https://www.linkedin.com/in/yunus-emre-g%C3%BCrlek-4173a3224/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="border-b border-[#e0ccbb]/25 pb-1 transition-colors hover:text-[#f1e2d4]"
                  href="https://github.com/Dpehect"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
