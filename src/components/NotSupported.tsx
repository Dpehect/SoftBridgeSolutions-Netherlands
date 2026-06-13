import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
const NotSupported = () => {
  return (
    <div className="fixed space-y-3 top-0 left-0 flex flex-col h-screen w-screen items-center text-center justify-center bg-black text-white text-lg font-bold p-8">
      SoftBridge Solutions
      <br />
      This experience is tuned for a landscape viewport.<br></br> Wider screens
      show the full motion system best.
      <div>
        Please check on a landscape viewport. <br />
        Thanks!
      </div>
      <div className=" flex gap-6">
        <Link to={"https://github.com/Dpehect"} target="_blank">
          <FaGithub className=" w-[6.5vw] h-[10vw] text-white" />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/yunus-emre-g%C3%BCrlek-4173a3224/"}
          target="_blank"
        >
          <FaLinkedin className="  w-[6.5vw] h-[10vw] text-white" />
        </Link>
      </div>
    </div>
  );
};

export default NotSupported;
