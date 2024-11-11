import Footer from './Footer'
import Timer from './Timer'
import CharacterList from './CharacterList'
import Navbar from './NavBar'
function App() {
  return (
    <div id="container" className="  ">
      <Navbar />
      <div className="game">
        <img src="main-robotcity.webp" className="h-auto w-full" alt="" />
      </div>

      <Footer />

      <div className=""></div>
    </div>
  )
}

export default App
