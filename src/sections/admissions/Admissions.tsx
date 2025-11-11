function Admissions() {
  const steps = [
    { n: 1, t: 'Inquiry', d: 'Tell us about your student and interests.' },
    { n: 2, t: 'Visit', d: 'Tour the campus and meet our community.' },
    { n: 3, t: 'Apply', d: 'Submit application and supporting documents.' },
    { n: 4, t: 'Enroll', d: 'Secure your spot and join us!' },
  ]

  return (
    <section id="admissions" className="section admissions">
      <div className="container">
        <h2 className="title">Admissions</h2>
        <div className="steps">
          {steps.map(s => (
            <div className="step" key={s.n}>
              <div className="num">{s.n}</div>
              <h3 style={{margin:'6px 0'}}>{s.t}</h3>
              <p style={{margin:0, opacity:.8}}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Admissions
