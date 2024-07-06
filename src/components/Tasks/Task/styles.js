// styles.js
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: '#E3F2FD', // Light blue background
    margin: 10,
    padding: 15,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#90CAF9', // Border color
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1976D2', // Dark blue for titles
  },
  text: {
    fontSize: 13,
    color: '#555', // Darker text for less emphasis
  },

  modal: {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.25)'
    },
    box: {
      backgroundColor: 'white',
      padding: 30,
      width: '70%',
      borderRadius: 15,
      elevation: 5,
      shadowOpacity: 0.25,
      shadowRadius: 4,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4
      }
    }
  },

  close: {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      top: -20,
      right: -15
    },
    text: {
      marginLeft: 5
    }
  },

  options: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 20 : 10
  },

  switch: {
    container: {
      alignItems: 'center'
    },
    label: {
      paddingTop: Platform.OS === 'ios' ? 10 : 0,
      fontSize: 12
    }
  },

  remove: {
    container: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      textAlign: 'center'
    },
    icon: {
      color: '#c00',
      alignSelf: 'center'
    },
    label: {
    paddingTop: 5,
    fontSize: 12,
    color: '#c00'
    }
  }
});

export default styles;