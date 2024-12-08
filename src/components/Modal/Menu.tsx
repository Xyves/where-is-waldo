import { useCharacters } from 'components/CharactersContext'
import React, { useEffect, useRef, useState } from 'react'

export default function ModalMenu({ toggleState, coords }) {
  const { characters, loading, error, toggleMarked } = useCharacters()
  const handleClick = (heroId: string) => {
    const hero = characters?.find((character) => character.id === heroId)
    if (!hero) {
      return null
    }
    const isWithinRange =
      Math.abs(hero.coordinateX - coords.x) <= 45 &&
      Math.abs(hero.coordinateY - coords.y) <= 45
    if (!isWithinRange) {
      return null
    }
    toggleMarked(heroId)
  }
  return (
    <ul
      className={
        'absolute p-3 bg-[#4b5557] opacity-95 border-solid border-gray-400 border-2 rounded-lg'
      }
      style={{
        left: `${coords.x + 60}px`,
        top: `${coords.y - 200}px`
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {characters?.map((character) =>
        character.marked ? null : (
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
        )
      )}
      {/* <button className="bg-red-50 text-lg text-red-400" onClick={toggleState}>
        X
      </button> */}
    </ul>
  )
}
