import React from 'react'
import { Link } from 'gatsby'
import netlifyIdentity from 'netlify-identity-widget'

import Layout from '../components/layout'
import Login from '../components/login'

window.netlifyIdentity = netlifyIdentity
netlifyIdentity.init()

const user = netlifyIdentity.currentUser()

const IndexPage = () => (
  <Layout>
    {user ? <h1>{"Hi "+user.user_metadata.full_name}</h1> : <h1>Gatsby Page</h1> }
    <Login />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
