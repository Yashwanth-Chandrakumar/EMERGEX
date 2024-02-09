import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Ecosystem.css';

const Ecosystem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ecoRef = useRef(null);
  const label = ["Blockchain/ Web3 Companies", "Investors & VCs", "Government", "Non Profit Orgs.", "Talent Recruiters", "Educational Institutions"]
  const ecocontent = ecoRef.current;

  const rotate = (index, totalItems, padding=60) => {
      const temp = isOpen ? (-360 * 2 / totalItems) * index : 0;
      const angle = temp + padding * index;
      return { 
                transform: `rotate(${angle}deg)`,
                span: { transform: `rotate(${-angle}deg)` }, 
            };
    };
    
  const toggleOptions = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    if (ecoRef.current) {
      if (isOpen) {
        // console.log('open');
        ecoRef.current.classList.add('open');
    } else {
        ecoRef.current.classList.remove('open');
      }
    }
  }, [isOpen]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    if (ecocontent) {
      ScrollTrigger.create({
        trigger: ecocontent,
        start: 'top 70%',
        end: 'bottom 30%',
        onEnter: () => {
          toggleOptions();
        },
        onLeave: () => {
          toggleOptions();
        },
        onEnterBack: () => {
            toggleOptions();
        },
        onLeaveBack: () => {
            toggleOptions();
        },
        markers: true,
        scrub: true,
      });
    }
  }, [ecocontent]);
  
  return (
    <div className='ecosystem'>
        <h1 className='eco-title col-md-12 m-0 ps-5 py-5'>
            EmergeX Ecosystem
            </h1>
        <div className='eco-content col-md-12 d-flex' ref={ecoRef}>
            <ul className="circle-group">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <li key={index} style={rotate(index, 6)} className='circle-card'>
                        <span 
                            className='circle'
                            style={rotate(index, 6).span}
                        >
                            {label[index]}
                            </span>
                        </li>
                    ))}
            </ul>
            <h3 className='eco-label'>
                EmergeX
                </h3> 
            </div>
            
        {/* for testing */}
        <button className='eco-btn' onClick={toggleOptions}>
            EmergeX
            </button>
        </div>
  )
}

export default Ecosystem