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
