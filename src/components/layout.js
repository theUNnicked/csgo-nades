/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby"
import Header from "./header";
import Footer from "./footer";
import "./layout.css";


class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children, sideNav } = this.props;
    return (
      <StaticQuery
        query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
        render={data => (
          <div className={'siteContainer'}>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <div className={'pageContent'}>
              <div className={'sidebar'}>
                <Link to="/how-to/">How to</Link><br/>
                <Link to="/maps/">Nades tutorial</Link><br/>
                <Link to="/maps/mirage/#terrorists">Mirage T</Link><br/>
                <Link to="/maps/mirage/#counter-terrorists">Mirage CT</Link><br/>
                {sideNav}
              </div>
              <div className={'mainContent'}>
                <main
                  style={{
                    // margin: `0 auto`,
                    maxWidth: 960,
                    width: '100%',
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                  }}
                >
                  {children}
                </main>
                <Footer/>
              </div>
            </div>
            {/*<SidebarNavigation />*/}
          </div>
        )}
      />
    );
  }
}

export default Layout
