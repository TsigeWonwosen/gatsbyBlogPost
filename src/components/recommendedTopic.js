import React from "react"

function RecommendedTopic() {
  return (
    <div>
      <h4>Recommended Topics</h4>
      <ul className="recommended-topics">
        {topics.map((topic, index) => (
          <li key={index} className="topic-item">
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
