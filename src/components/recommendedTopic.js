import React from "react"
import * as styles from "../scss/blogPost.module.scss"

function RecommendedTopic() {
  return (
    <div>
      <h4>Recommended Topics</h4>
      <ul className={styles.recommendedTopics}>
        {topics.map((topic, index) => (
          <li key={index} className={styles.topicItem}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecommendedTopic

const topics = [
  "Web Development",
  "Mobile Development",
  "Data Science",
  "writing",
  "programming",
  "Machine Learning",
  "Cloud Computing",
  "Cybersecurity",
  "DevOps Practices",
  "Agile Methodologies",
  "UI/UX Design",
]
