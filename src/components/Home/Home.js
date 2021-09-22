import React from 'react';
import type { Node } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  useColorScheme,
  View,
  FlatList,
  Image,
} from 'react-native';

//style
import style from './Home.styles'


const Home: () => Node = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={style.flatList_item}>
        <Image
          style={style.flatList_item_image}
          source={{ uri: item.imgURL }}
        />

        <Text style={style.flatList_item_title}>{item.title}</Text>
        <Text style={style.flatList_item_price}>{item.price}</Text>
        {!item.inStock&&
        <Text style={style.flatList_item_no_stok}>STOKTA YOK!</Text>
        }
      </View>
    )
  };

  const keyExtractor = (item) => `${item.id}`;

  return (
    <View style={style.container}>
      <View style={style.searchBar_content}>
        <TextInput style={style.searchBar} placeholder="Ara..." ></TextInput>
      </View>

      <FlatList
        style={style.flatList_content}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        numColumns="2"
      />
    </View>

  );
};

export default Home;
