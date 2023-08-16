import { ScrollView, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Home from './src/components/Home';
import Loser from './src/components/Loser';
import Toast from 'react-native-toast-message';

export default function App() {

  const defaultState = { view: 0, names: [], loser: '' };

  const [state, setState] = useState(defaultState);

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

    if (numberOfNames < 2) {
      return Toast.show({ type: 'error', text1: "⛔ Not enough names!", position: 'bottom' });
    }

    let loserIndex = Math.floor(Math.random() * numberOfNames);

    if(state.loser) {
      while(state.names[loserIndex] === state.loser) {
        loserIndex = Math.floor(Math.random() * numberOfNames);
      }
    }

    setState(prev => {
      return { ...prev, loser: state.names[loserIndex] };
    });
  };

  const reset = function() {
    setState(defaultState);
  }

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
        {
          !state.view
            ?
            <Home
              names={state.names}
              removeName={removeName}
              addName={addName}
              decide={decide} />
            :
            <Loser
              loser={state.loser} 
              tryAgain={decide}
              startOver={reset}
              />
        }
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
