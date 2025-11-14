import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection 
        title = "Welcome To MyBlog"
        subtitle = "Start your writing journey — publish beautiful posts, connect with readers, and explore stories from creators around the world."
        
      />
    </>
  )
}

export default Home
