import React from 'react'
import './Comrademob.css'
import decent from '../assets/img/1904.i502.005..Datacenter_isometric_composition-removebg-preview.webp'
import lastimg from "../assets/img/1162788168077-removebg-preview.webp"
import NorthEastIcon from '@mui/icons-material/NorthEast';
export default function Comrademob() {
  return (
    <div><div id="comrademob">
    <main id='main'>
  <section id='section' ><div className="gradient"><h2>BECOME A COMRADE NOW !</h2>
   <p>Join the EmergeX Comrade Program if you're passionate about <span>blockchain</span> and <span>Web3 technologies</span> and its expansion. As a comrade you will oraganize engaging events, network with industry leaders, explore industrial opportunities and earn recognition.</p>
  </div></section>
  <section id='section' className='bento'>
    <main className='bento-main'>
      <article >
        <img className='decent' src={decent}/>
        <p>Network with industry leaders in the web3 community</p>
        <div className="glowp"></div></article>
      <article  onMouseLeave={() => handleMouseLeave(1)}><div className="glowp" />
        <p>Stay Updated on Web3 Trends.</p>
      </article>
      <article  onMouseLeave={() => handleMouseLeave(2)}><div className="glowp" />
      <p>Explore Industrial Opportunities with us.</p></article>
      <article><div className="glowp" />
      <p>Become an early mover in Blockchain.</p></article>
      <article  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeo8Gc0Dp0ebWLncS2YRV6KcnZu1_qrFYzBAKMQFsNKi4GJFQ/viewform', '_blank')}>
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
{/* <section id='section' className="gradient"><h2>3</h2></section> */}
</main>
</div></div>
  )
}
