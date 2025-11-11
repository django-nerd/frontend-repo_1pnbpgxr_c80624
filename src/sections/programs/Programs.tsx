function Programs() {
  const programs = [
    { title: 'Early Learning', desc: 'Play-based discovery for ages 4–6', tag: 'Pre-K' },
    { title: 'Elementary', desc: 'Foundations in literacy, numeracy, and curiosity', tag: 'K–5' },
    { title: 'Middle School', desc: 'Critical thinking, collaboration, and exploration', tag: '6–8' },
    { title: 'High School', desc: 'Advanced courses, internships, and college prep', tag: '9–12' },
    { title: 'Athletics', desc: 'Teamwork, resilience, and healthy competition', tag: 'Sports' },
    { title: 'Performing Arts', desc: 'Music, dance, and theatre productions', tag: 'Arts' },
  ]

  return (
    <section id="programs" className="section programs">
      <div className="container">
        <h2 className="title">Programs</h2>
        <div className="cards">
          {programs.map((p) => (
            <article key={p.title} className="card">
              <div className="cover" />
              <div className="body">
                <span className="badge">{p.tag}</span>
                <h3 style={{margin: '6px 0'}}>{p.title}</h3>
                <p style={{margin:0, opacity:.8}}>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
