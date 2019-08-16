import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import github from "../images/github.svg"
import twitter from "../images/twitter.svg"
import linkedin from "../images/linkedin.svg"
import medium from "../images/medium.svg"
import draftbit from "../images/draftbit.svg"

const Talk = ({ year, title, venue, youtubeUrl, url, slideUrl }) => {
  return (
    <li>
      {year} {venue} - {title}
    </li>
  )
}

function getIcon(name) {
  switch (name) {
    case "Github":
      return github
    case "Medium":
      return medium
    case "Twitter":
      return twitter
    case "LinkedIn":
      return linkedin
    default:
      return draftbit
  }
}

function SocialProfile({ id, name, url }) {
  return (
    <li className="pr-3">
      <a href={url} target="_blank" rel="nofollow noopener">
        <img className="w-6 h-6" src={getIcon(name)} />
      </a>
    </li>
  )
}

const IndexPage = ({ data }) => {
  const talks = data.talks && data.talks.nodes
  const socialProfiles = data.socialProfiles && data.socialProfiles.nodes
  return (
    <Layout>
      <SEO title="Peter Piekarczyk" />
      <header class="mx-auto flex p-4">
        <div class="flex-shrink-0">
          <Image />
        </div>
        <div class="ml-6 flex flex-col items-start justify-center">
          <h1 className="text-3xl text-gray-200 font-headline font-normal mb-0 pb-0">
            Peter Piekarczyk
          </h1>
          <p>Co-founder, Draftbit</p>
        </div>
      </header>
      <ul className="flex">
        {socialProfiles.map(profile => (
          <SocialProfile key={profile.id} {...profile} />
        ))}
      </ul>
      <br />
      <h1 className="pb-3 text-2xl text-gray-200 font-headline font-normal">
        Software & Startups
      </h1>
      <p className="pb-3">
        Hey there, I'm one of the founders of the YC-backed{" "}
        <a
          target="_blank"
          className="border-b-2 border-gray-600 text-white"
          href="https://draftbit.com"
        >
          Draftbit
        </a>
        . Draftbit helps teams build complex mobile apps visually.
      </p>
      <p className="pb-3">
        I'm a highly energetic and driven leader, entrepreneur and speaker. I
        love building companies using cutting edge technologies and taking them
        mainstream in the process.
      </p>
      <p className="pb-3">
        Some of the software I've been obsessed with recently:
        <ul>
          <li>ReasonML</li>
          <li>Expo</li>
          <li>React Native</li>
          <li>React</li>
          <li>GraphQL</li>
        </ul>
      </p>
      <h1 className="pb-3 text-2xl text-gray-200 font-headline font-normal">
        Speaking
      </h1>
      <ul className="list-horizontal">
        {talks.map(talk => (
          <Talk key={talk.id} {...talk} />
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
  query Home {
    socialProfiles: allSocialProfilesJson {
      nodes {
        id
        name
        url
      }
    }
    talks: allTalksJson {
      nodes {
        slideUrl
        title
        venue
        visible
        year
        youtubeUrl
      }
    }
  }
`
