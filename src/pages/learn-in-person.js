import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const LearnInPerson = () => (
  <Layout>
    <SEO title="Learn In Person" />
    <h1>Choose a location we have information on</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LearnInPerson
