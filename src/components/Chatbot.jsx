import { useState, useRef, useEffect } from 'react'
import { SYSTEM_PROMPT } from '../data/index'

const API_KEY = import.meta.env.VITE_GROQ_API_KEY

function TypingDots() {
  return (
    <div className="cmsg b">
      <div className="cmav">🤖</div>
      <div className="ctyping">
        <div className="ctd" /><div className="ctd" /><div className="ctd" />
      </div>
    </div>
  )
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([])
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, loading])

  async function send() {
    const text = input.trim()
    if (!text || loading) return
    setInput('')

    const userMsg = { role: 'user', content: text }
    const newHistory = [...history, userMsg]
    setHistory(newHistory)
    setMsgs(m => [...m, { from: 'u', text }])
    setLoading(true)

    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          model: 'qwen/qwen3.8-27b',
          max_tokens: 150,
          messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...newHistory],
        }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err?.error?.message || `HTTP ${res.status}`)
      }

      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content || '...'
      setHistory(h => [...h, { role: 'assistant', content: reply }])
      setMsgs(m => [...m, { from: 'b', text: reply }])
    } catch (e) {
      setMsgs(m => [...m, { from: 'b', text: `Error: ${e.message}` }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="cbot-wrap">
      {open && (
        <div className="cbot-win" role="dialog" aria-label="Chat with KushBot">
          <div className="cbot-hd">
            <div className="cbot-hd-title">🤖 KushBot</div>
            <div className="cbot-hd-acts">
              <button className="cbot-icon-btn" onClick={() => setOpen(false)} title="Close">✕</button>
            </div>
          </div>

          <div className="cbot-msgs" role="log" aria-live="polite">
            {msgs.length === 0 && !loading && (
              <div className="cbot-empty">
                <strong>Hey! I'm KushBot 👋</strong>
                Ask me anything about Kush's work, projects, or skills.
              </div>
            )}
            {msgs.map((m, i) => (
              <div key={i} className={`cmsg ${m.from}`}>
                <div className="cmav">{m.from === 'b' ? '🤖' : '🧑'}</div>
                <div className="cmc">{m.text}</div>
              </div>
            ))}
            {loading && <TypingDots />}
            <div ref={bottomRef} />
          </div>

          <div className="cbot-in-area">
            <input
              className="cbot-input"
              type="text"
              placeholder="Ask about Kush…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              aria-label="Chat input"
            />
            <button
              className="cbot-send"
              onClick={send}
              disabled={!input.trim() || loading}
              aria-label="Send message"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <button
        className="cbot-fab"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chatbot' : 'Open chatbot'}
        title="Chat with KushBot"
      >
        {open ? '✕' : '💬'}
      </button>
    </div>
  )
}
