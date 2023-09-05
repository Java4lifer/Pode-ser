import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import cirno from "../assets/Cirno_Fumo.webp"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Be racist.</Text>
      <Image
      source={cirno}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
