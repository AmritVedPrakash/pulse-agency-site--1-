import ScrollReveal, { ClipReveal } from "../common/ScrollReveal";
import storyImage from "../../assets/about/story.png";
import { about } from "../../data/about";
export default function Story() {
  return (
    <section className="section pt-4">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <ClipReveal className="lg:col-span-6">
          <img
            src={storyImage}
            alt="The Frame Theory Socials team collaborating"
            loading="eager"
            decoding="async"
            className="aspect-[10/11] w-full rounded-[2rem] object-cover"
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
