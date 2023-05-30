import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import HomePage from './src/Home/HomePage';
import { styles } from './src/assets/Styles/styles'
import Routes from './src/router/route';

export default function App() {
  return (
    <Routes>
      <View style={styles.container}>
      </View>
    </Routes>
  );
}


