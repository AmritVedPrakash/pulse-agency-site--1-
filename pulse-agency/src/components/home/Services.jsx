import ScrollReveal from "../common/ScrollReveal";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";
export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <ScrollReveal>
          <h2 className="h-section max-w-2xl">
            Everything your brand needs to show up and stand out.
          </h2>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-12 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
