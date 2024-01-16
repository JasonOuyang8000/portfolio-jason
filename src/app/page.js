import Image from "next/image";
import { GFS_Didot } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

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
        <div className="flex justify-center items-center">
          <div className=" flex justify-center p-2 mb-2">
            <a
              href="#"
              className="bg-moonstone border-2 border-[#243c5a] rounded-md px-4 py-2 flex items-center justify-center hover:bg-[#518e9b]"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ width: 35, height: 35 }}
              />
            </a>
          </div>
          <div className="flex justify-center p-2 mb-2">
            <a
              href="#"
              className="bg-moonstone border-2 border-[#243c5a] rounded-md px-4 py-2 flex items-center justify-center hover:bg-[#518e9b]"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ width: 35, height: 35 }}
              />
            </a>
          </div>
          <div className="flex justify-center p-2 mb-2">
            <a
              href="#"
              className="bg-moonstone border-2 border-[#243c5a] rounded-md px-4 py-2 flex items-center justify-center hover:bg-[#518e9b]"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ width: 35, height: 35 }}
              />
            </a>
          </div>
        </div>

        <div className="bg-moonstone border-2 border-[#243c5a] rounded-md px-4 py-2 flex items-center justify-center hover:bg-[#518e9b]">
          <input
            type="text"
            className="p-2 rounded-md inputEmail"
            disabled
            value={"JasonOuyang80@gmail.com"}
          />

          <FontAwesomeIcon
            icon={faCopy}
            style={{ width: 20, height: 20 }}
            color="#fff"
          />
        </div>
      </div>
    </main>
  );
}
