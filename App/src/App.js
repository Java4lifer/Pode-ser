import React from 'react';
import style from "./style.js"
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import First from "./components/worknt/component1.js"
import Rap from './components/worknt/Rap.js';
import Title from './components/worknt/Title.js';
import Cirno from "./components/Cirno.js"
import Random from './components/Random.js';
import Buttone from './components/Button.js';
import Pai from "./components/direct/Pai.js"
//import First, {func1, func2}

export default function App() {
  return (
    <View style={styles.app}>
      <Pai/>
      <Text>Be racist.</Text>
      <Random min={1} max={60}/>
      <Buttone/>
      <Cirno/>
      {/* <Title principal="Be racist" secundario="Have numbers:"/> */}
      {/* <Rap min={0} max={60}/> */}
      {/* <First style={styles.container}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  
  app: {
    justifyContent: "center",
    flexGrow: 1,
    alignItems: "center"
  },
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//cd App; npm expo start --tunnel