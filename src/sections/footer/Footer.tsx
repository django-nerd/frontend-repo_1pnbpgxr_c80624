function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="row">
        <span>© {new Date().getFullYear()} Blue Ridge School</span>
        <div style={{display:'flex', gap:12}}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
