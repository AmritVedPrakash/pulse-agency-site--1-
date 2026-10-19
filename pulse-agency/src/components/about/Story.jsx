import ScrollReveal, { ClipReveal } from "../common/ScrollReveal";
import SmartImg from "../common/SmartImg";
import { IMG } from "../../data/site";
import { about } from "../../data/about";
export default function Story() {
  return (
    <section className="section pt-4">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <ClipReveal className="lg:col-span-6">
          <SmartImg
            id={IMG.team}
            alt="The agency team collaborating around a table"
            w={1000}
            h={1100}
            eager
            className="aspect-[10/11] w-full rounded-[2rem]"
          />
        </ClipReveal>
        <ScrollReveal className="lg:col-span-5 lg:col-start-8">
          <h2 className="h-section">Our story</h2>
          {about.story.map((p) => (
            <p key={p} className="mt-5 text-lg text-ink/70">
              {p}
            </p>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
