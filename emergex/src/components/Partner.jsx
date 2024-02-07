// import React, { useEffect, useRef } from 'react'

// import gsap from 'gsap'
// import { SplitText } from 'gsap/all'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import './Partner.css'
// import push from '../assets/img/push.png'
// import shardeum from '../assets/img/shardeum.png'
// import buildbear from '../assets/img/buildbear.svg'

// const Partner = () => {
//     gsap.registerPlugin(SplitText, ScrollTrigger);
//     const partnerRef = useRef(null);

//     useEffect(() => {
//         const partnerTitle = partnerRef.current;
//         const split = new SplitText(partnerTitle, {type:"words,chars"});
//         const chars = split.chars; 

//         gsap.from(chars, {
//             y: 150,
//             stagger: 0.05,
//             delay: 0.1,
//             opacity: 0,
//             duration: 0.8,
//             ease: "back.out",
//             scrollTrigger: {
//                 trigger: partnerTitle,
//                 start: "top 80%",
//             }
//         });

//     }, [])

//     return (
//         <div className='partner-container container-fluid d-flex'>
//             <div className='partner-title col-md-5 d-flex align-item-center my-auto'>
//                 <h1 ref={partnerRef} className='mx-auto d-flex flex-column'>
//                     {"Trusted By Partners".split(" ").map((word, wordIndex) => (
//                         <div key={wordIndex} className="word">{word}</div>
//                     ))}
//                 </h1>
//             </div>
//             <div className='partner-content col-md-7 d-flex my-auto'>
//                 <span>
//                     <img src={push} alt='push-protocol' />
//                     <p className='partner-text mt-5'>Push Protocol</p>
//                 </span>
//                 <span>
//                     <img src={shardeum} alt='shardeum' />
//                     <p className='partner-text mt-5'>Shardeum</p>
//                 </span>
//                 <span>
//                     <img src={buildbear} alt="build bear" />
//                     <p className='partner-text mt-5'>Build Bear</p>
//                 </span>
//             </div>
//         </div>
//     )
// }

// export default Partner