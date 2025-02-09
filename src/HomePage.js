import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import HeartsBackground from './HeartsBackground'
import PhotoCarousel from './PhotoCarousel';
import HeartReveal from './HeartReveal';

function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <HeartsBackground/>
      <div style={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent'}}>
        <Header/>
        <h1 style ={{ font_family: 'Montserrat', color: 'white'}}>Hi Arshia (cutie)</h1>
        <PhotoCarousel/>
        <h1 style ={{ font_family: 'Montserrat', color: 'white'}}>And can't wait for the memories ahead</h1>
        <h1 style ={{ font_family: 'Montserrat', color: 'white'}}>So I wanted to ask...</h1>
        <HeartReveal/>
        <div style={styles.buttonContainer}>
            <Link to="/game" style={styles.link}>
            <button style={styles.button}>Fun lil add on Game 🎮</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
    buttonContainer: {
      display: "flex",
      justifyContent: "center", // Centers horizontally
      alignItems: "center", // Centers vertically (if inside a full-height div)
      height: "40vh", // Adjust based on your layout
    },
    link: {
      textDecoration: "none", // Removes underline
    },
    button: {
      background: "linear-gradient(45deg, #FF69B4, #FF1493)", // Pink gradient
      color: "white",
      fontSize: "20px",
      fontWeight: "bold",
      padding: "12px 24px",
      borderRadius: "25px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    },
  };
  

export default Home;