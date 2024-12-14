import { useCharacters } from 'components/Context/CharactersContext'
import React, { useEffect, useRef, useState } from 'react'
import CreateScore from './CreateScore'

export default function ModalMenu({ toggleState, coords }) {
  const { characters, loading, error, toggleMarked } = useCharacters()
  const [showDialog, setShowDialog] = useState(false)
  const handleClick = async (heroId: string) => {
    const hero = characters?.find((character) => character.id === heroId)
    if (!hero) {
      return null
    }
    const isWithinRange =
      Math.abs(hero.coordinateX - coords.x) <= 450 &&
      Math.abs(hero.coordinateY - coords.y) <= 450
    if (!isWithinRange) {
      return null
    }
    console.log('marked', heroId)
    toggleMarked(heroId)
    setTimeout(() => {
      isGameRunning()
    }, 0)
    if (!isGameRunning) {
      setShowDialog(true)
    }
  }
  const isGameRunning = () => {
    if (characters) {
      characters.forEach((obj) => {
        console.log(obj, obj.marked)
      })
      const gameActive = characters?.every((obj) => obj.marked)
      console.log(gameActive)
      return gameActive
    }
  }

  {
    if (showDialog)
      return (
        <CreateScore showDialog={showDialog} setShowDialog={setShowDialog} />
      )
  }

  return (
    <ul
      className={
        'absolute rounded-lg border-2 border-solid border-gray-400 bg-[#4b5557] p-3 opacity-95'
      }
      style={{
        left: `${coords.x + 60}px`,
        top: `${coords.y - 200}px`
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {characters?.map((character) => (
        <li
          className="mx-2  my-4 flex flex-col justify-end rounded-lg border-2 border-solid border-gray-800 bg-white"
          key={character.id}
          value={character.id}
        >
          <button
            aria-label={character.id}
            onClick={() => {
              handleClick(character.id)
              toggleState()
            }}
          >
            <img
              className=" size-32 bg-[#DEFFF2]"
              src={character.character_image}
            />
            <p className=" mx-auto  w-full border-t-2 border-solid border-gray-600 p-2 text-center">
              {character.character_name}
            </p>
          </button>
        </li>
      ))}
      {/* <button className="bg-red-50 text-lg text-red-400" onClick={toggleState}>
        X
      </button> */}
    </ul>
  )
}
