import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigation from './navigation';
import React from "react";
import { useFonts } from 'expo-font';
export default function App() {

  const [loaded] = useFonts({
    SyneMono: require('./assets/fonts/SyneMono.ttf'),
    SansitaSwashed:require('./assets/fonts/SansitaSwashed.ttf'),
    LeagueSpartan:require('./assets/fonts/LeagueSpartan.ttf'),
    NotoItalic:require('./assets/fonts/NotoItalic.ttf'),
    // NotoVeriable:require('./assets/fonts/NotoVariable.ttf'),
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
