import React from 'react';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import PharesProjects from '../components/Phares-projects';
import Approach from '../components/Approach';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {

    return (
        <>
            <Nav />
            <main>
                <Hero />
                <Skills />
                <PharesProjects />
                <Approach />
                <Contact />
                <Footer />
            </main>

        </>
    )
}

export default Home