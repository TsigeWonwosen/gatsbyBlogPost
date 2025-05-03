import React from "react"
import "../scss/FollowSuggestions.scss" // Create this file for styling

const FollowSuggestions = () => {
  const suggestions = [
    {
      name: "Austin Starks",
      handle: "Austin Starks",
      description:
        "I am building a no-code, AI-Powered, algorithmic trading platform, https://nexustrade.io/ (Powered by EODHD)",
    },
    {
      name: "Stackademic",
      handle: "Stackademic",
      description:
        "Publication\nStackademic is a learning hub for programmers, devs, coders, and engineers. Our goal is to democratize free coding education for the world.",
    },
    {
      name: "Mahnoor C. 🌱",
      handle: "Mahnoor C. 🌱",
      description:
        "I write for change. 🌱 A Minimal Writer, A Big Dreamer 💌 Writing/ Productivity / Career / Growth",
    },
  ]

  return (
    <div className="follow-suggestions">
      <h2 className="suggestions-title">Who to follow</h2>

      {suggestions.map((user, index) => (
        <div key={index} className="suggestion-card">
          <div className="user-avatar">
            <div className="avatar-initial">{user.name.charAt(0)}</div>
          </div>

          <div className="user-info">
            <div className="user-name">{user.name}</div>
            <div className="user-handle">@{user.handle}</div>
            <div className="user-description">{user.description}</div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
      ))}
    </div>
  )
}

export default FollowSuggestions
