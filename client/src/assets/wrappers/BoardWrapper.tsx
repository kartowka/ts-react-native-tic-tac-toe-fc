import { StyleSheet, StatusBar } from 'react-native'
const BoardWrapper = StyleSheet.create({
  background: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
})

export default BoardWrapper
