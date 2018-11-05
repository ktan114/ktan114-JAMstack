import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'

import Layout from '../components/layout'
import Tips from '../components/tips'
if (typeof window !== 'undefined') {
  import { Link, navigate } from 'gatsby'
}

const user = netlifyIdentity.currentUser()

const SecondPage = () => (
  <Layout>
    {user && typeof window !== 'undefined' ? (
      <h1> Hi {user.user_metadata.full_name}</h1>
    ) : (
      navigate('/')
    )}
    <Tips />
    <Link
      onClick={() => {
        netlifyIdentity.logout()
      }}
      to="/"
    >
      <button>Logout</button>
    </Link>
  </Layout>
)

export default SecondPage
