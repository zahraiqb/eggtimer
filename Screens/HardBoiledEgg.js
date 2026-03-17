import React, {useState, useEffect }from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable, ImageBackground} from 'react-native';

export default function HardBoiledEgg({ navigation }) {
  const [timeLeft, setTimeLeft] = useState(300);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime -1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      alert('Your egg is ready!');
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    setIsRunning(true);
  };

  return (
    <ImageBackground
    source={require('../assets/background.png')}
    style={styles.background}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Hard Boiled Egg</Text>
      <Image source={require('../assets/egg2.png')} style={styles.image} />
      <Text style={styles.description}>a hard egg for a hard person</Text>
      <Text style={styles.timer}>{Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</Text>
     <Pressable style={styles.button} onPress={startTimer}>
      <Text style={styles.buttonText}> Start Timer</Text>
      </Pressable>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8BD',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#D2B48C',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: '#E07A5F',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});
