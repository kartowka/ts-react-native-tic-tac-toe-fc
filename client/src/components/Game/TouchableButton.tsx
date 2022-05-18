import { FC } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { TextWrapper } from '../../assets/wrappers'
import { Entypo } from '@expo/vector-icons'
import { touch } from '../types'
const TouchableButton: FC<touch> = ({ buttonName, clickEvent }) => {
  const clickHandler = () => {
    console.log('child')
  }
  return (
    <TouchableOpacity style={TextWrapper.resetGame} onPress={clickEvent}>
      <Entypo name="controller-jump-to-start" style={TextWrapper.resetGameIcon} />
      <Text style={TextWrapper.resetGameText}>{buttonName}</Text>
    </TouchableOpacity>
  )
}

export default TouchableButton

/* in case child want to press on parent event we should pass create Interface then pass event like in this code
in case we want to press on child event we just told him instead of eventClick we pass function clickHandler*/
