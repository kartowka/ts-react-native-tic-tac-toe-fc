import { FC } from 'react'
import { Text } from 'react-native'

import { TextWrapper } from '../../assets/wrappers'
import { gameName } from '../types'
const GameName: FC<gameName> = ({ gameName }) => {
  return <Text style={TextWrapper.container}>{gameName}</Text>
}

export default GameName
