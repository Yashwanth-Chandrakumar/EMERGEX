import React, { useState, useEffect, useRef } from 'react'

import './Ecosystem.css'

const Ecosystem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ecoRef = useRef(null);
  const ecocontent = ecoRef.current;
  
  const rotate = (index, totalItems) => {
      const angle = isOpen ? (360 / totalItems) * index : 0;
      return { transform: `rotate(${angle}deg)` };
    };
    
    const toggleOptions = () => {
        
        setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    
    const timerId = setTimeout(() => {
      toggleOptions();
    }, 100);

    return () => clearTimeout(timerId); 

  }, []);

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

  return (
    <div className='ecosystem'>
        <h1 className='eco-title col-md-12'>
            EmergeX Ecosystem
            </h1>
        <div className='eco-content' ref={ecoRef}>
            <ul className={`circle-group ${isOpen ? 'open' : ''}`}>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <li key={index} style={rotate(index, 6)} className='circle-card'>
                    <span className='circle'>circle</span>
                </li>))}
            </ul>
            <button className='eco-btn' onClick={toggleOptions}>
                EmergeX
                </button>
            </div>
        </div>
  )
}

export default Ecosystem