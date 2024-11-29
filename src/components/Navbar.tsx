import React from 'react'
import Timer from './Timer'
import CharacterList from './CharacterList'
export default function Navbar() {
  return (
    <nav className="absolute mx-10  mt-12 flex w-full">
      <Timer />
      <CharacterList />
    </nav>
  )
}
