import { FC } from 'react'
import { QuestionMark, Cross, Circle } from '../icons'

type tileSymbol = {
  sign: FC
  name: 'Question' | 'Cross' | 'Circle'
}
type tile = {
  symbol: tileSymbol
  index: number
  tileState: boolean
  clickEvent: (index: number) => void
}

type player = {
  player: 'x' | 'o'
}

type touch = {
  buttonName: string
  clickEvent: () => void
}
type gameName = {
  gameName: string
}

export { tile, player, touch, gameName, tileSymbol }
