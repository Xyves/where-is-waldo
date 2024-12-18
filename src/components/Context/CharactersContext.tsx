import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
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
  characters: Character[]
  loading: boolean
  error: string | null
  setCharacters: () => {}
  toggleMarked: () => {}
}
const CharacterContext = createContext<CharacterContextType>({
  characters: [],
  loading: true,
  error: null,
  markCharacter: () => {},
  toggleMarked: () => {}
})

export const CharacterProvider: React.FC<{
  children: ReactNode
}> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const toggleMarked = (id) => {
    setCharacters((prev) =>
      prev.map((char) => (char.id === id ? { ...char, marked: true } : char))
    )
    console.log(characters)
    const everyCharMarked = characters?.every((obj) => obj.marked)
    if (everyCharMarked) {
      console.log('All characters marked. Ending game...')
    }
  }

  // Log showDialog after it's updated

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const response = await fetch3Characters()
        setCharacters(
          response.map((character) => ({ ...character, marked: false }))
        )
      } catch (err: any) {
        console.error(err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadCharacters()
  }, [])

  return (
    <CharacterContext.Provider
      value={{
        characters,
        loading,
        error,
        setCharacters,
        toggleMarked
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}
export const useCharacters = () => useContext(CharacterContext)
