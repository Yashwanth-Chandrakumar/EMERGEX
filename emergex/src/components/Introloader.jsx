import React, { useEffect } from 'react';
import './Introloader.css';
import gsap from 'gsap';

export default function Introloader() {
    useEffect(() => {
        var fontTL = gsap.timeline(); // Timeline for font loading animation
        fontTL.to(".intro", 0.1, { fontFamily: "Anton" })
            .to(".intro", 0.1, { fontFamily: "Jost" })
            .to(".intro", 0.1, { fontFamily: "Alkatra" })
            .to(".intro", 0.1, { fontFamily: "Nova Oval" })
            .to(".intro", 0.1, { fontFamily: "Oswald" })
            .to(".intro", 0.1, { fontFamily: "PT Serif" })
            .to(".intro", 0.1, { fontFamily: "Lexend" })
            .to(".intro", 0.1, { fontFamily: "Poppins" })
            .to(".intro", 0.1, { fontFamily: "Titillium Web" });

        var loaderTL = gsap.timeline();
        loaderTL.to(".number-loader", {
                duration: 1, 
                innerHTML: "100",
                roundProps: "innerHTML",
                ease: "none",
            })
            .to(".intro", 1, { scaleY: 0, ease: "expo.inOut" })
            .to(".intro__red", 1, { scaleY: 2, ease: "expo.inOut" }, "-=1.25");

    }, []);

    return (
        <div>
            <main className="flex__col">
                <section className="intro flex">
                    <h1>Loading<br/></h1>
                    <h1 className="number-loader">0</h1>
                    <div className="intro__red flex"><div>BUILD | CREATE | DEVELOP</div></div>
                </section>
            </main>
        </div>
    );
}
