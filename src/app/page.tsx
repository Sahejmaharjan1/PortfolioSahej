import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Terminal } from "@/components/terminal";
import { Stats } from "@/components/stats";
import { Work } from "@/components/work";
import { Writing } from "@/components/writing";
import { OpenSource } from "@/components/opensource";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[920px] px-7 pb-[120px]">
        <Hero />
        <Terminal />
        <Stats />
        <Work />
        <Writing />
        <OpenSource />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
