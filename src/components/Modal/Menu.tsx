import { useCharacters } from 'components/CharactersContext'
import React, { useState } from 'react'

export default function ModalMenu({ toggleState }) {
  const { characters, loading, error } = useCharacters()
  con
  return (
    <ul className=" absolute grid h-64 w-72 grid-cols-1 grid-rows-3 bg-blue-900 p-4">
      <form action="">
        {characters?.map((character) => (
          <li
            className="flex items-center  rounded-lg bg-red-300 "
            key={character.id}
            value={character.id}
          >
            <img
              className=" h-16 w-1/3 bg-yellow-300"
              src={character.character_image}
            />
            <p className=" pl-6 text-center">{character.character_name}</p>
            <button className="bg-red-50 text-red-400" onClick={toggleState}>
              X
            </button>
          </li>
        ))}
      </form>
    </ul>
  )
}
