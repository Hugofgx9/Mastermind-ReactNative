import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MasterMindComponent from '@components/MasterMindComponent';
import Converter from '@components/Converter';

const App = () => {
  return (
    <View style={styles.container}>
      <MasterMindComponent/>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#1C1C1C',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
