import { FC, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { tile, tileSymbol } from '../types'

const Tile: FC<{ props: tile }> = ({ props }) => {
  const [Symbol, setSymbol] = useState<tileSymbol>({
    sign: props.symbol.sign,
    name: props.symbol.name,
  })
  const renderSymbol = () => {
    setSymbol(Symbol => (Symbol = props.symbol))
    props.clickEvent(props.index)
  }
  return (
    <TouchableOpacity disabled={props.tileState} onPress={renderSymbol}>
      {<props.symbol.sign />}
    </TouchableOpacity>
  )
}
export default Tile
