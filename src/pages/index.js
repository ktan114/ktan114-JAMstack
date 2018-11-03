import React from 'react'
import { Link } from 'gatsby'
import netlifyIdentity from 'netlify-identity-widget'

import Layout from '../components/layout'

window.netlifyIdentity = netlifyIdentity
netlifyIdentity.init()

const IndexPage = () => (
  <Layout>
    <h1>Gatsby Page</h1>
    <h3>My name is Kevin</h3>
    <h6>Looking forward to the hackathon</h6>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
