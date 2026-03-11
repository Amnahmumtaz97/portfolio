# Amnah Mumtaz Ahmad — Portfolio Website
### Built with MERN Stack (MongoDB · Express · React · Node.js)

---

## 🚀 Quick Start

### 1. Clone / unzip the project
```bash
cd portfolio
```

### 2. Setup the Backend (Server)
```bash
cd server
npm install

# Create your .env file
cp .env.example .env
# Edit .env and add your MongoDB URI
```

Edit `server/.env`:
```
MONGO_URI=mongodb://localhost:27017/portfolio
PORT=5000
```

Start the server:
```bash
npm run dev       # development (with nodemon)
# or
npm start         # production
```

Server runs on: `http://localhost:5000`

---

### 3. Setup the Frontend (Client)
```bash
cd ../client
npm install
npm start
```

Frontend runs on: `http://localhost:3000`
The `"proxy": "http://localhost:5000"` in client/package.json handles API calls automatically.

---

## 📁 Project Structure
```
portfolio/
├── client/                  ← React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js / Navbar.css
│   │   │   ├── Hero.js / Hero.css
│   │   │   ├── Skills.js / Skills.css
│   │   │   ├── Projects.js / Projects.css
│   │   │   ├── Experience.js / Experience.css
│   │   │   ├── Education.js / Education.css
│   │   │   ├── Contact.js / Contact.css
│   │   │   └── Footer.js / Footer.css
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
└── server/                  ← Express + MongoDB Backend
    ├── index.js             ← Main server file
    ├── .env.example
    └── package.json
```

---

## 🌐 Deployment (How to Get a Live Link)

### Option A — Vercel + MongoDB Atlas (Recommended, Free)

**Frontend:**
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repo
3. Set **Root Directory** to `client`
4. Click Deploy → get a live URL instantly

**Backend:**
1. Go to [render.com](https://render.com) → New Web Service
2. Set **Root Directory** to `server`
3. Add environment variable: `MONGO_URI` = your MongoDB Atlas URI
4. Deploy → copy the URL (e.g. `https://amnah-portfolio-api.onrender.com`)
5. In `client/package.json`, change `"proxy"` to your Render URL

**MongoDB Atlas (Free Database):**
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas) → Create free cluster
2. Get connection string → paste into Render env variable

### Option B — Netlify (Frontend only, simplest)
1. Run `npm run build` inside `/client`
2. Drag the `build/` folder to [netlify.com/drop](https://netlify.com/drop)
3. Done — live URL in seconds!

---

## ✏️ Customization
- Update your projects in `client/src/components/Projects.js`
- Add your GitHub links by replacing `https://github.com/Amnahmumtaz97` with actual repo URLs
- Change colors in `client/src/App.css` (CSS variables in `:root`)
- Contact form messages are saved to MongoDB via `POST /api/contact`

---

## 🛠 Tech Stack
| Layer | Tech |
|-------|------|
| Frontend | React 18, React Router, Framer Motion |
| Styling | Custom CSS (no UI framework) |
| Icons | React Icons (Feather Icons) + Devicons CDN |
| Animations | CSS keyframes + React Type Animation |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| HTTP | Axios |
| Dev Tools | nodemon, dotenv, cors |
