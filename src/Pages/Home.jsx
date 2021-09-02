import React from 'react'
import HomePage from '../Components/HomePage/HomePage'
import Navbar from '../Components/HomePage/Navbar/Navbar'
import "../App.css"
import Part2 from '../Components/ConfigPart/Part2'
const Home = () => {
    return (
        <div>
            <Part2 />
            <div  className="App">
            <Navbar/>
            <HomePage/>
            </div>
        </div>
    )
}

export default Home
