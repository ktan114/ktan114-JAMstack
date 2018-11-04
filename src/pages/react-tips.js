import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import './main.css'

const reactTips = () => (
  <Layout>
    <h1>React tips and tricks</h1>
    <p>list of tips/tricks</p>
    <p> Comment section</p>
    <Link to="/main">
      <button className="homeButton">Home</button>
    </Link>
  </Layout>
)

export default reactTips
