import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Golf Metz Institute</h1>
        <p className="tagline">Excellence in Golf Training and Education</p>
      </header>
      
      <main>
        <section className="hero">
          <h2>Welcome to Golf Metz Institute</h2>
          <p>Our new website is currently under development.</p>
          <div className="coming-soon">Coming Soon</div>
        </section>
        
      </main>
      
      <footer>
        <p>&copy; {new Date().getFullYear()} Golf Metz Institute. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
