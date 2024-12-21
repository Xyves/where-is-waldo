import React from 'react'
import Game from './Game'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Scoreboard from './Modals/Scoreboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Game />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
      </Routes>
    </BrowserRouter>
  )
}
