import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import homeStyle from '../../assets/styles/home';

const Home: () => Node = () => {
  return (
    <SafeAreaView style={homeStyle.container}>
      <View>
        <Text style={homeStyle.kutu1}>kutu1</Text>
      </View> 

    </SafeAreaView>
  );
};

export default Home;
