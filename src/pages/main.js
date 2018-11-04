import React from 'react'
import { Link, navigate } from 'gatsby'
import netlifyIdentity from 'netlify-identity-widget'

import Layout from '../components/layout'
import './main.css'

const user = netlifyIdentity.currentUser()

const Main = () => (
  <Layout>
    {user ? <h1> Hi {user.user_metadata.full_name}</h1> : navigate('/main/')}
    <Link
      onClick={() => {
        netlifyIdentity.logout()
      }}
      to="/"
    >
      <button>Logout</button>
    </Link>
    <p />
    <h3>Tips & tricks for new (and old!) developers and programmers.</h3>
    <h6>filler text....</h6>
    <div className="Buttons">
      <Link to="/git-tips/">
        <button className="linkButton">GitHub Tips</button>
      </Link>
      <Link to="html-tips">
        <button className="linkButton">HTML Tips</button>
      </Link>
      <Link to="css-tips">
        <button className="linkButton">CSS Tips</button>
      </Link>
      <Link to="react-tips">
        <button className="linkButton">React Tips</button>
      </Link>
      <Link to="other-tips">
        <button className="linkButton">All Purpose Tips</button>
      </Link>
    </div>
  </Layout>
)

export default Main
