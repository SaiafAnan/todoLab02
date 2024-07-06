import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    padding: 20,
    backgroundColor: '#F5F5F5' 
  },
  label: {
    color: '#333', 
    marginBottom: 5 
  },
  textbox: {
    backgroundColor: '#FFFFFF', 
    borderWidth: 1,
    borderColor: '#CDDC39', 
    paddingVertical: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderRadius: 4,
    marginBottom: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2
  },
  switch: {
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
    label: {
      color: '#777', // Subtle color change
      fontSize: 16,
      marginRight: 10
    }
  },
  errorMessage: {
    container: {
      backgroundColor: '#FFE0E0', // Soft red background for attention
      padding: 10,
      marginBottom: 20,
      borderColor: '#FFCDD2', // Softer border color
      borderWidth: 1,
      borderLeftWidth: 5, // Emphasized left border
      borderRadius: 4 // Rounded corners
    },
    label: {
      color: '#D32F2F', // Darker red for the label
      fontSize: 14,
      fontWeight: 'bold'
    },
    text: {
      color: '#D32F2F', // Consistent color for the text
      fontSize: 16
    }
  }
});

export default styles;
