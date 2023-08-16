import { StyleSheet, Text, View } from 'react-native';
// import StateContext from './src/context';

import App from './App';
import Toast from 'react-native-toast-message';

export default function Root() {

  return (
    <>
    <App />
    <Toast />
    </>
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
