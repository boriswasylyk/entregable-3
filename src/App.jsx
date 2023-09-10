import { useEffect, useState, useRef } from "react"
import useFetch from "./Hook/useFetch"
import getRandomNumber from "./utils/getRandomNumber"
import LocationInfo from "./assets/components/LocationInfo"
import ResidentCard from "./assets/components/ResidentCard"
import "./App.css"


function App() {
  
  const [inputValue, setinputValue] = useState(getRandomNumber(''))
  const numberRandom = getRandomNumber(126)
  const url = (`https://rickandmortyapi.com/api/location/${inputValue || 'debes buscar algo' }`)
  const [ location, getLocation, hasError ] = useFetch(url)

  useEffect(() => {
    getLocation()  
    
  }, [inputValue])
  
  const inputSearch =useRef()
  
  const handleSubmit = e => {
  e.preventDefault()
  setinputValue(inputSearch.current.value.trim())

}
return (
    
  <div className="total_items">
    <h2 className="total_name">Rick and Morty app</h2>
    <form className=" total_form" onSubmit={handleSubmit}>
      <input className="total_input" ref={inputSearch} type="text" />
      <button className="total_button" total="total_buttom">Search</button>
      </form>
    {hasError ? (
      <h2 className="total_error">Hey! You must provide an id from 1 to 126</h2>
      ) : (
      <>
        <LocationInfo location={location} />
        <div className="resident_card">
          {location?.residents.map(url => (
            <ResidentCard 
            key={url}
            url={url}
            />
            ))}
        </div>
      </>
    )}
  </div>
);

        
    

}

export default App
