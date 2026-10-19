
import Button from "./Button";
import ScrollReveal from "./ScrollReveal";

export default function CtaBlock({
  title,
  text,
  label = "Start Your Project",
  to = "/contact",
}) {
  return (
    <section className="section">
      <div className="container-x">
        <ScrollReveal className="relative overflow-hidden rounded-[2.5rem] bg-[#40030d] px-6 py-16 text-center text-white sm:px-16 sm:py-24">
          <h2 className="relative mx-auto max-w-3xl h-section">
            {title}
          </h2>

          <p className="relative mx-auto mt-5 max-w-xl text-lg text-white/80">
            {text}
          </p>

          <div className="relative mt-9">
            <Button to={to} variant="light" arrow>
              {label}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
