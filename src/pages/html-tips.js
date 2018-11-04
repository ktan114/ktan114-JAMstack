import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import './main.css'

const htmlTips = () => (
  <Layout>
    <h1>HTML tips and tricks</h1>
    <p>list of tips/tricks</p>
    <p> Comment section</p>
    <Link to="/main">
      <button className="homeButton">Home</button>
    </Link>
  </Layout>
)

export default htmlTips


