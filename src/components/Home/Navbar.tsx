import React from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import Overflow from "../../utils/Overflow";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const GITHUB_URL = "https://github.com/Dpehect";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/yunus-emre-g%C3%BCrlek-4173a3224/";

const Navbar = ({
  logoColor,
  setLogoColor,
  pathName,
}: {
  logoColor: string;
  setLogoColor: React.Dispatch<React.SetStateAction<string>>;
  pathName: string;
}) => {
  Overflow(".logo .name-logo, .links div", 0.5);

  useGSAP(() => {
    setTimeout(() => {
      const homeScroller = document.querySelector("#homeFixedContainer");
      const nameLogo = document.querySelector(".name-logo");

      if (!homeScroller || !nameLogo) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".name-logo",
          scroller: "#homeFixedContainer",
          start: "-20 0",
          end: "+=150",
          scrub: true,
        },
      });
      tl.to(".name-logo", {
        opacity: 0,
      });
      tl.to(
        ".links",
        {
          display: "none",
          opacity: 0,
        },
        "<"
      );
      tl.to(".brandmark", {
        opacity: 1,
      });
      tl.to(".secondary-menu", {
        display: "flex",
        opacity: 1,
      });

      const sections = [
        { id: "hero", color: "#ffff" },
        { id: "work", color: "#0d0e13" },
        { id: "playreel", color: "#e4e0db" },
        { id: "images", color: "#0d0e13" },
        { id: "spread", color: "#0d0e13" },
        { id: "story", color: "#e0ccbb" },
      ];

      sections.forEach((section) => {
        if (section.id === "playreel") {
          ScrollTrigger.create({
            trigger: `#${section.id}`,
            scroller: "#homeFixedContainer",
            start: "top 10%",
            end: "+=250%",
            onEnter: () => {
              setLogoColor(section.color);
            },
            onEnterBack: () => {
              setLogoColor(section.color);
            },
            onLeave: () => {
              const nextSectionIndex =
                sections.findIndex((s) => s.id === section.id) - 1;
              if (nextSectionIndex >= 0) {
                setLogoColor(sections[nextSectionIndex].color);
              }
            },
            onLeaveBack: () => {
              const prevSectionIndex =
                sections.findIndex((s) => s.id === section.id) + 1;
              if (prevSectionIndex < sections.length) {
                setLogoColor(sections[prevSectionIndex].color);
              }
            },
          });
        } else if (section.id === "work" || section.id === "hero") {
          ScrollTrigger.create({
            trigger: `#${section.id}`,
            scroller: "#homeFixedContainer",
            start: "top 10%",
            end: "bottom 10%",
            onEnter: () => {
              setLogoColor(section.color);
            },
            onEnterBack: () => {
              setLogoColor(section.color);
            },
          });
        }
      });
    });
  }, [pathName]);

  return (
    <div className="fixed z-[999] w-full">
      <div className="mx-auto flex items-center justify-between p-5 text-white sm:p-12">
        <Link to="/" aria-label="SoftBridge Solutions home">
          <div className="logo relative flex h-12 w-64 items-center overflow-hidden">
            <span
              style={{ color: logoColor }}
              className="name-logo block text-sm font-medium uppercase leading-tight tracking-[0.22em] transition-colors duration-300 sm:text-base"
            >
              SoftBridge Solutions
            </span>
            <span
              style={{ color: logoColor, borderColor: logoColor }}
              className="brandmark absolute left-0 flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold tracking-[0.12em] opacity-0 transition-colors duration-300"
            >
              SB
            </span>
          </div>
        </Link>

        <div className="secondary-menu hidden items-center gap-4 opacity-0">
          <p
            style={{ color: logoColor }}
            className="text-base font-light transition-colors duration-300"
          >
            Menu
          </p>
          <div className="cursor-pointer space-y-[3px]">
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                style={{ backgroundColor: logoColor }}
                className="line h-[1.5px] w-5 transition-colors duration-300"
              />
            ))}
          </div>
        </div>

        <div className="links hidden items-center gap-10 overflow-hidden sm:flex">
          <div className="sm:flex items-center gap-5">
            <Link
              to="/work"
              style={{ color: logoColor }}
              className="text-base font-light"
            >
              Work
            </Link>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              <FaGithub
                style={{ color: logoColor }}
                className="h-5 w-5 transition-all hover:text-black"
              />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <FaLinkedin
                style={{ color: logoColor }}
                className="h-5 w-5 transition-all hover:text-black"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
