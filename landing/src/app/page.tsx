import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-blue-900">
      <div className="flex min-h-[80%] w-[80%] flex-row bg-green-500">
        <div className="w-[61.8%] bg-red-500">red</div>
        <div className="flex w-[38.2%] flex-col">
          <div className="h-[61.8%] bg-yellow-500">yellow</div>
          <div className="h-[38.2%] bg-blue-500">blue</div>
        </div>
      </div>
    </main>
  );
}
