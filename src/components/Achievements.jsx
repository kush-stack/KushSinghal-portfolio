import { motion } from 'framer-motion'

const ITEMS = [
  { ico: '🥇', t: '1st Prize',        d: 'IIMT College Hackathon 2025',       bar: 'var(--yellow)' },
  { ico: '🥉', t: '3rd Prize',        d: 'Amity Hackathon — Cyber Cup 2023',  bar: 'var(--green)'  },
  { ico: '🏆', t: 'Best Theme Award', d: 'ITS College Hackathon 2024',         bar: 'var(--blue)'   },
  { ico: '🏆', t: 'Best Theme Award', d: 'Sharda Ideathon 2024',               bar: 'var(--red)'    },
  { ico: '🥈', t: '2nd Prize',        d: 'Hackathon — Indore',                 bar: 'var(--blue)'   },
  { ico: '🏅', t: 'Runner Up',        d: 'IIIT Delhi Hackathon',               bar: 'var(--green)'  },
]

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show:   { opacity: 1, y: 0,  scale: 1 },
}

export default function Achievements() {
  return (
    <section id="achievements" className="sec" aria-label="Achievements">
      <div className="wrap">
        <motion.h2
          className="sec-h"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          ACHIEVEMENTS
        </motion.h2>
        <motion.div
          className="ach-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
        >
          {ITEMS.map((a, i) => (
            <motion.div
              key={i}
              className="ach"
              variants={card}
              transition={{ duration: 0.45, type: 'spring', stiffness: 180 }}
              whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="ach-bar" style={{ background: a.bar }} />
              <div className="ach-ico">{a.ico}</div>
              <div className="ach-t">{a.t}</div>
              <div className="ach-d">{a.d}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
