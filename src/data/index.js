export const PROJECTS = [
  {
    id: 'vehicle', date: 'Nov 14, 2024', name: 'VEHICLE TRACKER', icon: '🚗',
    desc: 'Advanced vehicle monitoring with GPS tracking, remote engine control, IoT sensor integration, and AES-256 encrypted data.',
    tags: ['IoT', 'Android', 'GPS', 'AES-256'], status: 'live', vis: 'gps',
  },
  {
    id: 'bci', date: 'Mar 3, 2025', name: 'BRAIN-COMPUTER INTERFACE', icon: '🧠',
    desc: 'EEG-controlled vehicle navigation via ADS1299 neural signal processing. Hands-free control through brainwave ML classification.',
    tags: ['BCI', 'EEG', 'Python', 'ML'], status: 'live', vis: 'eeg',
  },
  {
    id: 'qht', date: 'Aug 2025', name: 'QHT TASK APP', icon: '✅',
    desc: 'Full-featured React task management application. Built, deployed, and currently being validated through a live trial.',
    tags: ['React', 'Task Mgmt', 'Trial'], status: 'trial', vis: 'task',
  },
  {
    id: 'cctv', date: 'Sep 2025', name: 'CCTV AI SECURITY', icon: '📹',
    desc: 'Python + OpenCV surveillance with real-time motion detection and face recognition. Code complete; high-res hardware testing pending.',
    tags: ['Python', 'OpenCV', 'Face Detection', 'Motion'], status: 'ready', vis: 'cctv',
  },
  {
    id: 'graft', date: 'Oct 2025', name: 'GRAFT ANALYSIS', icon: '🌱',
    desc: 'ML model predicting plant graft success rates. ~500 graft gap in current build; model retraining in progress.',
    tags: ['ML', 'Python', 'Agriculture'], status: 'ready', vis: 'graft',
  },
  {
    id: 'gem', date: 'Oct 2025', name: 'GEM AI PREDICTION', icon: '💎',
    desc: 'Gemstone recommendations from date of birth, weight calculation logic, Lal Kitab integration, and an AI Astrologer chatbot.',
    tags: ['AI', 'Astrology', 'Gemstone', 'Lal Kitab'], status: 'live', vis: 'gem',
  },
]

export const STATUS_STYLE = {
  live: 'ps-live', trial: 'ps-trial', ready: 'ps-ready', complete: 'ps-complete',
}

export const STATUS_LABEL = {
  live: '● Live', trial: '◐ Trial', ready: '◷ Ready', complete: '✓ Complete',
}

export const SYSTEM_PROMPT = `You are KushBot, the AI assistant on Kush Singhal's portfolio. Always answer in 1-2 lines only — short, direct, and warm. Never write long paragraphs.

Kush Singhal — B.Tech CS (AI & Data Science), IIMT College of Engineering, Greater Noida.
Specialises in Cybersecurity, Android Development, and Brain-Computer Interfaces.
Contact: kushsinghal82@gmail.com | +91 7060002458

Skills: Android (Kotlin/Java), Firebase, IoT, Ethical Hacking, Penetration Testing, Network Security, Machine Learning, Neural Networks, Data Science, Python, AES Encryption, BCI development, OpenCV.

Projects:
1. Vehicle Tracking System — IoT+GPS, remote engine control, AES-256 end-to-end encryption
2. Brain-Computer Interface — EEG-controlled vehicle (ADS1299), brainwave ML classification, hands-free navigation
3. QHT Task App — React task management, live trial deployment
4. CCTV AI Security — OpenCV motion + face detection, code ready, pending hardware test
5. Graft Analysis — ML success prediction for plant grafts (~500 graft gap, retraining in progress)
6. Gem AI Prediction — Gemstone recommendations by DOB, weight calc, Lal Kitab, AI Astrologer chatbot

Leadership: Android Lead @ GDG Campus IIMT (Nov 2024–now), Technical Lead @ SOARX (Oct 2024–now).

Achievements: 1st Prize IIMT Hackathon 2025 | 3rd Prize Amity Cyber Cup 2023 | Best Theme ITS Hackathon 2024 | Best Theme Sharda Ideathon 2024 | 2nd Prize Hackathon Indore | Runner Up IIIT Delhi Hackathon.

Certs: Google Cybersecurity Fundamentals, Udemy Ethical Hacking, Cybrary IoT Security, Coursera Data Science & ML.

If asked anything unrelated to Kush, politely redirect to his work.`
