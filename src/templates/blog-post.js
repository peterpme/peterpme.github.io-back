import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

export default function BlogPostTemplate({ data, pageContext }) {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const publicUrl = `https://peterp.me/${post.fields.slug}`;

  return (
    <Layout>
      <Link to="/blog" rel="home" className="text-2xl">
        ←
      </Link>
      <SEO title={post.frontmatter.title} />
      <h1 className="text-3xl leading-tight text-gray-200 font-headline font-bold mb-3 pb-0">
        {post.frontmatter.published ? "" : ""}
        {post.frontmatter.title}
      </h1>

      <section
        className="markdown"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <span className="block mt-4">Published on {post.frontmatter.date}</span>

      <small>
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href={`https://twitter.com/search?q=${publicUrl}`}>
          Discuss on Twitter
        </a>{" "}
        &middot;{" "}
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href={`https://github.com/peterpme/peterpme.github.io/tree/master/content/blog${post.fields.slug}`}>
          Edit this post on GitHub
        </a>
      </small>
      <nav className="mt-4">
        <ul className="text-white list-none p-0">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                → {next.frontmatter.title}
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 120)
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;

