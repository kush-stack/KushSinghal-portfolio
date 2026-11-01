import { motion } from 'framer-motion'

const EDU = [
  { deg: 'B.Tech CS — AI & Data Science', sch: 'IIMT College of Engineering', yr: '' },
  { deg: 'CBSE — Class XII',              sch: 'Lilawati Convent School',       yr: '2022' },
  { deg: 'ICSE — Class X',               sch: 'Mount Fort Academy',             yr: '2020' },
]

const CERTS = [
  ['Cybersecurity Fundamentals — Google', 'co'],
  ['Ethical Hacking & Penetration Testing — Udemy', 'cb'],
  ['IoT Security Specialization — Cybrary', 'cg'],
  ['Data Science & ML — Coursera', 'cy'],
]

const card = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
}

export default function Education() {
  return (
    <section id="education" className="sec" aria-label="Education">
      <div className="wrap">
        <motion.h2
          className="sec-h"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          EDUCATION
        </motion.h2>
        <motion.div
          className="edu-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {EDU.map((e, i) => (
            <motion.div
              key={i}
              className="edu-card"
              variants={card}
              transition={{ duration: 0.45, type: 'spring', stiffness: 160 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="edu-deg">{e.deg}</div>
              <div className="edu-sch">{e.sch}</div>
              {e.yr && <div className="edu-yr">{e.yr}</div>}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          style={{ marginTop: '2.5rem' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 style={{ fontFamily: 'var(--ff-d)', fontSize: '1.8rem', letterSpacing: '.05em', marginBottom: '1rem' }}>
            CERTIFICATIONS
          </h3>
          <motion.div
            className="chips"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            {CERTS.map(([label, color]) => (
              <motion.span
                key={label}
                className={`chip ${color}`}
                variants={{ hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
