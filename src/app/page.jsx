import UseRouter from "@/components/UseRouter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <LearnLink />
    {/* <UseRouter /> */}
    <h1>Welcome to Next JS</h1>
    <p>
    {/* <Link href="/fetch/CSR" style={{color: 'white'}}>See Client Side Data Fetching</Link> */}
    </p>
    </main>
  );
}
