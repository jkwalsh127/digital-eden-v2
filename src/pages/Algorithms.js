import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import Info from '../components/Info';


export default function Landing() {

    const [poster, setPoster] = useState(false);

    return (
        <div>

            <Hero setPoster={setPoster} poster={poster} />
            <Info />

        </div>
    );
}