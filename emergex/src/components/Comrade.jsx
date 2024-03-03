import './Comrade.css'
import React,{useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)
export default function Comrade() {

	const cardRefs = [useRef(null), useRef(null), useRef(null),useRef(null),useRef(null)]; // Create an array of refs for each card

  function rotateToMouse(e, index) {
    const bounds = cardRefs[index].current.getBoundingClientRect(); // Get the bounds for the current card
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRefs[index].current.style.transform = `
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 1.2}deg
      )
    `;

    cardRefs[index].current.querySelector('.glowp').style.backgroundImage = `
	radial-gradient(
		circle at
		${center.x * 2 + bounds.width / 2}px
		${center.y * 2 + bounds.height / 2}px,
		#9DA7C440,
		#0000000f
	  )    `;
  }

  function handleMouseEnter(index) {
    document.addEventListener('mousemove', (e) => rotateToMouse(e, index)); // Pass index to rotateToMouse function
  }

  function handleMouseLeave(index) {
    document.removeEventListener('mousemove', (e) => rotateToMouse(e, index)); // Pass index to rotateToMouse function
    cardRefs[index].current.style.transform = '';
    cardRefs[index].current.style.background = '';
  }

    gsap.registerPlugin(ScrollTrigger)
    const comradeRef = useRef(null)
useGSAP(()=>{
const Scroll = new function() {
	let sections
	let page
	let main
	let scrollTrigger
	let tl
	let win
	
	// Init
	this.init = () => {
		sections = document.querySelectorAll('#section')
		page = document.querySelector('#page')
		main = document.querySelector('#main')
		win = {
			w: window.innerWidth,
			h: window.innerHeight
		}
		
		this.setupTimeline()
		this.setupScrollTrigger()
		window.addEventListener('resize', this.onResize)
	}
	
	// Setup ScrollTrigger
	this.setupScrollTrigger = () => {
		page.style.height = (this.getTotalScroll() + win.h) + 'px'
		
		scrollTrigger = ScrollTrigger.create({
			id: 'mainScroll',
			trigger: main,
			animation: tl,
			pin: true,
			scrub: true,
			snap: {
				snapTo: (value) => {
					
					let labels = Object.values(tl.labels)
					
					const snapPoints = labels.map(x => x / tl.totalDuration());
					const proximity = 0.1
					
					console.log(tl.labels , tl.totalDuration(), labels, snapPoints)
					
					for (let i = 0; i < snapPoints.length; i++) {
						if (value > snapPoints[i] - proximity && value < snapPoints[i] + proximity) {
							return snapPoints[i]
						}
					}
				},
				duration: { min: 0.2, max: 0.6 },
			},
			start: 'top top',
			end: '+=' + this.getTotalScroll(),
		})
	}
	
	// Setup timeline
	this.setupTimeline = () => {
		tl = gsap.timeline()
		tl.addLabel("label-initial")
		
		sections.forEach((section, index) => {
			const nextSection = sections[index+1]
			if (!nextSection) return

			tl.to(nextSection, {
				y: -1 * nextSection.offsetHeight,
				duration: nextSection.offsetHeight,
				ease: 'linear',
			})
			.addLabel(`label${index}`)
		})
	}
	
	// On resize
	this.onResize = () => {
		win = {
			w: window.innerWidth,
			h: window.innerHeight
		}
		
		this.reset()
	}
	
	// Reset
	this.reset = () => {
		if (typeof ScrollTrigger.getById('mainScroll') === 'object') {
			ScrollTrigger.getById('mainScroll').kill()
		}
		
		if (typeof tl === 'object') {
			tl.kill()
			tl.seek(0)
		}
		
		document.body.scrollTop = document.documentElement.scrollTop = 0
		this.init()
	}
	
	// Get total scroll
	this.getTotalScroll = () => {
		let totalScroll = 0
		sections.forEach(section => {
			totalScroll += section.offsetHeight
		})
		totalScroll -= win.h
		return totalScroll
	}
}

Scroll.init()
}, { scope: comradeRef })
const main = () => {
	const articles = Array.from(document.querySelectorAll("article"));
  
	articles.forEach((article, index) => {
	  setTimeout(() => {
		article.classList.add("reveal");
	  }, index * 250);
	});
  };
  document.addEventListener("DOMContentLoaded", main);
  
  return (
	  <div id="page" ref={comradeRef}>
          <main id='main'>
			  <section id='section' ><div className="gradient"><h2>BECOME A COMRADE NOW !</h2>
			   <p>Join the EmergeX Comrade Program if you're passionate about <span>blockchain</span> and <span>Web3 technologies</span> and its expansion. As a comrade you will oraganize engaging events, network with industry leaders, explore industrial opportunities and earn recognition.</p>
			  </div></section>
			  <section id='section' className='bento'>
				  <main className='bento-main'>
					  <article ref={cardRefs[0]} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}><div className="glowp" /></article>
						<article ref={cardRefs[1]} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}><div className="glowp" /></article>
						<article ref={cardRefs[2]} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}><div className="glowp" /></article>
						<article ref={cardRefs[3]} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)}><div className="glowp" /></article>
				  		<article ref={cardRefs[4]} onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={() => handleMouseLeave(4)}><div className="glowp" /></article>
				  </main>
			  </section>
		{/* <section id='section' className="gradient"><h2>3</h2></section> */}
	</main>
    </div>
  )
}
