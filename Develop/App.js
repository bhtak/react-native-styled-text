import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import StyledText from './dist';

const App = () => {
  const list = [
    {text: "<color:'red'>a brown fox</color> jumps over the lazy dog"},
    {
      text: "<color:'magenta'>a brown fox</color> jumps over the <color:'blue'>lazy dog</color>",
    },
    {
      text: "<color:'#1234'>a brown fox</color> jumps over the <color:'blue'>lazy dog</color>",
    },
    {
      text: "<style:'first'>a brown fox</style> jumps over the <style:'second'>lazy dog</style>",
      style: {
        first: {
          fontSize: 10,
          color: 'red',
        },
        second: {
          fontSize: 20,
          color: 'blue',
        },
      },
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      {list.map((t, idx) => (
        <StyledText key={idx} text={t.text} textStyle={t.style} />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
