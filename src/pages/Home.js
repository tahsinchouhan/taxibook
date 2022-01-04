import React from 'react'
import Header from './../components/Header'
import Saly from './travesaly/Saly'
import Footer from './travesaly/Footer'
import FooterIcons from '../Footer/FooterIcons'

function Home() {
    return (
        <div>
            <Header />
            <Saly />
            <div fluid="true" className="d-sm-none">
              <FooterIcons />
            </div>
            <Footer />
        </div>
    )
    
}

export default Home
