export function generateCharacters() {}

export function checkCharacterRange(hero, coords) {
  const isWithinRange =
    Math.abs(hero.coordinateX - coords.x) <= 950 &&
    Math.abs(hero.coordinateY - coords.y) <= 950
  return isWithinRange
}
export function calculateCoords(coordsObject: Coords) {
  const { x, y } = coordsObject
  const dpr = window.devicePixelRatio || 1
  const userResolution = {
    x: window.screen.width * dpr,
    y: window.screen.height * dpr
  }
  const newCoords = {}
  newCoords.x = (x / userResolution.x) * 1920
  newCoords.y = (y / userResolution.y) * 1080
  // console.log('New cords ', newCoords)
  return newCoords
}
type Coords = {
  x: number
  y: number
}
export async function fetch3Characters() {
  try {
    const response = await fetch(
      'https://where-is-waldo-backend-production-9a1d.up.railway.app/api/characters',
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    )
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      console.error(data.message || 'Something went wrong')
      return null
    }
  } catch (e) {
    console.error('An error occurred:', e)
    return null
  }
}
export async function postScore(username, time) {
  try {
    const response = await fetch(
      'https://where-is-waldo-backend-production-9a1d.up.railway.app/api/scoreboard',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, time })
      }
    )
    const data = await response.json()
    if (response.ok) {
      window.location.href = '/scoreboard'
    } else {
      console.error(data.message || 'Score submition failed')
    }
  } catch (e) {
    console.error('An error occurred:', e)
    return null
  }
}
