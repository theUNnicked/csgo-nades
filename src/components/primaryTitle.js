import React, { Component } from "react";


export default class PrimaryTitle extends Component {
  constructor(props) {
    super(props);
    const rawHeader = this.props.children.toString();
    const slugs = require('github-slugger')();
    this.id = slugs.slug(rawHeader, false);
  }

  render() {
    const { children } = this.props;

    return (
        <h1 id={this.id}>{children}</h1>
    )
  }
}