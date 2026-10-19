import storyImage from "../../assets/about/story.png";
import { about } from "../../data/about";
export default function Story() {
  return (
    <section className="section pt-4">
      <div className="container-x grid min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0">
          <img
            src={storyImage}
            alt="The Frame Theory Socials team collaborating"
            loading="eager"
            decoding="async"
            className="aspect-[10/11] w-full max-w-full rounded-[2rem] object-cover"
          />
        </div>
        <div className="min-w-0">
          <h2 className="h-section">Our story</h2>
          {about.story.map((p) => (
            <p key={p} className="mt-5 break-words text-lg text-ink/70">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
