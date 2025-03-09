import React from 'react'
import { Link } from 'react-router-dom'

export default function ScoreboardModal() {
  return (
    <button className="inline-block">
      <footer className="fixed bottom-0 right-0 m-8 flex w-52 items-center justify-center bg-[#1B1725] px-10 py-8 text-white">
        <span className=" inline-block font-footer text-lg uppercase">
          <Link to="/scoreboard">Scoreboard</Link>
        </span>
      </footer>
    </button>
  )
}
