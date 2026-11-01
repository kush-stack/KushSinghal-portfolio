export function drawGPS(canvas) {
  if (!canvas) return
  const ctx = canvas.getContext('2d'), W = canvas.width, H = canvas.height
  ctx.fillStyle = '#0d0d0b'; ctx.fillRect(0, 0, W, H)
  ctx.strokeStyle = 'rgba(255,255,255,.04)'; ctx.lineWidth = .5
  for (let x = 0; x < W; x += 28) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke() }
  for (let y = 0; y < H; y += 28) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke() }
  const pts = [[40,120],[85,80],[135,100],[195,50],[255,70],[320,35],[375,58],[440,25]]
  ctx.shadowColor = '#2CB56A'; ctx.shadowBlur = 8
  ctx.strokeStyle = '#2CB56A'; ctx.lineWidth = 2; ctx.beginPath()
  ctx.moveTo(pts[0][0], pts[0][1]); pts.forEach(([x, y]) => ctx.lineTo(x, y)); ctx.stroke()
  ctx.shadowBlur = 0
  pts.forEach(([x, y], i) => {
    ctx.beginPath(); ctx.arc(x, y, i === pts.length - 1 ? 6 : 3, 0, Math.PI * 2)
    ctx.fillStyle = i === pts.length - 1 ? '#E03030' : 'rgba(44,181,106,.5)'; ctx.fill()
  })
  ctx.fillStyle = '#444'; ctx.font = '9px monospace'; ctx.fillText('GPS TRACK', 10, H - 12)
  ctx.fillStyle = '#2CB56A'; ctx.fillText('● LIVE', W - 52, H - 12)
}

export function drawEEG(canvas) {
  if (!canvas) return
  const ctx = canvas.getContext('2d'), W = canvas.width, H = canvas.height
  ctx.fillStyle = '#0d0d0b'; ctx.fillRect(0, 0, W, H)
  ;[['Alpha', '#2B5BE0', .09, 14, 32], ['Beta', '#F5D03A', .18, 8, 76], ['Theta', '#E03030', .05, 18, 120]].forEach(([n, c, f, a, yb]) => {
    ctx.strokeStyle = c; ctx.lineWidth = 1.5; ctx.beginPath()
    for (let x = 20; x < W - 20; x += 2) {
      const y = yb + Math.sin(x * f) * a * (0.6 + 0.4 * Math.sin(x * .015))
      x === 20 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.stroke(); ctx.fillStyle = c; ctx.font = '9px monospace'; ctx.fillText(n, 22, yb - 5)
  })
  ctx.fillStyle = '#444'; ctx.font = '9px monospace'; ctx.fillText('EEG NEURAL SIGNAL', 10, H - 12)
  ctx.fillStyle = '#2B5BE0'; ctx.fillText('ADS1299', W - 62, H - 12)
}

export function drawTask(canvas) {
  if (!canvas) return
  const ctx = canvas.getContext('2d'), W = canvas.width, H = canvas.height
  ctx.fillStyle = '#0d0d0b'; ctx.fillRect(0, 0, W, H)
  const items = [
    { x: 20, y: 20, done: true,  label: 'Setup project structure' },
    { x: 20, y: 50, done: true,  label: 'Build UI components' },
    { x: 20, y: 80, done: true,  label: 'Add task CRUD' },
    { x: 20, y: 110, done: false, label: 'Push notifications' },
  ]
  items.forEach(({ x, y, done, label }) => {
    ctx.strokeStyle = done ? '#2CB56A' : '#333'; ctx.lineWidth = 1.5
    ctx.beginPath(); ctx.arc(x + 6, y + 6, 6, 0, Math.PI * 2); ctx.stroke()
    if (done) { ctx.fillStyle = '#2CB56A'; ctx.fill(); ctx.fillStyle = '#0d0d0b'; ctx.font = 'bold 9px sans-serif'; ctx.fillText('✓', x + 2.5, y + 10) }
    ctx.fillStyle = done ? '#444' : '#666'; ctx.font = '11px monospace'; ctx.fillText(label, x + 20, y + 10)
    if (done) { ctx.fillStyle = 'rgba(68,68,68,.4)'; ctx.fillRect(x + 20, y + 7, ctx.measureText(label).width, 1) }
  })
  ctx.fillStyle = '#F5D03A'; ctx.font = '9px monospace'; ctx.fillText('QHT TASKS', 10, H - 12)
  ctx.fillStyle = '#444'; ctx.fillText('TRIAL MODE', W - 78, H - 12)
}

export function drawCCTV(canvas) {
  if (!canvas) return
  const ctx = canvas.getContext('2d'), W = canvas.width, H = canvas.height
  ctx.fillStyle = '#0d0d0b'; ctx.fillRect(0, 0, W, H)
  for (let y = 0; y < H; y += 3) { ctx.fillStyle = 'rgba(255,255,255,.02)'; ctx.fillRect(0, y, W, 1) }
  ctx.strokeStyle = 'rgba(224,48,48,.7)'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 3])
  ctx.strokeRect(80, 25, 160, 80); ctx.setLineDash([])
  ctx.fillStyle = '#E03030'; ctx.font = '9px monospace'; ctx.fillText('MOTION DETECTED', 82, 20)
  ctx.strokeStyle = 'rgba(43,91,224,.8)'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 3])
  ctx.strokeRect(280, 30, 90, 70); ctx.setLineDash([])
  ctx.fillStyle = '#6b9fff'; ctx.font = '9px monospace'; ctx.fillText('FACE ID', 280, 26)
  ctx.fillStyle = '#333'; ctx.font = '9px monospace'; ctx.fillText('CAM_01  REC  2025-11-01 14:32:07', 10, H - 12)
}

export function drawGraft(canvas) {
  if (!canvas) return
  const ctx = canvas.getContext('2d'), W = canvas.width, H = canvas.height
  ctx.fillStyle = '#0d0d0b'; ctx.fillRect(0, 0, W, H)
  const vals = [42, 58, 51, 67, 72, 61, 78, 83, 76, 88]
  const bw = 34, gap = 8, ox = 20
  vals.forEach((v, i) => {
    const bh = (H - 50) * (v / 100), x = ox + i * (bw + gap), y = H - 30 - bh
    ctx.fillStyle = v > 70 ? 'rgba(44,181,106,.6)' : 'rgba(245,208,58,.5)'; ctx.fillRect(x, y, bw, bh)
    ctx.fillStyle = v > 70 ? '#2CB56A' : '#c9a800'; ctx.font = '8px monospace'
    ctx.fillText(v + '%', x + 6, y - 4)
  })
  ctx.strokeStyle = 'rgba(44,181,106,.3)'; ctx.lineWidth = 1; ctx.beginPath()
  ctx.moveTo(0, H - 30 - (H - 50) * .7); ctx.lineTo(W, H - 30 - (H - 50) * .7); ctx.stroke()
  ctx.fillStyle = '#333'; ctx.font = '9px monospace'; ctx.fillText('SUCCESS RATE / SAMPLE', 10, H - 12)
  ctx.fillStyle = '#F5D03A'; ctx.fillText('RETRAINING', W - 82, H - 12)
}

export function drawGem(canvas) {
  if (!canvas) return
  const ctx = canvas.getContext('2d'), W = canvas.width, H = canvas.height
  ctx.fillStyle = '#0d0d0b'; ctx.fillRect(0, 0, W, H)
  const gems = [
    { x: 55,  y: 65, r: 26, c: '#8B44D4', n: 'Ruby' },
    { x: 145, y: 52, r: 20, c: '#2B5BE0', n: 'Sapphire' },
    { x: 240, y: 68, r: 28, c: '#2CB56A', n: 'Emerald' },
    { x: 340, y: 56, r: 20, c: '#F5D03A', n: 'Topaz' },
    { x: 420, y: 62, r: 17, c: '#E03030', n: 'Coral' },
  ]
  gems.forEach(({ x, y, r, c, n }) => {
    const g = ctx.createRadialGradient(x - r * .3, y - r * .3, r * .1, x, y, r)
    g.addColorStop(0, 'white'); g.addColorStop(.3, c); g.addColorStop(1, 'rgba(0,0,0,.8)')
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill()
    ctx.fillStyle = 'rgba(255,255,255,.6)'; ctx.font = '8px monospace'
    ctx.textAlign = 'center'; ctx.fillText(n, x, y + r + 12)
  })
  ctx.textAlign = 'left'
  ctx.fillStyle = '#8B44D4'; ctx.font = '9px monospace'; ctx.fillText('GEM AI PREDICTIONS', 10, H - 12)
  ctx.fillStyle = '#444'; ctx.fillText('DOB ANALYSIS', W - 90, H - 12)
}

export function drawInspect(canvas) {
  if (!canvas) return
  const ctx = canvas.getContext('2d'), W = canvas.width, H = canvas.height
  ctx.fillStyle = '#0d0d0b'; ctx.fillRect(0, 0, W, H)
  ctx.strokeStyle = 'rgba(255,255,255,.15)'; ctx.lineWidth = 1
  ctx.strokeRect(20, 15, W - 40, H - 40)
  ctx.beginPath(); ctx.moveTo(20, H / 2 - 10); ctx.lineTo(W - 20, H / 2 - 10); ctx.stroke()
  const cams = [{ x: 40, y: 30 }, { x: W / 2, y: 30 }, { x: W - 50, y: 30 }, { x: 40, y: H / 2 + 10 }, { x: W - 50, y: H / 2 + 10 }, { x: W / 2, y: H - 38 }]
  cams.forEach(({ x, y }) => {
    ctx.fillStyle = 'rgba(245,166,35,.25)'; ctx.beginPath(); ctx.arc(x, y, 16, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = 'rgba(245,166,35,.8)'; ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fill()
  })
  ctx.fillStyle = '#F5A623'; ctx.font = '9px monospace'
  ctx.fillText(`${cams.length} CAMS · 2 FLOORS · VERIFIED`, 10, H - 12)
}

export const DRAW_FNS = {
  gps: drawGPS, eeg: drawEEG, task: drawTask,
  cctv: drawCCTV, graft: drawGraft, gem: drawGem, inspect: drawInspect,
}
