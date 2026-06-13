const Spread = () => {
  return (
    <div id="spread" className="w-full bg-white">
      <div
        id="spreadContent"
        className="mx-auto flex max-w-screen-2xl flex-col items-center bg-white px-6 py-24 sm:py-36"
      >
        <div className="flex items-center gap-3">
          <svg
            className="size-4"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <h2 className="text-sm">SoftBridge Presents</h2>
        </div>

        <div className="mt-7 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] leading-[0.92] tracking-tight">
            Build
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] leading-[0.92] tracking-tight">
            the Future
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.7] text-[#0d0e13]/60 sm:mt-10 sm:text-xl">
            Read the thinking behind our interfaces, product systems, and the
            way SoftBridge Solutions brings startup ideas to life.
          </p>
          <a
            className="mt-6 inline-block border-b border-b-zinc-400 pb-1 text-sm sm:mt-10"
            href="#work"
          >
            Explore our work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Spread;
