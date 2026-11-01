import { motion } from 'framer-motion'

const ROLES = [
  {
    role: 'Android Lead',
    org: 'Google Developer Groups Campus IIMT',
    period: 'Nov 2024 — 2025',
    pts: [
      'Led Android workshops on Kotlin, Firebase, and UI/UX optimization',
      'Developed secure applications with data encryption and threat mitigation',
      'Collaborated on open-source mobile security projects',
    ],
  },
  {
    role: 'Technical Lead',
    org: 'SOARX',
    period: 'Oct 2024 — 2025',
    pts: [
      'Spearheaded cybersecurity & IoT projects with real-time threat monitoring',
      'Engineered Android apps with AES encryption and biometric authentication',
      'Mentored junior developers in secure coding practices',
    ],
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="sec" aria-label="Leadership Experience">
      <div className="wrap">
        <motion.h2
          className="sec-h"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          LEADERSHIP
        </motion.h2>
        <motion.div
          className="exp-list"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          {ROLES.map((r, i) => (
            <motion.div
              key={i}
              className="exp-item"
              variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 140 }}
            >
              <div>
                <div className="exp-role">{r.role}</div>
                <div className="exp-org">{r.org}</div>
                <ul className="exp-pts">
                  {r.pts.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
              <div className="exp-period">{r.period}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
