import {StyleSheet} from 'react-native';

export const stylesCustomButtonDefault = StyleSheet.create({
  button: {
    width: '40%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export const stylesTermsAndConditions = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: 'gray',
  },
  text: {
    color: 'gray',
  },
});

export const stylesJoinNow = StyleSheet.create({
  button: {
    backgroundColor: 'gray',
  },
  text: {
    color: 'white',
  },
});
