import { StatusBar } from 'expo-status-bar';
import * as firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyCnQzjY60Fdy63y5q5D8ToOd-tYCHTwbv4",
  authDomain: "new-app-c9322.firebaseapp.com",
  projectId: "new-app-c9322",
  storageBucket: "new-app-c9322.appspot.com",
  messagingSenderId: "252097884000",
  appId: "1:252097884000:web:94eb963e97a4661852b805",
  measurementId: "G-7X70TP7DD7"
};

export default function App() {
  //return (
   // <View style={styles.container}>
   //   <Text>Başarılı</Text>
   //   <StatusBar style="auto" />
    //</View>
  //);
  return(<View/>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
