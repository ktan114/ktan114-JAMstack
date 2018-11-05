import React from 'react'
import { Link, navigate } from 'gatsby'
import netlifyIdentity from 'netlify-identity-widget'

import Layout from '../components/layout'
import Tips from '../components/tips'

const user = netlifyIdentity.currentUser()

const SecondPage = () => (
  <Layout>
    {user && window ? <h1> Hi {user.user_metadata.full_name}</h1> : navigate('/')}
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
