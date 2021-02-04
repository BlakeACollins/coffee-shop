
import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroSection from '../components/Globals/Hero'
import Info from '../components/Home/info'



const About = ({ data }) => (
  <Layout>
    <SEO title="About Us" keywords={['gatsby', 'application', 'react']} />
    <HeroSection img={data.img.childImageSharp.fluid} title="about us" styleClass='about-us-background'/>
    <Info />
  </Layout>
);

export const query = graphql`
{
  img: file(relativePath: { eq:"about-background.jpeg"}) {
  childImageSharp {
		fluid {
			...GatsbyImageSharpFluid_tracedSVG
    }
  }
  }
}
`;

export default About;
