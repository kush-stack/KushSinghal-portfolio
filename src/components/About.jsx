import { motion } from 'framer-motion'

const SKILLS = [
  ['Ethical Hacking', 'co'], ['Android / Kotlin', 'cb'], ['Machine Learning', 'cy'],
  ['IoT Security', 'cg'],   ['Neural Interfaces', 'cr'], ['Firebase', 'co'],
  ['Penetration Testing', 'cb'], ['Python', 'cy'], ['Data Science', 'cg'], ['OpenCV', 'cp'],
]

const fadeUp = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } }
const stagger = { show: { transition: { staggerChildren: 0.07 } } }

export default function About() {
  return (
    <section id="about" className="sec" aria-label="About">
      <div className="wrap">
        <motion.h2
          className="sec-h"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          ABOUT
        </motion.h2>
        <motion.div
          className="about-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.55 }}>
            <div className="polaroid">
              <div className="pimg" aria-hidden="true">👨‍💻</div>
              <p className="pcap">Kush @ work, 2025</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} transition={{ duration: 0.55 }}>
            <div className="about-text">
              <p>
                I'm a <strong>dedicated Cybersecurity and Android Developer</strong> with unique expertise
                in Brain-Computer Interface (BCI) technology and software security. Pursuing B.Tech in
                Computer Science (AI &amp; Data Science) at IIMT College of Engineering.
              </p>
              <p>
                My journey is marked by consistent wins in national hackathons and leadership roles at{' '}
                <strong>Google Developer Groups Campus IIMT</strong> and <strong>SOARX</strong>.
                I care about the edge cases everyone forgets — from AES-256 key management to the moment
                a UI gets out of someone's way.
              </p>
              <p>
                I'm passionate about creating secure, innovative solutions that make technology genuinely
                useful — whether it's a brain-controlled vehicle or a gemstone AI.
              </p>
            </div>
            <motion.div
              className="chips"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {SKILLS.map(([label, color]) => (
                <motion.span
                  key={label}
                  className={`chip ${color}`}
                  variants={fadeUp}
                  transition={{ duration: 0.35 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  {label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
