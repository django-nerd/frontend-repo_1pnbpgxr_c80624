function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <h1 className="title">Where Curiosity Becomes Capability</h1>
          <p className="subtitle">A modern K-12 learning environment built around creativity, character, and community. Discover programs that help every student thrive.</p>
          <div className="actions">
            <a className="primary" href="#programs">Explore Programs</a>
            <a className="secondary" href="#admissions">How to Apply</a>
          </div>
        </div>
        <div className="art">
          <div className="shape" />
          <div className="card">
            <div>
              <h3 style={{marginTop:0}}>Student Spotlight</h3>
              <p className="subtitle">“I built a solar-powered rover in the Makers Lab and presented it at the regional expo!”</p>
              <div className="stats">
                <div className="stat"><div className="num">1200+</div><div className="label">Students</div></div>
                <div className="stat"><div className="num">40+</div><div className="label">Clubs</div></div>
                <div className="stat"><div className="num">98%</div><div className="label">Graduation</div></div>
              </div>
            </div>
            <div>
              <div style={{background:'#f1f5f9', height: 220, borderRadius: 16}} />
              <p className="subtitle" style={{marginTop:12}}>A vibrant campus with world-class facilities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
