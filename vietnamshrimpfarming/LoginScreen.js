import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Image, TextInput, View, ScrollView } from 'react-native';
import { FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons'; // Import colorful icons

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,  setEmail] = useState('');
  const [fname,  setFname] = useState('');
  const [lname,  setLname] = useState('');
  const [activeButton, setActiveButton] = useState('login'); // Set the initial active button to 'login'

  const handleSubmit = async () => {
    if (username === '' || password === '') {
      alert("All fields are required");
      return;
    }
    navigation.navigate('Dashboard');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.center}>
          <Image style={styles.images}
            source={require("./assets/shrimp.png")}
          />
        </View>
        <View style={styles.dividerText}>
          <TouchableOpacity
            onPress={() => setActiveButton('login')}
            style={styles.buttonText}
          >
            <Text style={[styles.text, activeButton === 'login' && styles.activeText]}>Đăng Nhập / Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveButton('signup')}
            style={styles.buttonText}
          >
            <Text style={[styles.text, activeButton === 'signup' && styles.activeText]}>Đăng Ký / Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dividor}>
          <View style={[styles.dividerHalf, activeButton === 'login' ? styles.darkRedBorder : styles.lightRedBorder]} />
          <View style={[styles.dividerHalf, activeButton === 'signup' ? styles.darkRedBorder : styles.lightRedBorder]} />
        </View>
        
        <View style={styles.inputContainer}>
          {activeButton=='login' && ( 
            <>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#CCCCCC"
            onChangeText={setUsername}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#CCCCCC"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
          <View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          </>)}
          
          {activeButton=='signup' && ( 
            <>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#CCCCCC"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#CCCCCC"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#CCCCCC"
            onChangeText={setFname}
            value={fname}
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#CCCCCC"
            onChangeText={setLname}
            value={lname}
            secureTextEntry={true}
          />
          <View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          </>)}
          
          <View style={styles.center}>
          <Text style={styles.tiny}>
            or
          </Text>
          </View>
          {/* Sign in with Google button */}
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={24} color="#DB4437" />
            <Text style={styles.socialButtonText}>Sign in with Google</Text>
          </TouchableOpacity>
          {/* Sign in with Facebook button */}
          <View>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="facebook-square" size={24} color="#4267B2" />
            <Text style={styles.socialButtonText}>Sign in with Facebook</Text>
          </TouchableOpacity>
          {/* Sign in with Apple button */}
          <TouchableOpacity style={styles.socialButton}>
            <MaterialIcons name="apple" size={24} color="#000000" />
            <Text style={styles.socialButtonText}>Sign in with Apple</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  
  tiny:{
    color: 'white',
  },
  
  center:{
    justifyContent: 'center',
    alignContent: 'center',
  },
  
  dividerText:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  
  dividor: {
    flexDirection: 'row',
    margin: 10,
    height: 2, // Height of the divider
  },
  
  dividerHalf: {
    flex: 1,
    height: '100%',
  },
  
  center: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    margin: 20,
  },
  
  images: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    aspectRatio: 1,
    resizeMode: 'cover',
    marginBottom: 20,
    marginHorizontal: 30,
    borderColor: 'white',
  },
  
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'red', // Adding text color here
  },
  
  activeText: {
    color: 'white', // Active text color
  },
  
  scrollContainer: {
    flexGrow: 1, // Allow the content to grow vertically
  },
  
  inputContainer: {
    paddingTop: 35,
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
    marginTop: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF474C',
    borderWidth: 3,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Google blue color
    height: 50,
    marginBottom: 10,
    borderRadius: 30,
  },
  socialButtonText: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
  darkRedBorder: {
    backgroundColor: '#FF6666', // Dark red color
  },
  lightRedBorder: {
    backgroundColor:'#8B0000' , // Light red color
  },
});

export default LoginScreen;
