import React from 'react';
import { StyleSheet, Text, View, Pressable, ImageBackground, Image, Absolute } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
    source={require('../assets/background.png')}
    style={styles.background}
    >
    
    <Image
    source={require('../assets/egg3.png')}
    style={styles.image}
    />
      <Pressable
      style={({ pressed }) => [
        styles.crackButton,
        { backgroundColor: pressed ? '#644f0a' : '#eebf27' }
      ]}
      onPress={() => navigation.navigate('EggType')}>
      <Text style={styles.buttonText}> Lets Get Cracking!</Text>
      </Pressable>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  background: {
    flex: 1,  // Ensures the background image takes up the full screen
    resizeMode: 'cover',  // Ensures the image stretches properly
    justifyContent: 'center', 
    height: 900,
    width: 400

  },
  crackButton: {
    marginTop:350,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius:9,
    backgroundColor: '#F4BA1E',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 260,
    marginLeft: 70
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
image: {
  width: 300, // Adjust size as needed
  height: 200,
  position: 'absolute',
  top: '34%',
  marginBottom: 400,
  marginLeft: 50
}
});