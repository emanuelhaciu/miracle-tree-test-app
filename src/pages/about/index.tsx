import Wrapper from "@/app/components/layout/wrapper";
import { Body } from "@/app/components/shared/body";
import { Title } from "@/app/components/shared/title";

export default function About() {
  return (
    <Wrapper>
      <div className="max-w-2xl mx-auto py-12 space-y-8">
        <Title title="About This Project 🌳" className="text-center text-4xl font-bold mb-8" />
        <Body body="This is a project about trees. Trees are important for the environment and for our lives. They provide oxygen, absorb carbon dioxide, and help to regulate the climate. Trees also provide habitat for many species of animals and plants. Trees are a vital part of our ecosystem and we should all do our best to protect them." className="text-center text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl flex-grow" />
      </div>
    </Wrapper>
  );
}
