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
          className="mx-2  my-4 flex flex-col justify-end rounded-lg border-2 border-solid border-yellow-600 bg-white"
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
            <p className=" mx-auto  w-full border-t-2 border-solid border-yellow-600 p-2 text-center">
              {character.character_name}
            </p>
          </button>
        </li>
      ))}
    </ul>
  )
}
