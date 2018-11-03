import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'

const Login = () => {
  return (
    <div>
      <button onClick={() => {netlifyIdentity.open()}}>Log in with Netlify</button>
    </div>
  )
}

export default Login
