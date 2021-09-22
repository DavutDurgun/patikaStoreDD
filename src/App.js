import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './components/Home/Home';
import { data } from './productList.json'

const App: () => Node = () => {
  return (
    <SafeAreaView style={style.container}>
        <Home data={data} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
