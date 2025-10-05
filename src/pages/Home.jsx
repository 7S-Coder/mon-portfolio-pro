import React from 'react';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

function Home() {

    return (
        <>
            <Nav />
            <main>
                <Hero />
                <Skills />
            </main>
        </>
    )
}

export default Home