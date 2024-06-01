import React from 'react';
import LandingPage from './page'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
export default function Layout(){
    return(
        <>
        <section className="w-full h-fit gap-[70px] flex flex-col justify-between">
            <Navbar />
                <LandingPage />
            <Footer />
        </section>
        </>
    )
}