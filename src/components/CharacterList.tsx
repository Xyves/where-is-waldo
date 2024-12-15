import { useCharacters } from './Context/CharactersContext'

export default function CharacterList() {
  const { characters, loading, error } = useCharacters()

  if (loading) return <p>Loading characters...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <div className="fixed inset-x-0 left-16 top-0  my-5 flex  size-fit items-center justify-center border-2   p-4">
      <ul className="flex items-center justify-center">
        {characters?.map((character) => (
          <li
            key={character.id}
            className={`
              mx-2
              mb-5 flex items-center justify-center
               rounded-2xl border-2 border-solid border-[#2E86AB]
            `}
          >
            <figure
              className={`relative inline-block size-32  rounded-sm bg-[#ffff] ${
                !character.marked && 'cursor-pointer'
              }`}
            >
              {character.marked && (
                <span className="absolute inset-0 z-10 flex select-none items-center justify-center text-7xl font-bold text-red-600">
                  X
                </span>
              )}
              <img
                src={character.character_image}
                alt={`image of ${character.character_name}`}
                className="size-full  opacity-80"
              />
              <figcaption className="relative -top-8 h-8 rounded-b-lg text-center text-lg font-bold text-black">
                {character.character_name}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}
