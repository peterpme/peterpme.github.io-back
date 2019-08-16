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

function ExternalLink({ href, target = "_blank", children }) {
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
          I've been an entreprenuer ever since I started my first business
          selling logos and websites on eBay as a 12 year old. As you could
          imagine, phone calls didn't go as planned.
        </p>
        <p className="pb-3">
          I've started several companies and have learned a lot along the way.
          Right now I'm working on a product helping teams build apps visually
          called{" "}
          <ExternalLink href="https://draftbit.com">Draftbit</ExternalLink>, a
          <ExternalLink href="https://ycombinator.com">
            Y-Combinator backed
          </ExternalLink>{" "}
          company.
        </p>
        <p className="pb-3">
          I'm a highly energetic and driven leader, entrepreneur and speaker. I
          pride myself on building companies by finding an edge in software.
        </p>
        <p>
          Some of the software I've been obsessed with recently:
          <ul className="mt-2">
            <li className="mb-1">
              <ExternalLink href="https://reasonml.github.io/">
                ReasonML
              </ExternalLink>
            </li>
            <li className="mb-1">
              <ExternalLink href="https://expo.io">Expo</ExternalLink>
            </li>
            <li className="mb-1">React Native</li>
            <li className="mb-1">React</li>
            <li className="mb-1">GraphQL</li>
          </ul>
        </p>
      </Section>
      <Section title="Community">
        <p>
          I wouldn't be able to get to where I am today if it wasn't for the
          folks that believed in me. I like to pay it forward by donating time &
          energy to building a real tech community in Chicago:
        </p>
        <ul className="mt-2">
          <li className="mb-1">
            <ExternalLink href="https://chicagojscamp.org">
              Chicago JSCamp
            </ExternalLink>
          </li>
          <li className="mb-1">
            <ExternalLink href="https://chicagojs.org">
              ChicagoJS Community
            </ExternalLink>
          </li>
          <li className="mb-1">
            <ExternalLink href="https://reason-conf.us">
              Reason Conf US
            </ExternalLink>
          </li>
          <li className="mb-1">
            <ExternalLink href="http://www.chicagotechslack.com">
              Chicago Tech Slack
            </ExternalLink>
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
          <ExternalLink
            className="border-b-2 border-gray-600 text-white"
            href="https://twitter.com/peterpme"
          >
            Twitter
          </ExternalLink>{" "}
          or by sending me an{" "}
          <ExternalLink
            className="border-b-2 border-gray-600 text-white"
            href="mailto:peter@peterp.me"
          >
            e-mail
          </ExternalLink>
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
