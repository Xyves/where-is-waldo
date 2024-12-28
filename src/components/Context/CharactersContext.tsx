import { heroInterface } from 'interface'
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
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
  setCharacters: (characters: Character[]) => void
  toggleMarked: (id: string) => void
}
const CharacterContext = createContext<CharacterContextType>({
  characters: [],
  loading: true,
  error: null,
  setCharacters: () => {},
  toggleMarked: () => {}
})

export const CharacterProvider: React.FC<{
  children: ReactNode
  setGameActive: Dispatch<SetStateAction<boolean>>
}> = ({ children, setGameActive }) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const toggleMarked = (id: string) => {
    setCharacters((prev) => {
      const updatedCharacters = prev.map((char) =>
        char.id === id ? { ...char, marked: true } : char
      )

      const everyCharMarked = updatedCharacters.every((obj) => obj.marked)
      // End game if every character's marked value is true
      if (everyCharMarked) {
        setGameActive(false)
      }

      return updatedCharacters
    })
  }

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const response = await fetch3Characters()
        const updatedCharacters: heroInterface[] = response.map(
          (character: heroInterface) => ({
            ...character,
            marked: false
          })
        )
        setCharacters(updatedCharacters)
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
