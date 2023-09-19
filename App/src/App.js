import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import style from "./style.js"
import Cirno from "./components/Cirno.js"
import First from "./components/component1.js"
//import First, {func1, func2}

export default function App() {
  return (
    <View style={styles.app}>
      <Text>Be racist.</Text>
      <Cirno/>
      <First style={styles.container}/>
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