
import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css'; // Import the CSS file
import { useGSAP } from '@gsap/react'
import { isMobile } from 'react-device-detect';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { useTransform, useScroll, motion } from 'framer-motion';
import img1 from '../assets/img/IMG-20221204-WA0006.webp'
import img2 from '../assets/img/IMG-20230326-WA0029.webp'
import img3 from '../assets/img/IMG20230223152850.webp'
import img4 from '../assets/img/IMG_0876.webp'
import img5 from '../assets/img/IMG_1162.webp'
import img6 from '../assets/img/IMG_1189.webp'
import img7 from '../assets/img/IMG_1190.webp'
import img8 from '../assets/img/IMG_20221203_152539.webp'
import img9 from '../assets/img/IMG_7944.webp'
import img10 from '../assets/img/IMG20230223152850.webp'
import img11 from '../assets/img/IMG_7929.webp'
import img12 from '../assets/img/IMG_7944.webp'
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,

];

function Home() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });
  const { scrollXProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  
  const {width} =dimension
  const x = useTransform(scrollYProgress, [0, 1], [0, width * 1.2]);
const x2 = useTransform(scrollYProgress, [0, 1], [0, width *3]);
const x3 = useTransform(scrollYProgress, [0, 1], [0, width * 1.125]);
const x4 = useTransform(scrollYProgress, [0, 1], [0, width * 1.2]);


  useEffect(() => {
    const lenis = new Lenis();
    
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();
    
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  
  const galleryCont = useRef(null)
  const galleryRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    const title = galleryRef.current
    gsap.to(title.children, {
      y: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "back.out",
      scrollTrigger: {
        trigger:title
      }
    })
  },{scope:galleryCont})
  return (
    <main className="main" ref={galleryCont}>
      <div className="spacer">
        <h1 className='gallery-title' ref={galleryRef}>
        {Array.from("LIFE WITH US").map((letter, index) => (
    <div key={index} className="letter" style={{ whiteSpace: 'pre' }}>{letter}</div>
))}
        </h1>
      </div>
      <div ref={gallery} className="gallery">
  {
    !isMobile ? (
      <>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </>
    ) : (
      <>
        <Row images={[images[0], images[1], images[2]]} x={x} />
        <Row images={[images[3], images[4], images[5]]} x={x2} />
        <Row images={[images[6], images[7], images[8]]} x={x3} />
        <Row images={[images[9], images[10], images[11]]} x={x4} />
      </>
    )
  }
</div>
      <div className="spacer-end"></div>
    </main>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div
      className="column"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="imageContainer" style={{backgroundImage:`url(${src})`}}>
          
        </div>
      ))}
    </motion.div>
  );
};
const Row = ({ images, x }) => {
  return (
    <motion.div
      className="row"
      style={{ x }}
    >
      {images.map((src, i) => (
        <div key={i} className="imageContainer" style={{backgroundImage:`url(${src})`}}>
          
        </div>
      ))}
    </motion.div>
  );
};

export default Home;
