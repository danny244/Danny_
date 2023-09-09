import Feature from "./components/Feature"
import Texts from "./components/Texts"
import Monitor from "./components/Monitor"
import Secure from "./components/Secure"
import Article from "./components/Article"
import '../../App.css'
import Cards from "./components/Cards"

function Fluxcards() {
  return (
    <div className='fluxcards h-[100%]'>
      <Texts />
      <Feature />
      <Monitor />
      <Secure />
      <Article />
      <Cards />
    </div>
  )
}

export default Fluxcards