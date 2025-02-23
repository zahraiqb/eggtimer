import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
    source={require('../assets/background.png')}
    style={styles.background}
    >
    
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my Egg Timer app!</Text>

      <Button
      title="Let's Get Cracking!"
      onPress={() => navigation.navigate('EggType')}
      />

    </View>
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
  }
  

});