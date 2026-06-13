import { useGSAP } from "@gsap/react";
import gsap, { Expo } from "gsap/all";
import imageOne from "../../assets/workimg5.webp";
import imageTwo from "../../assets/workimg6.webp";
import imageThree from "../../assets/workimg7.webp";
import heroImage from "../../assets/workimg8.webp";
import imageFour from "../../assets/workimg9.webp";

const Images = () => {
  const position = [
    {
      image: imageThree,
      right: "right-[60%]",
      top: "top-[30%]",
      height: "h-[30%]",
      width: "w-[100%]",
    },
    {
      image: imageOne,
      right: "-right-[40%]",
      top: "top-[10%]",
      height: "h-[35%]",
      width: "w-[50%]",
    },
    {
      image: imageTwo,
      right: "right-[60%]",
      top: "top-[90%]",
      height: "h-[40%]",
      width: "w-[120%]",
    },
    {
      image: imageFour,
      right: "-right-[90%]",
      top: "top-[86%]",
      height: "h-[50%]",
      width: "w-[100%]",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".images-section",
        scroller: "#homeFixedContainer",
        start: "top 35%",
        end: "top -120%",
        scrub: 0.6,
        fastScrollEnd: true,
      },
      defaults: {
        ease: Expo.easeOut,
        force3D: true,
      },
    });

    tl.to(
      ".images:nth-child(1) img",
      {
        x: "-35%",
        y: "-55%",
      },
      "a"
    )
      .to(
        ".images:nth-child(2) img",
        {
          x: "60%",
          y: "-35%",
        },
        "a"
      )
      .to(
        ".images:nth-child(3) img",
        {
          x: "-35%",
          y: "-35%",
        },
        "a"
      )
      .to(
        ".images:nth-child(4) img",
        {
          x: "35%",
          y: "-35%",
        },
        "a"
      );
  }, []);

  return (
    <div
      id="images"
      className="images-section flex h-[70vh] w-full items-center justify-center overflow-hidden bg-white sm:h-[130vh]"
    >
      <div className="relative h-1/2 w-1/3 sm:w-1/4">
        {position.map((item, index) => {
          return (
            <div
              className={`images absolute ${item.height} ${item.width} ${item.top} ${item.right}`}
              id={`${index}`}
              key={index}
            >
              <img
                className="h-full w-full object-cover will-change-transform"
                src={item.image}
                alt=""
                loading="lazy"
              />
            </div>
          );
        })}

        <img className="h-full w-full object-cover" src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Images;
