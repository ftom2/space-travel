import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import '@unocss/reset/tailwind.css'
import 'uno.css';
import './App.css'
import App from './pages/App'
import Home from "./pages/Home"
import Destinations from "./pages/Destinations"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
