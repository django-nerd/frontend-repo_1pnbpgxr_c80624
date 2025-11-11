function Testimonials() {
  const quotes = [
    { q: 'Teachers here saw potential in me that I hadn\'t yet seen in myself.', p: 'Ava — Class of 2024' },
    { q: 'The robotics team helped me find my voice and my path.', p: 'Noah — Class of 2025' },
    { q: 'I made lifelong friends and learned to lead with empathy.', p: 'Maya — Class of 2023' },
  ]

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2 className="title">Student Stories</h2>
        <div className="list">
          {quotes.map((x, i) => (
            <blockquote key={i} className="quote">
              <p style={{margin:0}}>&ldquo;{x.q}&rdquo;</p>
              <div className="person">
                <div className="avatar" />
                <span style={{opacity:.8}}>{x.p}</span>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
