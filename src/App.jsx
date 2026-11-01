import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Leadership from './components/Leadership'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

export default function App() {
  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Leadership />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
