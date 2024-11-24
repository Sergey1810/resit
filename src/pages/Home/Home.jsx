import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Baner from '../../components/Baner/Baner'
import Services from '../../components/Services/Services'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'
import Price from '../../components/Price/Price'
import Work from '../../components/Work/Work'
import Gallery from '../../components/Gallery/Gallery'
import Problem from '../../components/Problem/Problem'
import { ReactComponent as Gear }   from '../../images/иконки шестеренка 1.svg'
import Contact from '../../components/Contact/Contact'


const Home = () => {
    return (
        <div className='home'>
{/*               
         <Gear className='home__gear1' />
         <Gear className='home__gear2' />
         <Gear className='home__gear3' />
      
      */}
                
            
            <div className='home__container'>
                <Header/>
                <main>
                <Baner/>
                <Work/>
                <Services/>
                {/* <About/> */}
                <Gallery/>
                <Price/>
                <Contact/>
                <Problem/>
                </main>
             
                <Footer/>
            </div>
        </div>
    )
}

export default Home