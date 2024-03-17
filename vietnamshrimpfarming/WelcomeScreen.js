import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SOSAnimation = () => {
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -50,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
      { iterations: 3 } // Adjust the number of iterations as needed
    ).start(() => navigation.navigate('Login'));
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./assets/home.png')}
        style={[styles.image, { transform: [{ translateY: bounceAnim }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%', // Adjust width as needed
    height: '30%', // Adjust height as needed
  },
});

export default SOSAnimation;
