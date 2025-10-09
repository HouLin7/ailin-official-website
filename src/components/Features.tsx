const features = [
  {
    title: "AI Chat & Companion",
    desc: "Chat naturally with Ailin — your intelligent AI friend who understands your mood and context.",
    icon: "🤖"
  },
  {
    title: "Smart Connections",
    desc: "AI matches you with people who share your vibe, interests, and energy.",
    icon: "💫"
  },
  {
    title: "Voice & Emotion Detection",
    desc: "Ailin can analyze your tone and respond empathetically — it’s emotional AI at its best.",
    icon: "🎙️"
  }
];

export default function Features() {
  return (
    <section className="features">
      <h2>Core Features</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
