import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
// import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import BlogRoll from "../components/BlogRoll/BlogRoll";
import GlobalStyle from "../components/globa-styles";

export const IndexPageTemplate = ({ image, title, subheading }) => (
  <div>
    <Hero />
    <div className="column is-12">
      <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>
      <BlogRoll />
      <div className="column is-12 has-text-centered">
        <Link className="btn" to="/blog">
          Read more
        </Link>
      </div>
    </div>
    <GlobalStyle />
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        description
        intro {
          blurbs {
            text
          }
          heading
          description
        }
      }
    }
  }
`;
