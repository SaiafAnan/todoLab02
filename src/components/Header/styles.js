//styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#E8F9FD', // Soft cyan background
    borderBottomColor: '#1E90FF', // Deep blue border
    borderBottomWidth: 2,
    paddingBottom: 5,
    paddingTop: 30,
    marginTop: 25,
    paddingHorizontal: 10,
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' // Subtle shadow for depth
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: '#1E90FF', // Matching the icon color
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginLeft: 10
  },
  author: {
    fontSize: 14,
    color: '#808080', // Subdued grey for less emphasis
  }
});

export default styles;