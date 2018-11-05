import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Tips from '../components/tips'

const user = netlifyIdentity.currentUser()
if (user === 'undefined' && typeof window !== 'undefined')
  window.location.replace('/')

const SecondPage = () => (
  <Layout>
    {user ? <h1> Hi {user.user_metadata.full_name}</h1> : null}
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
