import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { PROJECTS, STATUS_STYLE, STATUS_LABEL } from '../data/index'
import { DRAW_FNS } from '../utils/canvas'

const fadeUp = { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0 } }

function ProjCard({ p, i }) {
  const canvasRef = useRef(null)

  return (
    <motion.div
      className="proj-card"
      variants={fadeUp}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onViewportEnter={() => {
        if (canvasRef.current) DRAW_FNS[p.vis]?.(canvasRef.current)
      }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="pdate">{p.date}</div>
      <h3 className="pname">{p.name}</h3>
      <p className="pdesc">{p.desc}</p>
      <div className="ptags">
        {p.tags.map(t => <span key={t} className="ptag">{t}</span>)}
      </div>
      <span className={`pstatus ${STATUS_STYLE[p.status]}`}>{STATUS_LABEL[p.status]}</span>
      <div className="pvis">
        <canvas
          ref={canvasRef}
          width={400}
          height={140}
          style={{ width: '100%', display: 'block' }}
          aria-hidden="true"
        />
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="proj-band" aria-label="Featured Projects">
      <div className="wrap">
        <motion.h2
          className="sec-h"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          FEATURED PROJECTS
        </motion.h2>
        <motion.div
          className="proj-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
        >
          {PROJECTS.map((p, i) => (
            <ProjCard key={p.id} p={p} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
