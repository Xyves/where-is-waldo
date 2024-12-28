import { useCharacters } from 'components/Context/CharactersContext'
import { checkCharacterRange } from 'utils'

export default function ModalMenu({
  toggleState,
  coords,
  gameActive
}: {
  toggleState: any
  coords: { x: number; y: number }
  gameActive: boolean
}) {
  const { characters, toggleMarked } = useCharacters()

  const handleClick = async (heroId: string) => {
    const hero = characters?.find((character) => character.id === heroId)
    if (!hero) return null
    const isCharacterWithinRange = checkCharacterRange(hero, coords)
    if (!isCharacterWithinRange) return null
    toggleMarked(heroId)
  }
  if (!gameActive) return null

  return (
    <ul
      className={
        'absolute rounded-lg border-2 border-solid border-gray-400 bg-[#1e293b]   p-3 opacity-95 '
      }
      style={{
        left: `${coords.x + 60}px`,
        top: `${coords.y - 200}px`
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {characters?.map((character) => (
        <li
          className="mx-2   mb-10 flex flex-col justify-end rounded-lg border-2 border-solid border-yellow-600 bg-white text-white"
          key={character.id}
          value={character.id}
        >
          <button
            aria-label={character.id}
            onClick={() => {
              handleClick(character.id)
              toggleState()
            }}
            className="size-24 "
          >
            <img
              className=" size-full bg-[#DEFFF2]"
              src={character.character_image}
            />
            <p className=" mx-auto  w-full border-t-2 border-solid border-yellow-600 p-2 text-center">
              {character.character_name}
            </p>
          </button>
        </li>
      ))}
    </ul>
  )
}
