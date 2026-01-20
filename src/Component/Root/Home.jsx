import React from 'react'
import Banner from '../Shared/Banner'
import EventSection from '../Event/EventSection'
import GamesSection from '../Gaming/GamesSection'
import Footer from './Footer'
import About from '../About/About'
import BrandAmbassadors from '../BrandAmbassadors/BrandAmassadors'
import OfficialPartner from '../OfficialPartner/OfficialPartner'
import FooterText from './FooterText'
import Sponsorship from '../Sponsorship/Sponsorship'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
     <div className='w-full md:w-10/12 mx-auto'>
            <EventSection></EventSection>
       <GamesSection></GamesSection>
       <Footer></Footer>
       <Sponsorship></Sponsorship>
       <BrandAmbassadors></BrandAmbassadors>
       <OfficialPartner></OfficialPartner>
       <About></About>
       <FooterText></FooterText>
     </div>
    </div>
  )
}

export default Home