import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 1. Import Global CSS (Essential for Tailwind)
import './index.css'

// 2. Import All Pages
import Home from './home.jsx' 
import Login from './login.jsx'
import Register from './register.jsx'
import Profile from './profile.jsx'
import UploadCV from './uploadcv.jsx'
import Results from './results.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<UploadCV />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results/:id" element={<Results />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)