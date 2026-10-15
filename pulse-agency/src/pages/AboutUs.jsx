import useSEO from '../hooks/useSEO'
import PageHero from '../components/common/PageHero'
import Story from '../components/about/Story'
import MissionVision from '../components/about/MissionVision'
import Values from '../components/about/Values'
import Team from '../components/about/Team'
import Approach from '../components/about/Approach'
import Results from '../components/home/Results'
import Process from '../components/home/Process'
import CtaBlock from '../components/common/CtaBlock'
import { about } from '../data/about'

export default function AboutUs() {
  useSEO('About Us | Frame Theory Socials', 'Meet the creative and strategy team behind Frame Theory Socials, a social media marketing agency built on ideas and data.')
  return (
    <>
      <PageHero title={about.hero.title} text={about.hero.text} />
      <Story />
      <MissionVision />
      <Values />
      <Team />
      <Approach />
      <Results />
      <Process />
      <CtaBlock title="Let’s Build Something Remarkable." text="Tell us where your brand is today and where you want it to be." label="Start a conversation" />
    </>
  )
}
