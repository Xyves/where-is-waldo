import { useCharacters } from 'components/CharactersContext'
import React, { useEffect, useRef, useState } from 'react'

export default function ModalMenu({ toggleState, coords }) {
  const { characters, loading, error } = useCharacters()

  return (
    <ul
      className={'  absolute bg-blue-900 p-4 '}
      style={{
        left: `${coords[0] + 60}px`,
        top: `${coords[1] + -200}px`,
        position: 'absolute'
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <form action="" className="flex flex-col p-2 ">
        {characters?.map((character) => (
          <li
            className="mb-3 flex flex-col justify-end rounded-lg bg-red-300"
            key={character.id}
            value={character.id}
          >
            <img
              className=" size-32 bg-yellow-300"
              src={character.character_image}
            />
            <p className=" mx-auto  w-full p-2 text-center">
              {character.character_name}
            </p>
          </li>
        ))}
        <button
          className="bg-red-50 text-lg text-red-400"
          onClick={toggleState}
        >
          X
        </button>
      </form>
    </ul>
  )
}
