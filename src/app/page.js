import Image from "next/image";
import { GFS_Didot } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const gfs = GFS_Didot({
  weight: "400",
  subsets: ["greek"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={`${gfs.className} bg-indigo flex justify-center`}>
      <div class="bg-sky p-6 justify-center items-center flex flex-col title-box">
        <h1 className="text-2xl mt-6 text-center text-white mb-5 title">
          Jason Ouyang
        </h1>
        <div className="flex justify-center">
          <div className="mb-2 flex justify-center p-2">
            <div className="bg-moonstone border-2 border-[#243c5a] rounded-md px-4 py-2 flex items-center justify-center hover:bg-[#518e9b]">
              <a href="#">
                <FontAwesomeIcon icon={faGithub} style={{ width: "35" }} />
              </a>
            </div>
          </div>
          <div className="mb-2 flex justify-center  p-2 ">
            <div className="bg-moonstone border-2 border-[#243c5a] rounded-md px-4 py-2 flex items-center justify-center hover:bg-[#518e9b]">
              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} style={{ width: "35" }} />
              </a>
            </div>
          </div>
          <div className="mb-2 flex justify-center  p-2 ">
            <div className="bg-moonstone border-2 border-[#243c5a] rounded-md px-4 py-2 flex items-center justify-center hover:bg-[#518e9b]">
              <a href="#">
                <FontAwesomeIcon icon={faEnvelope} style={{ width: "35" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
