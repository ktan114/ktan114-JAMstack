import React from 'react'
import { Link, navigate } from 'gatsby'
import netlifyIdentity from 'netlify-identity-widget'

import Layout from '../components/layout'

const user = netlifyIdentity.currentUser()

const SecondPage = () => (
  <Layout>
    {user ? <h1> Hi {user.user_metadata.full_name}</h1> : navigate('/')}
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
