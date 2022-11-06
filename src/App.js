import { useEffect, useState } from "react"
import "./App.css"
import { fetchData } from "./apiCalls"
import Card from "./components/Card"
import deathlyHallows from './assets/deathlyHallows.svg'
import FocusedCharacter from './components/FocusedCharacter.jsx'
function App() {
  const [isFetching, setIsFetching] = useState(false)
  const [characters, setCharacters] = useState([])
  const [filterText, setFilterText] = useState("")
  const [characterInFocus, setCharacterInFocus] = useState(false)
  useEffect(() => {
    setIsFetching(true)
    fetchData()
      .then((data) => {
        setCharacters(data)
        setIsFetching(false)
      })
      .catch((err) => console.log(err))
  }, [])

  const hasAMatch = (name) => {
    if (filterText.length < 1) return true
    if (name.toLowerCase().includes(filterText.toLowerCase())) return true
  }
  return (
    <div className="App">
      {characterInFocus ? (
        <FocusedCharacter character={characterInFocus} handleClose={() => setCharacterInFocus(false)} />
      ) : (
        <>
          <img src={deathlyHallows} width="250px" />
          <br />
          <input
            type="text"
            onChange={(e) => setFilterText(e.target.value)}
            style={{ margin: "10px", width: "290px", background: "rgba(0,0,0,0)", color: "white", border: "0.05px solid white" }}
          />
          {isFetching && <h1>Loading...</h1>}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", width: "920px", gridGap: "10px", margin: "0 auto" }}>
            {characters
              .filter((character) => hasAMatch(character.name))
              .slice(0, 12)
              .map((character) => (
                <Card key={character.name} character={character} handleClick={() => setCharacterInFocus(character)} />
              ))}
          </div>
        </>
      )}
    </div>
  )
}

export default App
