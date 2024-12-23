import Link from "next/link";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <main className="flex-1 bg-slate-100 p-4">
      <div className="flex flex-row min-h-svh">
        <div className="w-1/2 flex flex-col">
          <div className="h-1/2">
            <Slider />
          </div>
          <div className="h-1/2">
            <Link href={"/another-route"}>Click here</Link>
            <Link href={"/another-route/kuch-bhi"}>Click here dynamic</Link>
          </div>
        </div>
        <div className="w-1/2">Content 2</div>
      </div>
    </main>
  );
}
