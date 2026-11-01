import { motion } from 'framer-motion'

const STICKERS = [
  { label: '🔒 Cybersecurity',    color: 'cy', style: { top: '13%',    left: '3%',   transform: 'rotate(-7deg)' } },
  { label: '📱 Android Dev',      color: 'cb', style: { top: '17%',    right: '3%',  transform: 'rotate(5deg)'  } },
  { label: 'GDG Campus Lead',     color: 'co', style: { top: '48%',    left: '2%',   transform: 'rotate(3deg)'  } },
  { label: '🏆 Hackathon Winner', color: 'cg', style: { bottom: '22%', left: '3%',   transform: 'rotate(4deg)'  } },
  { label: '🧠 BCI Research',     color: 'cr', style: { bottom: '28%', right: '2%',  transform: 'rotate(-5deg)' } },
  { label: 'AI & Data Science',   color: 'cy', style: { top: '7%',     left: '30%',  transform: 'rotate(2deg)'  } },
  { label: '💎 Gem AI',           color: 'cp', style: { top: '41%',    right: '2%',  transform: 'rotate(-3deg)' } },
  { label: 'Open to Work ✨',     color: 'cg', style: { bottom: '14%', right: '4%',  transform: 'rotate(3deg)'  } },
]

export default function Hero() {
  const name1 = 'KUSH', name2 = 'SINGHAL'

  return (
    <section id="hero" className="hero" aria-label="Introduction" style={{ overflow: 'hidden' }}>
      {STICKERS.map((s, i) => (
        <motion.div
          key={i}
          className="hstick"
          style={{ ...s.style, zIndex: 1 }}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.08, type: 'spring', stiffness: 200 }}
        >
          <span className={`chip ${s.color}`}>{s.label}</span>
        </motion.div>
      ))}

      <div className="wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <h1 className="hero-name" aria-label="Kush Singhal">
          <span aria-hidden="true">
            {name1.split('').map((c, i) => (
              <span key={i} className="hc" style={{ animationDelay: `${i * 0.07}s` }}>{c}</span>
            ))}
          </span>
          <span className="out" aria-hidden="true">
            {name2.split('').map((c, i) => (
              <span key={i} className="hc" style={{ animationDelay: `${(name1.length + i) * 0.07 + 0.1}s` }}>{c}</span>
            ))}
          </span>
        </h1>
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Cybersecurity &amp; Android Developer · BCI Technology · National Hackathon Winner
        </motion.p>
        <motion.a
          href="#projects"
          className="hero-btn"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
        >
          View My Work
        </motion.a>
      </div>
    </section>
  )
}
