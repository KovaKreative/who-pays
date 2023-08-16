import { StyleSheet, Text, View } from 'react-native';
// import StateContext from './src/context';

import App from './App';
import Toast from 'react-native-toast-message';

import * as Font from 'expo-font';
import { useEffect, useState } from 'react';


export default function Root() {

  const [fontsLoaded, setState] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'OlivessansPimiento': require('./src/fonts/OlivessansPimiento.ttf')
    });
    setState(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

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
