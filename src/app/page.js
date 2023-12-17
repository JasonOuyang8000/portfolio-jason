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
    <main className={`${gfs.className} flex`}>
      <div class="bg-white border-r  p-6  border-[#D3D3D3] flex flex-col">
        <h1 className="text-2xl text-center mb-10 title">Jason Ouyang</h1>
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
      <div class="w-4/5"></div>
    </main>
  );
}
