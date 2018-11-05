import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'

import Layout from '../components/layout'
import Login from '../components/login'

if (typeof window !== 'undefined') {
  window.netlifyIdentity = netlifyIdentity
  netlifyIdentity.init()
}

const IndexPage = () => (
  <Layout>
    <h1>Login Page</h1>
    <Login />
    {netlifyIdentity.on('login', () => {
      netlifyIdentity.close()
      if (typeof window !== 'undefined') window.location.replace('/page-2/')
    })}
  </Layout>
)

export default IndexPage
