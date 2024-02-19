import React, { useEffect } from 'react';
import './Introloader.css';
import gsap from 'gsap';

export default function Introloader() {
    
    useEffect(() => {
        var fontTL = gsap.timeline(); // Timeline for font loading animation
        fontTL.to(".intro-loader", 0.1, { fontFamily: "Anton", innerHTML:"Learn" })
            .to(".intro-loader", 0.1, { fontFamily: "Jost", innerHTML:"Learn" })
            .to(".intro-loader", 0.1, { fontFamily: "Alkatra", innerHTML:"Learn" })
            .to(".intro-loader", 0.1, { fontFamily: "Nova Oval", innerHTML:"Learn" })
            .to(".intro-loader", 0.1, { fontFamily: "Oswald", innerHTML:"Learn"})
            .to(".intro-loader", 0.1, { fontFamily: "PT Serif", innerHTML:"Learn" })
            .to(".intro-loader", 0.1, { fontFamily: "Lexend", innerHTML:"Learn" })
            .to(".intro-loader", 0.1, { fontFamily: "Poppins", innerHTML:"Learn" })
            .to(".intro-loader", 0.1, { fontFamily: "Titillium Web", innerHTML: "Learn" })
            .to(".intro-loader", 0.1, { fontFamily: "Anton", innerHTML:"Connect" })
            .to(".intro-loader", 0.1, { fontFamily: "Jost", innerHTML:"Connect" })
            .to(".intro-loader", 0.1, { fontFamily: "Alkatra", innerHTML:"Connect" })
            .to(".intro-loader", 0.1, { fontFamily: "Nova Oval", innerHTML:"Connect" })
            .to(".intro-loader", 0.1, { fontFamily: "Oswald", innerHTML:"Connect"})
            .to(".intro-loader", 0.1, { fontFamily: "PT Serif", innerHTML:"Connect" })
            .to(".intro-loader", 0.1, { fontFamily: "Lexend", innerHTML:"Connect" })
            .to(".intro-loader", 0.1, { fontFamily: "Poppins", innerHTML:"Connect" })
            .to(".intro-loader", 0.1, { fontFamily: "Titillium Web", innerHTML: "Connect" })
            .to(".intro-loader", 0.1, { fontFamily: "Anton", innerHTML:"Grow" })
            .to(".intro-loader", 0.1, { fontFamily: "Jost", innerHTML:"Grow" })
            .to(".intro-loader", 0.1, { fontFamily: "Alkatra", innerHTML:"Grow" })
            .to(".intro-loader", 0.1, { fontFamily: "Nova Oval", innerHTML:"Grow" })
            .to(".intro-loader", 0.1, { fontFamily: "Oswald", innerHTML:"Grow"})
            .to(".intro-loader", 0.1, { fontFamily: "PT Serif", innerHTML:"Grow" })
            .to(".intro-loader", 0.1, { fontFamily: "Lexend", innerHTML:"Grow" })
            .to(".intro-loader", 0.1, { fontFamily: "Poppins", innerHTML:"Grow" })
            .to(".intro-loader", 0.1, { fontFamily: "Titillium Web", innerHTML:"Grow" })

        
            .to(".intro", 1, { scaleY: 0, ease: "expo.inOut" })

    }, []);

    return (
        <div>
            <main className="flex__col">
                <section className="intro flex">
                    <h1 className='intro-loader'>Loading<br/></h1>
                </section>
            </main>
        </div>
    );
}
