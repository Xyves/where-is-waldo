export function generateCharacters() {}
export function calculateCoords(oldCoords: Coords) {
  const dpr = window.devicePixelRatio || 1
  const userResolution = {
    x: window.screen.width * dpr,
    y: window.screen.height * dpr
  }
  const newCoords = {}
  newCoords.x = (oldCoords.x / userResolution.x) * 1920
  newCoords.y = (oldCoords.x / userResolution.y) * 1080
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
