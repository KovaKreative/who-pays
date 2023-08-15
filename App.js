import { ScrollView, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Home from './src/components/Home';
import Loser from './src/components/Loser';

export default function App() {

  const [state, setState] = useState({ view: 0, names: [], loser: '' });

  return (
    <ScrollView>
      <View style={styles.container}>
        {!state.view ? <Home names={state.names} /> : <Loser loser={state.loser} />}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
