import Ticker from '../components/Ticker'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Thesis from '../components/Thesis'
import WhatWeBack from '../components/WhatWeBack'
import IndexSection from '../components/IndexSection'
import Numbers from '../components/Numbers'
import Founders from '../components/Founders'
import Process from '../components/Process'
import Letters from '../components/Letters'
import Correspondence from '../components/Correspondence'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <>
      <Ticker />
      <Header />
      <main>
        <Hero />
        <Thesis />
        <WhatWeBack />
        <IndexSection />
        <Numbers />
        <Founders />
        <Process />
        <Letters />
        <Correspondence />
      </main>
      <Footer />
    </>
  )
}
