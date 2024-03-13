import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Image, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function SignUp({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        if(username === '' || password === ''){
            alert("All fields are required");
            return;
        }
        navigation.navigate('Dashboard');
    }
    return(
    
    <SafeAreaView style={styles.container}>
      <Image 
        source={require("./assets/homepage.png")} 
        resizeMode="cover"
        style={{ width: '100%', height: '50%' }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#CCCCCC"
          onChangeText={setUsername}
          value={username}
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#CCCCCC"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}> Sign Up</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>  

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    inputContainer: {
      paddingHorizontal: 40,
    },
    input: {
      height: 50,
      backgroundColor: '#333333',
      borderWidth: 1,
      borderColor: '#666666',
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 10,
      color: 'white',
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
    buttonText: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
    }
  });

export default SignUp;