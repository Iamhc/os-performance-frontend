# 📊 OS Performance Dashboard — Frontend

A real-time Linux OS monitoring dashboard built with React.js, Next.js, and Chart.js. Visualize live CPU, memory, disk, and network metrics through an intuitive, responsive interface.

![React](https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

---

## ✨ Features

- 📈 **Real-time metrics** — live CPU, memory, disk, and network usage
- 📊 **Interactive charts** — Chart.js powered visualizations with live updates
- 🕓 **Historical data** — view past performance trends over time
- 🔄 **Auto-refresh** — polls backend APIs at configurable intervals
- 📱 **Responsive design** — works across desktop and mobile
- ⚡ **Optimized rendering** — smooth, lag-free UI under continuous data streams
- 🌐 **Cross-browser compatible** — Chrome, Firefox, Safari

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | UI framework |
| Next.js | SSR & routing |
| TypeScript | Type safety |
| Chart.js | Data visualization |
| Tailwind CSS | Styling |
| Axios | API communication |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn
- Backend server running

### Installation

```bash
# Clone the repo
git clone https://github.com/Iamhc/os-performance-frontend.git

# Navigate to project
cd os-performance-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

App runs at `http://localhost:3000`

---

## 🔧 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── charts/         # CPU, Memory, Disk, Network charts
│   ├── cards/          # Metric summary cards
│   └── layout/         # Dashboard layout components
├── hooks/
│   └── useMetrics.ts   # Custom hook for polling metrics
├── utils/
│   └── formatters.ts   # Data formatting helpers
└── pages/
    └── index.tsx       # Main dashboard page
```

---

## 📡 Metrics Tracked

| Metric | Description |
|---|---|
| CPU | Usage %, per-core breakdown |
| Memory | Used / Total RAM |
| Disk | Read/Write speed, usage % |
| Network | Upload / Download speed |

---

## 🔗 Backend

This frontend connects to the Node.js + Python backend:
👉 [os-performance-backend](https://github.com/Iamhc/os-performance-backend)

---

## 👨‍💻 Author

**Himanshu Choudhary**
- GitHub: [@Iamhc](https://github.com/Iamhc)
- LinkedIn: [himanshu-choudhary](https://linkedin.com/in/himanshu-choudhary)
