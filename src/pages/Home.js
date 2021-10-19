import React from 'react'
import Doctors from '../components/Doctors/Doctors'
import Donate from '../components/Donate/Donate'
import Intro from '../components/Intro/Intro'
import Services from '../components/Services/Services'

const Home = () => {
    return (
        <>
            <Intro />
            <Services />
            <Donate />
            <Doctors />
        </>
    )
}

export default Home
