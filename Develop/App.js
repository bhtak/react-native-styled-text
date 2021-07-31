import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import LibraryName from './dist';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LibraryName />
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
