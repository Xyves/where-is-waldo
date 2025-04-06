import { heroInterface } from 'interface'
export function generateCharacters() {}

export function checkCharacterRange(
  hero: heroInterface,
  coords: { x: number; y: number }
) {
  const isWithinRange =
    Math.abs(hero.coordinateX - coords.x) <= 70 &&
    Math.abs(hero.coordinateY - coords.y) <= 70
  return isWithinRange
}
export function calculateCoords(coordsObject: Coords) {
  const { x, y } = coordsObject
  const dpr = window.devicePixelRatio || 1
  const userResolution = {
    x: window.screen.width * dpr,
    y: window.screen.height * dpr
  }
  const newCoords: { x: number; y: number } = { x: 0, y: 0 }
  newCoords.x = (x / userResolution.x) * 1920
  newCoords.y = (y / userResolution.y) * 1080
  return newCoords
}
type Coords = {
  x: number
  y: number
}
export async function fetch3Characters() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_DATABASE_URL}/api/characters`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
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
export async function postScore(username: string, time: number) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_DATABASE_URL}/api/scoreboard`,
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
      console.error(data.error || 'Score submission failed')
      alert(data.error || 'An error occurred while submitting the score.')
    }
  } catch (e) {
    console.error('An error occurred:', e)
    return null
  }
}
export async function fetchScores() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_DATABASE_URL}/api/scoreboard`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
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
