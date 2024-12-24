import Footer from './Footer'
import CharacterList from './CharacterList'
import Navbar from './Navbar'
import ModalMenu from './Modals/Menu'
import { useEffect, useState } from 'react'
import { CharacterProvider } from './Context/CharactersContext'
import { calculateCoords } from 'utils'
import { TimerProvider, useTimer } from './Context/TimerContext'
import CreateScore from './Modals/CreateScore'
import Timer from './Timer'

function Game() {
  const [isModalOpen, setModalIsOpen] = useState(false)
  const { setTimerRunning } = useTimer()
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [gameActive, setGameActive] = useState(true)
  const [showDialog, setShowDialog] = useState(false)
  const [timerActive, setTimerActive] = useState(true)
  const toggleState = () => {
    setModalIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    if (gameActive) {
      setTimerActive(true) // Start the timer when game is active
      document.body.style.height = 'auto'
    } else {
      setTimerActive(false)
      setShowDialog(true)
      document.body.style.overflow = 'hidden'
    }
  }, [gameActive, setTimerRunning])

  const handleClick = (e) => {
    const coordinates = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }
    const newCoords = calculateCoords(coordinates)
    setCoords(newCoords)
  }

  return (
    <TimerProvider>
      <CharacterProvider gameActive={gameActive} setGameActive={setGameActive}>
        <div
          className="game relative"
          onClick={(e) => {
            toggleState()
            handleClick(e)
          }}
        >
          <img src="main-robotcity.webp" className=" h-auto w-full " alt="" />
          <Navbar>
            <Timer timerActive={timerActive} setTimerActive={setTimerActive} />
            <CharacterList />
          </Navbar>
          {isModalOpen ? (
            <ModalMenu
              toggleState={toggleState}
              coords={coords}
              gameActive={gameActive}
              setGameActive={setGameActive}
            />
          ) : null}
          <CharacterList gameActive={gameActive} />
          <Footer />
        </div>
        {showDialog && (
          <CreateScore
            showDialog={showDialog}
            setShowDialog={setShowDialog}
            setGameActive={setGameActive}
          />
        )}
      </CharacterProvider>
    </TimerProvider>
  )
}
export default Game
