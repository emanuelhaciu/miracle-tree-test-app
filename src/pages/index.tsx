import { Geist, Geist_Mono } from "next/font/google";
import Wrapper from "@/app/components/layout/wrapper";

export default function Home() {
  return (
    <main className="mx-auto space-y-10">
      <Wrapper>
        <h1 className="text-3xl font-bold mb-6 text-center 2xl:text-6xl">Blog Posts</h1>
      </Wrapper>
    </main>
  );
}
