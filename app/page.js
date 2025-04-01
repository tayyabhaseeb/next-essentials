import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <Header />
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
