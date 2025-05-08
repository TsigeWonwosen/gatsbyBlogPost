import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../scss/about.scss"

const About = () => (
  <Layout>
    <Seo title="About" />
    <div className="main-container">
      <header>
        <h1>Where Tech Meets Clarity</h1>
        <div className="underline"></div>
        <p>
          The Ethiopian is a technology blog dedicated to demystifying the
          digital world. We break down complex topics—from AI to
          cybersecurity—into actionable insights for developers, entrepreneurs,
          and curious minds. Our mission is to deliver accurate, jargon-free
          content that empowers readers to stay ahead in tech.
        </p>
      </header>
      <div className="card-container">
        <section className="section-card">
          <h3>What We Cover:</h3>
          <ul>
            <li>AI & Machine Learning </li>
            <li> Web Development</li>
            <li>Cybersecurity </li>
            <li>Emerging Tech </li>
          </ul>
        </section>
        <section className="section-card">
          <h3>Our Values:</h3>
          <ul>
            <li>Clarity over complexity </li>
            <li> Depth over clickbait</li>
            <li>Cybersecurity </li>
            <li>Community-driven insights </li>
          </ul>
        </section>
      </div>
    </div>
  </Layout>
)

export default About
