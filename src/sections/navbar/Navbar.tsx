function Navbar() {
  return (
    <header className="navbar">
      <div className="bar">
        <div className="brand">
          <span className="brand-mark" />
          <span>Blue Ridge School</span>
        </div>
        <nav className="links">
          <a href="#programs">Programs</a>
          <a href="#admissions">Admissions</a>
          <a href="#campus">Campus</a>
          <a href="#testimonials">Stories</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="cta" href="#apply">Apply Now</a>
      </div>
    </header>
  )
}

export default Navbar
