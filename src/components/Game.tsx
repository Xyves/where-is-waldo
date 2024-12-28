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
  const [isModalOpen, setModalIsOpen] = useState<boolean>(false)
  const { setTimerRunning } = useTimer()
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [gameActive, setGameActive] = useState<boolean>(true)
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [timerActive, setTimerActive] = useState<boolean>(true)
  const toggleState = () => {
    setModalIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    if (gameActive) {
      setTimerActive(true)
      document.body.style.height = 'auto'
    } else {
      setTimerActive(false)
      setShowDialog(true)
      document.body.style.overflow = 'hidden'
    }
  }, [gameActive, setTimerRunning])

  const handleClick = (e: any) => {
    const coordinates = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }
    const newCoords = calculateCoords(coordinates)
    setCoords(newCoords)
  }

  return (
    <TimerProvider>
      <CharacterProvider setGameActive={setGameActive}>
        <div
          className="game relative"
          onClick={(e) => {
            toggleState()
            handleClick(e)
          }}
        >
          <img src="main-robotcity.webp" className=" h-auto w-full " alt="" />
          <Navbar>
            <Timer timerActive={timerActive} />
            <CharacterList />
          </Navbar>
          {isModalOpen ? (
            <ModalMenu
              toggleState={toggleState}
              coords={coords}
              gameActive={gameActive}
            />
          ) : null}
          <CharacterList />
          <Footer />
        </div>
        {showDialog && (
          <CreateScore
            setShowDialog={setShowDialog}
            setGameActive={setGameActive}
          />
        )}
      </CharacterProvider>
    </TimerProvider>
  )
}
export default Game
