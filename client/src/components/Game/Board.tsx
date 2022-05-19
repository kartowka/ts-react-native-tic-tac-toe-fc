import { FC, useState } from 'react'
import { View, Alert } from 'react-native'
import GameName from './GameName'
import TouchableButton from './TouchableButton'
import Tile from './Tile'
import { BoardWrapper, RowWrapper } from '../../assets/wrappers'
import { player, tile } from '../types'
import { Circle, Cross, QuestionMark } from '../icons'
import { StatusBar } from 'expo-status-bar'

const Board: FC = () => {
	const hasQuestionMark = [true, true, true, true, true, true, true, true, true]
	const player: player = { player: 'x' }
	const [board, setBoard] = useState<tile[]>([])

	const checkBoardForQuestionMarks = (hasQuestionMark: Array<boolean>) => {
		board.forEach((element) => {
			element.symbol.name == 'Question' ? (hasQuestionMark[element.index] = true) : (hasQuestionMark[element.index] = false)
		})

		return hasQuestionMark.every((elem) => elem === false)
	}
	const handleClick = (index: number) => {
		board[index].symbol = {
			sign: player.player === 'x' ? Cross : Circle,
			name: player.player === 'x' ? 'Cross' : 'Circle',
		}
		player.player = player.player === 'x' ? 'o' : 'x'
		board[index].tileState = true
		const winner = winGame()
		if (winner != null) {
			Alert.alert(`${winGame()} has won the Game!`)
		} else if (checkBoardForQuestionMarks(hasQuestionMark) && winner == null) {
			Alert.alert(`its a tie!`)
		}
	}
	const initialBoard = () => {
		for (let i = 0; i < 9; i++) {
			board.push({
				symbol: { sign: QuestionMark, name: 'Question' },
				tileState: false,
				index: i,
				clickEvent: handleClick,
			})
		}
	}
	initialBoard()
	const winGame = (): string | null => {
		if (board[0].symbol.name != 'Question' && board[0].symbol.name == board[1].symbol.name && board[1].symbol.name == board[2].symbol.name) {
			return board[0].symbol.name
		} else if (board[3].symbol.name != 'Question' && board[3].symbol.name == board[4].symbol.name && board[4].symbol.name == board[5].symbol.name) {
			return board[3].symbol.name
		} else if (board[6].symbol.name != 'Question' && board[6].symbol.name == board[7].symbol.name && board[7].symbol.name == board[8].symbol.name) {
			return board[6].symbol.name
		} else if (board[0].symbol.name != 'Question' && board[0].symbol.name == board[3].symbol.name && board[3].symbol.name == board[6].symbol.name) {
			return board[0].symbol.name
		} else if (board[1].symbol.name != 'Question' && board[1].symbol.name == board[4].symbol.name && board[4].symbol.name == board[7].symbol.name) {
			return board[1].symbol.name
		} else if (board[2].symbol.name != 'Question' && board[2].symbol.name == board[5].symbol.name && board[5].symbol.name == board[8].symbol.name) {
			return board[2].symbol.name
		} else if (board[0].symbol.name != 'Question' && board[0].symbol.name == board[4].symbol.name && board[4].symbol.name == board[8].symbol.name) {
			return board[0].symbol.name
		} else if (board[2].symbol.name != 'Question' && board[2].symbol.name == board[4].symbol.name && board[4].symbol.name == board[6].symbol.name) {
			return board[2].symbol.name
		} else {
			return null
		}
	}
	const resetGame = () => {
		setBoard([])
	}

	return (
		<View style={BoardWrapper.background}>
			<StatusBar style='light' />
			<View style={BoardWrapper.container}>
				<GameName gameName='Tic Tac Toe' />
				<View style={RowWrapper.container}>
					<Tile props={board[0]} />
					<Tile props={board[1]} />
					<Tile props={board[2]} />
				</View>
				<View style={RowWrapper.container}>
					<Tile props={board[3]} />
					<Tile props={board[4]} />
					<Tile props={board[5]} />
				</View>
				<View style={RowWrapper.container}>
					<Tile props={board[6]} />
					<Tile props={board[7]} />
					<Tile props={board[8]} />
				</View>
				<TouchableButton buttonName={`Restart Game`} clickEvent={resetGame} />
			</View>
		</View>
	)
}
export default Board
