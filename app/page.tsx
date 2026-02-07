import Navbar from "@/sections/Navbar"
import Hero from "@/sections/Hero"
import LogoTicker from "@/sections/LogoTicker"
import Intro from "@/sections/introduction"
import Features from "@/sections/features"
import Integrations from "@/sections/integration"
import Faqs from "@/sections/faqs"
import CallToAction from "@/sections/CallToAction"
import Footer from "@/sections/footer"
export default function Home(){
  return <>
    <Navbar/>
    <Hero/>
    <LogoTicker/>
    <Intro/>
    <Features/>
    <Integrations/>
    <Faqs/>
    <CallToAction/>
    <Footer/>
  </>

}