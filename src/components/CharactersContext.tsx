import React, { createContext, useContext, useEffect, useState } from 'react'
import { fetch3Characters } from 'utils'

interface Character {
  id: string
  character_name: string
  character_image: string
  coordinateX: number
  coordinateY: number
  marked?: boolean
}

interface CharacterContextType {
  characters: Character[] | null
  loading: boolean
  error: string | null
  toggleMarked: (id: string) => void
}
const CharacterContext = createContext<CharacterContextType>({
  characters: null,
  loading: true,
  error: null,
  toggleMarked: () => {}
})

export const CharacterProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [characters, setCharacters] = useState<Character[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const response = await fetch3Characters()
        setCharacters(response)
      } catch (err: any) {
        console.error(err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadCharacters()
  }, [])

  const toggleMarked = (id: string) => {
    setCharacters(
      (prev) =>
        prev?.map((character) =>
          character.id === id
            ? { ...character, marked: !character.marked }
            : character
        ) || null
    )
  }

  return (
    <CharacterContext.Provider
      value={{ characters, loading, error, toggleMarked }}
    >
      {children}
    </CharacterContext.Provider>
  )
}
export const useCharacters = () => useContext(CharacterContext)
