import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import rehypeReact from "rehype-react"
import Counter from '../components/counter'
import PrimaryTitle from '../components/primaryTitle'


const SideNav = (
  <>
    <Link to="/maps/mirage/#terrorists">Mirage T</Link><br/>
    <Link to="/maps/mirage/#counter-terrorists">Mirage CT</Link>
    <ol>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
      <li>aa</li>
    </ol>
  </>
);

const MapsTemplate = ({ data }) => {
  const { markdownRemark, allMarkdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, htmlAst, headings } = markdownRemark
  console.log(headings);
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      "interactive-counter": Counter,
      h1: PrimaryTitle,
    }
  }).Compiler;
  return (
    <Layout sideNav={SideNav}>
      <SEO title={frontmatter.title} />
      {
        renderAst(htmlAst)
      }
      {/*<div*/}
      {/*  dangerouslySetInnerHTML={{ __html: html }}*/}
      {/*/>*/}
    </Layout>
  )
}

export const pageQuery = graphql`
  query MapTemplateMarkdown($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        path
        title
      }
      headings {
        depth
        value
      }
    }
  }
`

export default MapsTemplate;