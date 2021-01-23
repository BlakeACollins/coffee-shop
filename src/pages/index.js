
import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { FaGulp } from 'react-icons/fa'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>The Coffee Shop made with React, Gatsby, Contenful, Snipcart, and Formspree</p>
    <FaGulp />
    </div>
  </Layout>
)

export default IndexPage;
