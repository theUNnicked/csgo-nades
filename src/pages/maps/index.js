import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

class Maps extends Component{
  render() {
    return (
      <Layout>
        <SEO title="Map list"/>
        <h1>Map lists</h1>
        <Link to="/maps/mirage/">Mirage</Link><br />
        <Link to="/maps/inferno/">Inferno</Link>
      </Layout>
    );
  }
}

export default Maps
