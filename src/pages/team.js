import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import "../scss/team.scss"

const Teams = () => {
  const data = useStaticQuery(graphql`
    query {
      allMembersJson {
        nodes {
          id
          name
          role
          bio
          social {
            twitter
            github
            linkedin
          }
          avatar {
            publicURL
            childImageSharp {
              gatsbyImageData(width: 200, height: 200, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Teams" />
      <div className="main-container">
        <section className="team-section">
          <h2 className="team-title">
            The Minds Behind <b>The Ethiopian</b>
          </h2>
          <p className="team-subtitle">
            Meet the experts driving our tech insights
          </p>

          <div className="team-grid">
            {data.allMembersJson.nodes.map(member => {
              const image = getImage(member.avatar)
              return (
                <div key={member.id} className="team-card">
                  <div className="card-image">
                    <GatsbyImage image={image} alt={member.name} />
                  </div>
                  <div className="card-content">
                    <div className="card-body">
                      <h3>{member.name}</h3>
                      <p className="role">{member.role}</p>
                      <p className="bio">{member.bio}</p>
                    </div>
                    <div className="social-links">
                      {member.social.twitter && (
                        <a href={member.social.twitter} aria-label="Twitter">
                          <FaTwitter />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} aria-label="GitHub">
                          <FaGithub />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} aria-label="LinkedIn">
                          <FaLinkedin />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Teams
