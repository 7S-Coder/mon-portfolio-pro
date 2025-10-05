import React from 'react';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import PharesProjects from '../components/Phares-projects';

function Home() {

    return (
        <>
            <Nav />
            <main>
                <Hero />
                <Skills />
                < PharesProjects />
            </main>
        </>
    )
}

export default Home