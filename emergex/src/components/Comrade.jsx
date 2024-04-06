import './Comrade.css'
import React,{useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import decent from '../assets/img/1904.i502.005..Datacenter_isometric_composition-removebg-preview.webp'
import lastimg from "../assets/img/1162788168077-removebg-preview.webp"
import NorthEastIcon from '@mui/icons-material/NorthEast';
import {isMobile } from 'react-device-detect'
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
  const comradeRef = useRef(null)
if(!isMobile){
    gsap.registerPlugin(ScrollTrigger)
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
}
  
  return (
	  <div id="page" ref={comradeRef}>
          <main id='main'>
			  <section id='section' ><div className="gradient"><h2>BECOME A COMRADE NOW !</h2>
			   <p>Join the EmergeX Comrade Program if you're passionate about <span>blockchain</span> and <span>Web3 technologies</span> and its expansion. As a comrade you will oraganize engaging events, network with industry leaders, explore industrial opportunities and earn recognition.</p>
			  </div></section>
			  <section id='section' className='bento'>
				  <main className='bento-main'>
					  <article ref={cardRefs[0]} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
						  <img className='decent' src={decent}/>
						  <p>Network with industry leaders in the web3 community</p>
						  <div className="glowp"></div></article>
					  <article ref={cardRefs[1]} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}><div className="glowp" />
						  <p>Stay Updated on Web3 Trends.</p>
					  </article>
					  <article ref={cardRefs[2]} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}><div className="glowp" />
					  <p>Explore Industrial Opportunities with us.</p></article>
					  <article ref={cardRefs[3]} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)}><div className="glowp" />
					  <p>Become an early mover in Blockchain.</p></article>
						<article ref={cardRefs[4]} onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={() => handleMouseLeave(4)} onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeo8Gc0Dp0ebWLncS2YRV6KcnZu1_qrFYzBAKMQFsNKi4GJFQ/viewform', '_blank')}>
	<div className="glowp" />
	<div className='lastdiv'>
		<img src={lastimg}/>
		<p>It's never too late. Embark on Web3 Odessey.</p>
		<div className='registerbtn'>
			<a href='https://docs.google.com/forms/d/e/1FAIpQLSeo8Gc0Dp0ebWLncS2YRV6KcnZu1_qrFYzBAKMQFsNKi4GJFQ/viewform' target="_blank" rel="noopener noreferrer">
				<p className='lastp'>Register Here <NorthEastIcon className='ricon'/></p>
			</a>
		</div>
	</div>
</article>

				  </main>
			  </section>
		
	</main>
    </div>
  )
}
