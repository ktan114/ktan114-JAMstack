import React from 'react'
import { Link } from 'gatsby'
import netlifyIdentity from 'netlify-identity-widget'

import Layout from '../components/layout'
import Login from '../components/login'

window.netlifyIdentity = netlifyIdentity
netlifyIdentity.init()

const IndexPage = () => (
  <Layout>
    <h1>Gatsby Page</h1>
    <Login />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
