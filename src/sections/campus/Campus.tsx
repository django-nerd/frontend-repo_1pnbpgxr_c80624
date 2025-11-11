function Campus() {
  return (
    <section id="campus" className="section campus">
      <div className="container">
        <h2 className="title">Campus Life</h2>
        <div className="gallery">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="img" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Campus
