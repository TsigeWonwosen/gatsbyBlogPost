import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import SocialLink from "../socialLink"
import { data } from "./data.js"

import { motion } from "framer-motion"
import { animationThree } from "../animations"

import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineDownCircle,
} from "react-icons/ai"
import { IoIosArrowRoundForward } from "react-icons/io"
import "./hero.scss"

function Hero() {
  const [imageIndex, setValue] = useState(0)

  // function f1() {
  //   if (imageIndex < data.length - 1) {
  //     setValue(imageIndex + 1)
  //   } else {
  //     setValue(0)
  //   }
  // }
  useEffect(() => {
    // const interval = setTimeout(f1, 3000)
    // return () => {
    //   if (interval) {
    //     clearTimeout(interval)
    //   }
    // }
  }, [imageIndex])

  const handleClick = num => setValue(num)

  const { title, name, url, subtitle, description } = data[imageIndex]
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },

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
  const downArrowController = {
    hidden: { y: -6 },

    visible: {
      y: 0,
      transition: {
        duration: 2,
        yoyo: Infinity,
      },
    },
  }
  return (
    <div className="hero">
      <img src={url} alt={name} className="hero-image" />
      <section className="hero-header">
        <h3> {subtitle}</h3>
        <motion.h1
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          drag={"x"}
          dragConstraints={{ left: -100, right: 0 }}
        >
          {title}
        </motion.h1>
        <p>{description}</p>
        <SocialLink />
        <Link to="/contact">
          <button className="contact-btn">
            Contact Me
            <IoIosArrowRoundForward className="btn-arrow" />
          </button>
        </Link>
      </section>
      <div className="hero-btn-container">
        <div
          role="button"
          aria-label="Next Image"
          tabIndex={0}
          className={`hero-btn ${imageIndex === 0 && "active"}`}
          onClick={() => handleClick(0)}
          onKeyDown={() => handleClick(0)}
        ></div>
        <div
          role="button"
          aria-label="Next Image"
          tabIndex={-1}
          className={`hero-btn ${imageIndex === 1 && "active"}`}
          onClick={() => handleClick(1)}
          onKeyDown={() => handleClick(1)}
        ></div>
        <div
          role="button"
          aria-label="Next Image"
          tabIndex={-2}
          className={`hero-btn ${imageIndex === 2 && "active"}`}
          onClick={() => handleClick(2)}
          onKeyDown={() => handleClick(2)}
        ></div>
      </div>

      <div
        role="button"
        aria-label="Next Image"
        tabIndex={-5}
        className="hero-rightArrow"
        onClick={() =>
          imageIndex < 2 ? setValue(imageIndex + 1) : setValue(0)
        }
      >
        <AiOutlineArrowRight />{" "}
      </div>
      <div
        role="button"
        aria-label="Next Image"
        tabIndex={-4}
        className="hero-leftArrow"
        onClick={() =>
          imageIndex > 0 ? setValue(imageIndex - 1) : setValue(2)
        }
      >
        <AiOutlineArrowLeft />
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={downArrowController}
        className="hero-downArrow"
      >
        <a href="#home">
          <AiOutlineDownCircle />
        </a>
      </motion.div>
    </div>
  )
}

export default Hero
