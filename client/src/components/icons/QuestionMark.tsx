import { FC } from 'react'
import { Entypo } from '@expo/vector-icons'
import { PlayerWrapper } from '../../assets/wrappers'

const QuestionMark: FC = () => {
  return <Entypo name="help" style={PlayerWrapper.question} />
}
export default QuestionMark
