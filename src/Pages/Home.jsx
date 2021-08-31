import React from 'react'
import HomePage from '../Components/HomePage/HomePage'
import Navbar from '../Components/HomePage/Navbar/Navbar'
import "../App.css"
const Home = () => {
    return (
        <div className="App">
            <Navbar/>
            <HomePage/>
        </div>
    )
}

export default Home
