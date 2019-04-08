import React, { Component } from "react"

class Footer extends Component {
  render() {
    return(
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    );
  }
}

export default Footer;