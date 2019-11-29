/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className="bg fixed right-0 top-0 bottom-0 w-3/5 h-screen bg-cover bg-no-repeat" />
      <main className="z-10 p-fixed bg-purple-900 min-h-screen text-gray-500 leading-relaxed max-w-2xl px-6 sm:pr-20 sm:pl-20 py-6">
        {children}
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

