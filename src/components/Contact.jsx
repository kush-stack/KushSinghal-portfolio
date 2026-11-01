import { motion } from 'framer-motion'

const INFO = [
  ['Email',     'kushsinghal82@gmail.com'],
  ['Phone',     '+91 7060002458'],
  ['Location',  'Greater Noida, India'],
  ['Languages', 'English (Fluent) · Hindi (Native)'],
]

export default function Contact() {
  return (
    <section id="contact" className="sec" aria-label="Contact">
      <div className="wrap">
        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <div className="contact-box">CONTACT</div>
            <p className="contact-desc">
              Got a project, a hard problem, or just want to say hi? I read every message —
              open to new work and good problems.
            </p>
            <motion.div
              className="chips"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            >
              {[['Internships','cg'],['Projects','cb'],['Collaborations','cy']].map(([l,c]) => (
                <motion.span
                  key={l}
                  className={`chip ${c}`}
                  variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  {l}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="contact-rows"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {INFO.map(([label, val]) => (
              <motion.div
                key={label}
                variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.4 }}
              >
                <div className="clabel">{label}</div>
                <div className="cval">{val}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
