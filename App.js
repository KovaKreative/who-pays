import { ScrollView, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Home from './src/components/Home';
import Loser from './src/components/Loser';

export default function App() {

  const [state, setState] = useState({ view: 0, names: [], loser: '' });

  const addName = function(name) {
    setState(prev => {
      return { ...prev, names: [...prev.names, name] };
    });
  };

  const removeName = function(index) {
    const namesBuffer = [...state.names];
    namesBuffer.splice(index, 1);
    setState(prev => {
      return { ...prev, names: [...namesBuffer] };
    });
  };

  const decide = function() {
    const numberOfNames = state.names.length;

    if(numberOfNames < 2) {
      return alert("Not enough names!");
    }

    const loserIndex = Math.floor(Math.random() * numberOfNames);
    setState(prev => {
      return { ...prev, loser: state.names[loserIndex] };
    });
  };

  useEffect(() => {
    if (state.loser) {
      setState(prev => {
        return { ...prev, view: 1 };
      });
    }
  }, [state.loser]);

  return (
    <ScrollView style={styles.fullView}>
      <View style={styles.container}>
        {!state.view ? <Home
          names={state.names}
          removeName={removeName}
          addName={addName}
          decide={decide} /> : <Loser loser={state.loser} />}
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
