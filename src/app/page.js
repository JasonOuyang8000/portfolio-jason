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
    <main className={`${gfs.className} bg-indigo flex`}>
      <div class="bg-sky p-6 flex flex-col">
        <h1 className="text-2xl mt-6 text-center text-white mb-10 title">
          Jason Ouyang
        </h1>
        <div className="flex flex-col">
          <div className="mb-2 flex justify-center  p-2 ">
            <FontAwesomeIcon icon={faGithub} style={{ width: "35" }} />
          </div>
          <div className="mb-2 flex justify-center  p-2 ">
            <FontAwesomeIcon icon={faLinkedinIn} style={{ width: "35" }} />
          </div>
          <div className="mb-2 flex justify-center  p-2 ">
            <FontAwesomeIcon icon={faEnvelope} style={{ width: "35" }} />
          </div>
        </div>
      </div>
      <div className="flex section justify-center flex-col w-4/5 p-4">
        <div className="grid grid-height grid-rows-1 grid-flow-col gap-4">
          <div className="border rounded-lg border-[#82c0cc] p-2">
            <div className="col-section-pic"></div>
          </div>
          <div className="c-height-col bg-moonstone rounded-lg border border-[#82c0cc] p-6"></div>
          <div className="bg-grayish rounded-lg border border-[#82c0cc] p-6"></div>
        </div>
        <div className="bg-carribean  bottom-col mt-6 rounded-lg border  p-6"></div>
      </div>
    </main>
  );
}
