import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image,Button, ScrollView, SafeAreaView, Alert } from 'react-native';

function WelcomeScreen(props){
  return(
    <SafeAreaView style={styles.container}>
      <Image 
      source={require("./assets/homepage.png")} 
      resizeMode="cover"
      style ={{width: '100%', height: '50%'}}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Đăng nhập / Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Đăng ký / Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  button: {
    marginHorizontal: 40,
    marginVertical: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF474C',
    borderWidth: 3,
    borderRadius: 50,
  },

  buttonText:{
    fontSize: 18,
    color: 'white',
    textAlign: 'center',

  }
});

export default WelcomeScreen;

