import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  input: {
    borderBottomColor: 'green',
    borderBottomWidth: 2,
    backgroundColor: 'lightgray',
    flexGrow: 1,
    margin: 5
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
