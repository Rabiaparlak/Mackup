import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigation from './navigation';
import React from "react";
import { useFonts } from 'expo-font';
export default function App() {

  const [loaded] = useFonts({
    SyneMono: require('./assets/fonts/SyneMono.ttf'),
  });

  if (!loaded) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
