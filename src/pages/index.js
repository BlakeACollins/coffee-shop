
import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroSection from '../components/Globals/Hero'
import Info from '../components/Home/info'


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <HeroSection img={data.img.childImageSharp.fluid} title="regular joe's coffee shop" styleClass='default-background'/>
    <Info />
  </Layout>
);

export const query = graphql`
{
  img: file(relativePath: { eq:
    "default-background.jpeg"}) {
  childImageSharp {
		fluid {
			...GatsbyImageSharpFluid_tracedSVG
    }
  }
  }
}
`;

export default IndexPage;
