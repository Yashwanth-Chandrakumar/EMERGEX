import React, { useState, useEffect, useRef } from 'react'

import './Ecosystem.css'

const Ecosystem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ecoRef = useRef(null);
  const label = ["Blockchain/Web3 Companies", "Investors & VCs", "Government", "Non Profit Orgs.", "Talent Recruiters", "Educational Institutions"]
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
        <h1 className='eco-title col-md-12 m-0 ps-5 py-5'>
            EmergeX Ecosystem
            </h1>
        <div className='eco-content open' ref={ecoRef}>
            <ul className={`circle-group ${isOpen ? 'open' : 'open'}`}>
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