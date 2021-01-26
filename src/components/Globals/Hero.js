import React from 'react'
import HeroImage from 'gatsby-background-image'

export default function Hero({
    img,styleClass, title, childern
}) {
    return (
        <HeroImage className={styleClass} fluid={img}>
            <h1 className='title text-white text-uppercase text-center display-4 font-weight-bold'>
                {title}
            </h1>
            {childern}
        </HeroImage>
    );
}


 