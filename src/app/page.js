import Image from "next/image";

export default function Home() {
  return (
    <main className="flex">
      <div class="bg-white border-r-1 border-indigo-500 p-6  border-[#454545] flex flex-col">
        <h1 className="text-2xl text-center mb-5">Jason Ouyang</h1>
        <div className="flex flex-col">
          <div className="mb-2 border p-2 rounded-full">
            <p className="text-xl text-center  ">Home </p>
          </div>
          <div className="mb-2 border p-2 rounded-full">
            <p className="text-xl text-center  ">Projects </p>
          </div>
          <div className="mb-2 border p-2 rounded-full">
            <p className="text-xl text-center  ">Contact</p>
          </div>
          <div className="mb-2 border p-2 rounded-full">
            <p className="text-xl text-center  ">Articles</p>
          </div>
        </div>
      </div>
      <div class="w-4/5"></div>
    </main>
  );
}
