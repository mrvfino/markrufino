import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-green-400">
      <div className="flex min-h-[80%] w-[80%] flex-col md:flex-row">
        <div className="h-[61.8%] p-2 md:h-full md:w-[61.8%] md:p-4">
          <div className="h-full w-full rounded-2xl border border-black bg-red-500 p-2 shadow-[0px_6px_0px_rgba(0,0,0,1)]">
            ANG
          </div>
        </div>
        <div className="flex h-[38.2%] flex-row-reverse md:h-full md:w-[38.2%] lg:flex-col">
          <div className="w-[61.8%] p-2 md:p-4 lg:h-[61.8%] lg:w-full">
            <div className="h-full w-full rounded-2xl border border-black bg-yellow-500 p-2 shadow-[0px_6px_0px_rgba(0,0,0,1)]">
              BORING
            </div>
          </div>
          <div className="h-full w-[38.2%] p-2 md:h-[38.2%] md:w-full md:p-4">
            <div className="h-full w-full rounded-2xl border border-black bg-blue-500 p-2 shadow-[0px_6px_0px_rgba(0,0,0,1)]">
              SOBRA
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
