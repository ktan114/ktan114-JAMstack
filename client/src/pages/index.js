import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'
import { navigate } from 'gatsby'

import Layout from '../components/layout'
import Login from '../components/login'

window.netlifyIdentity = netlifyIdentity
netlifyIdentity.init()

const user = netlifyIdentity.currentUser()

const IndexPage = () => (
  <Layout>
    {user ? navigate('/page-2') : null}
    <h1>Login Page</h1>
    <Login />
    {netlifyIdentity.on('login', () => {
      netlifyIdentity.close()
      window.location.replace('/page-2/')
    })}
  </Layout>
)

export default IndexPage
