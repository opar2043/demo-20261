import React from 'react'
import Banner from '../Shared/Banner'
import EventSection from '../Event/EventSection'
import GamesSection from '../Gaming/GamesSection'
import Footer from './Footer'
import About from '../About/About'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <EventSection></EventSection>
       <GamesSection></GamesSection>
       <Footer></Footer>
       <About></About>
    </div>
  )
}

export default Home