import kaufi from '../../assets/marquee/kaufi.jpeg'
import kimirica from '../../assets/marquee/kimirica.png'
import luxe from '../../assets/marquee/luxe.png'
import neesh from '../../assets/marquee/neesh.png'
import rasa from '../../assets/marquee/rasa.jpeg'
import rus from '../../assets/marquee/rus.png'

const brandLogos = [
  { name: 'KauFi', src: kaufi },
  { name: 'Kimirica', src: kimirica },
  { name: 'Luxe & Kan', src: luxe },
  { name: 'Neesh Perfumes', src: neesh },
  { name: 'Rasa Cafeteria', src: rasa },
  { name: 'RüS Organic', src: rus },
]

export default function Marquee() {
  const row = [...brandLogos, ...brandLogos]

  return (
    <section aria-label="Brands we have worked with" className="border-y border-ink/10 bg-white py-6">
      <p className="sr-only">KauFi, Kimirica, Luxe &amp; Kan, Neesh Perfumes, Rasa Cafeteria, and RüS Organic</p>
      <div className="overflow-hidden">
        <div aria-hidden="true" className="flex w-max animate-marquee items-center gap-12 motion-reduce:animate-none sm:gap-14">
          {row.map((brand, i) => (
            <div key={`${brand.name}-${i}`} className="flex h-16 w-36 shrink-0 items-center justify-center sm:w-44">
              <img src={brand.src} alt="" className="max-h-14 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
