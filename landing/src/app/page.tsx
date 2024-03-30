import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-blue-900">
      <div className="flex min-h-[80%] w-[80%] flex-row">
        <div className="w-[61.8%]  p-4">
          <div className="h-full w-full bg-red-500 p-2">a</div>
        </div>
        <div className="flex w-[38.2%] flex-col">
          <div className="h-[61.8%] p-4">
            <div className="h-full w-full bg-yellow-500 p-2">b</div>
          </div>
          <div className="h-[38.2%] p-4">
            <div className="h-full w-full bg-blue-500 p-2">c</div>
          </div>
        </div>
      </div>
    </main>
  );
}
