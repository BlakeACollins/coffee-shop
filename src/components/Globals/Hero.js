import React from 'react'
import HeroImage from 'gatsby-background-image'
import Typed from 'react-typed'

export default function Hero({
    img,styleClass, title, childern
}) {
    return (
        <>
        <HeroImage className={styleClass} fluid={img}>
            <h1 className='title text-white text-uppercase text-center display-4 font-weight-bold'>
                {title}
            </h1>
            
            {childern}
            <br />
            {/*<Typed className='text-center typed-text'
        strings={[
            "Prototyping","Web Design", "Web Development", "Mobile Web Development", "Mobile Application Development", "SEO Improvements", "Debugging"
        ]}
        typeSpeed={40}
        backSpeed={60}
    loop ></Typed>*/}
        </HeroImage>
        </>
    );
}


 