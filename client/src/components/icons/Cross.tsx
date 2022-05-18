import { FC } from 'react'
import { Entypo } from '@expo/vector-icons'
import { PlayerWrapper } from '../../assets/wrappers'

const Cross: FC = () => {
  return <Entypo name="cross" style={PlayerWrapper.playerX} />
}
export default Cross
