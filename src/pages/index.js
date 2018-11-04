import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'

import Layout from '../components/layout'
import Login from '../components/login'

window.netlifyIdentity = netlifyIdentity
netlifyIdentity.init()

const IndexPage = () => (
  <Layout>
    <h1>Login Page</h1>
    <Login />
    {netlifyIdentity.on('login', () => {
      netlifyIdentity.close()
      window.location.replace('/main/')
    })}
  </Layout>
)

export default IndexPage
