import Footer from './Footer'
import CharacterList from './CharacterList'
import Navbar from './Navbar'
import ModalMenu from './Modal/Menu'
import { useState } from 'react'
import { CharacterProvider } from './CharactersContext'
import { calculateCoords } from 'utils'

function App() {
  const [isModalOpen, setModalIsOpen] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const toggleState = () => {
    setModalIsOpen((prevState) => !prevState)
    console.log(coords)
  }

  const handleClick = (e) => {
    const coordinates = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }
    const newCoords = calculateCoords(coordinates)
    setCoords(newCoords)
  }

  return (
    <CharacterProvider>
      <div
        className="game relative"
        onClick={(e) => {
          toggleState()
          handleClick(e)
        }}
      >
        <img src="main-robotcity.webp" className=" h-auto w-full " alt="" />
        <Navbar />
        {isModalOpen ? (
          <ModalMenu toggleState={toggleState} coords={coords} />
        ) : null}

        <CharacterList />
        <Footer />
      </div>
    </CharacterProvider>
  )
}

export default App
