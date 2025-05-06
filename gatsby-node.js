const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages/posts` })
    console.log(slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/page.js`)

  const result = await graphql(`
    query GetPost {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/posts${node.fields.slug}`,
      component: blogTemplate,
      context: {
        // additional data can be passed via context
        slug: node.fields.slug,
      },
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type TeamMembersJson implements Node {
      id: String!
      name: String!
      role: String!
      bio: String!
      social: Social!
      avatar: File!
    }
    type Social {
      twitter: String
      github: String
      linkedin: String
    }
    type Image {
      publicURL: String
      childImageSharp: ImageSharp
    }
  `
  createTypes(typeDefs)
}
