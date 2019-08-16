import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import github from "../images/github.svg"
import twitter from "../images/twitter.svg"
import linkedin from "../images/linkedin.svg"
import medium from "../images/medium.svg"
import draftbit from "../images/draftbit.svg"
import instagram from "../images/instagram.svg"

const Talk = ({ year, title, venue, youtubeUrl, url, slideUrl }) => {
  return (
    <li className="mb-4">
      <span className="font-bold text-white block leading-tight">
        {year} • {venue}
      </span>
      {title}
    </li>
  )
}

function getIcon(name) {
  switch (name) {
    case "Instagram":
      return instagram
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

function Ahref({ href, target = "_blank", children }) {
  return (
    <a
      target={target}
      className="border-b-2 border-gray-600 text-white"
      href={href}
    >
      {children}
    </a>
  )
}

function Section({ title, children }) {
  return (
    <section className="pb-2">
      <h2 className="pt-3 pb-3 text-2xl text-gray-200 font-headline font-bold leading-normal">
        {title}
      </h2>
      {children}
    </section>
  )
}

function SocialProfile({ id, name, url }) {
  return (
    <li className="pr-3">
      <a title={name} href={url} target="_blank" rel="nofollow noopener">
        <img className="w-5 h-5" src={getIcon(name)} />
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
          <h1 className="text-3xl leading-tight text-gray-200 font-headline font-bold mb-0 pb-0">
            Peter Piekarczyk
          </h1>
          <p>Co-founder & CTO of Draftbit</p>
          <ul className="flex pt-2">
            {socialProfiles.map(profile => (
              <SocialProfile key={profile.id} {...profile} />
            ))}
          </ul>
        </div>
      </header>
      <br />
      <Section title="Software & Startups">
        <p className="pb-3">
          I always knew I wanted to build things. At the age of 12 I started my
          first business selling templated logos and websites on Ebay. As you
          could imagine, client phone calls didn't go as planned.
        </p>
        <p className="pb-3">
          Several companies and *lots* of learning, experiences and mistakes
          later, I'm working on a new way to build apps.{" "}
        </p>
        <p className="pb-3">
          <Ahref href="https://draftbit.com">Draftbit</Ahref> is a platform
          backed by <Ahref href="https://ycombinator.com">Y-Combinator</Ahref>{" "}
          that gives teams the ability to build fully native experiences without
          having to worry about writing any code, giving anyone the opportunity
          to build anything they imagine.
        </p>
        <p>
          Some of the software and frameworks I've been obsessed with recently:
          <ul className="mt-2">
            <li className="mb-1">
              <Ahref href="https://reasonml.github.io/">ReasonML</Ahref>
            </li>
            <li className="mb-1">
              <Ahref href="https://expo.io">Expo</Ahref>
            </li>
            <li className="mb-1">React Native</li>
            <li className="mb-1">React</li>
            <li className="mb-1">GraphQL</li>
          </ul>
        </p>
      </Section>
      <Section title="Community">
        <p>
          People and relationships are what made me the person I am today,
          building a rich and striving tech community in Chicago is a
          vision/passion of mine. These are some of the awesome communities that
          are making my vision come true
        </p>
        <ul className="mt-2">
          <li className="mb-1">
            <Ahref href="https://chicagojscamp.org">Chicago JSCamp</Ahref>
          </li>
          <li className="mb-1">
            <Ahref href="https://chicagojs.org">ChicagoJS Community</Ahref>
          </li>
          <li className="mb-1">
            <Ahref href="https://reason-conf.us">Reason Conf US</Ahref>
          </li>
          <li className="mb-1">
            <Ahref href="http://www.chicagotechslack.com">
              Chicago Tech Slack
            </Ahref>
          </li>
        </ul>
      </Section>
      <Section title="Speaking & Appearances">
        <ul className="list-horizontal">
          {talks.map(talk => (
            <Talk key={talk.id} {...talk} />
          ))}
        </ul>
      </Section>
      <Section title="Get In Touch">
        <p>
          The best way to contact me is through{" "}
          <Ahref
            className="border-b-2 border-gray-600 text-white"
            href="https://twitter.com/peterpme"
          >
            Twitter
          </Ahref>{" "}
          or by sending me an{" "}
          <Ahref
            className="border-b-2 border-gray-600 text-white"
            href="mailto:peter@peterp.me"
          >
            e-mail
          </Ahref>
          . I look forward to hearing from you.
        </p>
      </Section>
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
