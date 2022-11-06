const url = "https://hp-api.herokuapp.com/api/characters"

const fetchData = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log("error", error)
  }
}

export { fetchData }