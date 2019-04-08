/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const mapTemplate = path.resolve(`src/templates/mapTemplate.js`);
  return graphql(`{
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach((edge) => {
      createPage({
        path: edge.node.frontmatter.path,
        component: mapTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
