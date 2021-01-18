import React from "react"
import SocialLink from "./socialLink"
import { AiOutlineUpCircle } from "react-icons/ai"

import { motion } from "framer-motion"

import AOS from "aos"
import "aos/dist/aos.css"

import "../scss/footer.scss"

import { Link, useStaticQuery, graphql } from "gatsby"

export default function Footer() {
  const fadeLeft = {
    hidden: { opacity: 0, x: 100 },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1000,
        type: "spring",
        stiffness: 250,
        damping: 10,
      },
    },
  }
  React.useEffect(() => {
    AOS.init({
      duration: 800,
    })
    AOS.refresh()
  }, [])

  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        id
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return (
    <footer>
      <div className="footer">
        <div className="footer-up">
          <div
            className="address"
            data-aos="flip-left"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out-cubic"
          >
            <SocialLink />
          </div>
          <div className="footer-left" data-aos={"fade-left"}>
            <Link to="/">Home</Link>
            <Link to="/about/">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-down">
          <span>
            <span>{data.site.siteMetadata.author}</span> ©{" "}
            {new Date().getFullYear()}. Made with Gatsby. All Rights Reserved.
          </span>
        </div>
      </div>
      <div className="hero-upArrow" data-aos={"fade-right"}>
        <a href="#home">
          <AiOutlineUpCircle />
        </a>
      </div>
    </footer>
  )
}
