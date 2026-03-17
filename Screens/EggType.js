import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity, ImageBackground, Pressable } from 'react-native';


const eggs = [
  {id: '1', name: 'Soft Boiled Egg', description: 'A perfectly runny egg', image:require('../assets/egg1.png'), },
  {id: '2', name: 'Hard Boiled Egg', description: 'Firm and delicious', image:require('../assets/egg2.png') },
  {id: '3', name: 'Sunny Side Up', description: 'The oozing yolk is a sight for sore eyes!', image:require('../assets/egg3.png') },
  {id: '4', name: 'Poached Egg', description: 'Tender and delicate, handle with care..', image:require('../assets/egg4.png') },
  {id: '5', name: 'Medium Boiled', description: 'The perfect balance for those who are indecisive!', image:require('../assets/egg5.png') },
  {id: '6', name: 'Fried Egg', description: 'Crunchy exterior, soft interior', image:require('../assets/egg6.png') }, 
  {id: '7', name: 'Over-easy', description: 'Bite into a perfectly runny yolk', image:require('../assets/egg7.png') },
  {id: '8', name: 'Scrambled', description: 'Fluffy and Light, clouds for breakfast anyone?', image:require('../assets/egg8.png') },
];


export default function EggType({ navigation }) {

  const renderEgg = ({ item }) => (
    <TouchableOpacity 
      style={styles.eggCard}
      onPress={() => {
        if (item.name === 'Soft Boiled Egg') {
          navigation.navigate('SoftBoiledEgg');
        }
      }}
    >
      <Image source={item.image} style={styles.eggImage} />
      <Text style={styles.eggName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          What type of egg are you making today?
        </Text>

        <FlatList
          data={eggs}
          renderItem={renderEgg}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.list}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8BD',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#D2B48C',
  },
  list: {
    justifyContent: 'center',
  },
  eggCard: { 
    flex: 1,
    margin: 8,
    backgroundColor: '#FFF8BD',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  eggImage: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
  eggName: {
    fontSize: 16,
    marginTop: 6,
    color: '#D2B48C',
    textAlign: 'center'
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});