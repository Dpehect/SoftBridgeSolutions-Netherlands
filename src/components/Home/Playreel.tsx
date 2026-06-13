import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import playreelPoster from "../../assets/workimg2.webp";

const Playreel = () => {
  useGSAP(() => {
    gsap.set(".video-div", {
      force3D: true,
      transformOrigin: "center center",
      scale: 0.28,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".play-reel",
          scroller: "#homeFixedContainer",
          pin: true,
          start: "top top",
          end: "+=120%",
          scrub: 0.45,
          anticipatePin: 1,
        },
      })
      .to(".video-div", {
        scale: 1,
        ease: "none",
      });
  }, []);

  return (
    <div
      id="playreel"
      className="play-reel relative h-screen w-full overflow-hidden bg-[#0d0e13]"
    >
      <div className="video-div absolute inset-0 will-change-transform">
        <img
          className="h-full w-full object-cover opacity-70"
          src={playreelPoster}
          alt=""
        />
      </div>

      <div className="overlay absolute flex h-full w-full flex-col justify-between py-20 text-[#e4e0db]">
        <div className="flex items-center justify-center gap-2">
          <svg
            className="size-3"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <h2 className="text-sm">Work in motion</h2>
        </div>

        <h2 className="flex w-full items-center justify-center gap-6 sm:gap-16 md:gap-[20%] lg:gap-[38%]">
          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl">Build</div>
          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl">Reel</div>
        </h2>

        <p className="text-center text-sm">
          SoftBridge products are designed to feel alive. <br /> Every detail is
          shaped for clarity, speed, and momentum.
        </p>
      </div>
    </div>
  );
};

export default Playreel;
