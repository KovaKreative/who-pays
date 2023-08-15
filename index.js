import { StyleSheet, Text, View } from 'react-native';
// import StateContext from './src/context';

import App from './App';

export default function Root() {

  return (
    <App />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLight: {
    color: '#FED'
  }
});
