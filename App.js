import { ScrollView, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Home from './src/components/Home';
import Loser from './src/components/Loser';

export default function App() {

  const [state, setState] = useState({ view: 0, names: [], loser: '' });

  const removeName = function(index) {
    const namesBuffer = [...state.names];
    namesBuffer.splice(index, 1);
    setState(prev => {
      return { ...prev, names: [...namesBuffer] };
    });
  };

  return (
    <ScrollView style={styles.fullView}>
      <View style={styles.container}>
        {!state.view ? <Home names={state.names} removeName={removeName} onSubmit={name => {
          setState(prev => {
            return { ...prev, names: [...prev.names, name] };
          });
        }} /> : <Loser loser={state.loser} />}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fullView: {
    backgroundColor: '#123',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80
  }
});
