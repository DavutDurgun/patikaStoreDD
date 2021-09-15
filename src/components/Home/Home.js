import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import homeStyle from '../../assets/styles/home';

const Home: () => Node = () => {
  return (
    <SafeAreaView style={homeStyle.container}>
      <View>
        <TextInput style={{borderColor:'blue', borderStyle:"solid",borderWidth:1}}></TextInput>
      </View>
      <View>
        <Text style={homeStyle.kutu1}>kutu1</Text>
      </View>

    </SafeAreaView>
  );
};

export default Home;
