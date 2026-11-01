import { motion } from 'framer-motion'

export default function Nav() {
  return (
    <motion.nav
      className="nav"
      aria-label="Site navigation"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="nav-in">
        <a className="nav-logo" href="#hero">KUSH</a>
        <div className="nav-links">
          {['About', 'Projects', 'Achievements', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
          ))}
        </div>
        <div className="nav-r">
          <div className="dots">
            <div className="dot dr" />
            <div className="dot dy" />
            <div className="dot dg" />
          </div>
          <a href="#contact" className="nav-cta">Contact Me</a>
        </div>
      </div>
    </motion.nav>
  )
}
