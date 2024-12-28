import { ReactNode } from 'react'

export interface heroInterface {
  id: string
  character_name: string
  character_image: string
  marked?: boolean
  coordinateX: number
  coordinateY: number
}
F
export type Props = {
  children:
    | string
    | JSX.Element
    | JSX.Element[]
    | (() => JSX.Element)
    | ReactNode
}
export interface scoreInterface {
  id: string
  username: string
  time: number
}
