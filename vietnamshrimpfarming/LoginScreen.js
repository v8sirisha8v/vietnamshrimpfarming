import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Image, TextInput, View, ScrollView } from 'react-native';
import { FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons'; // Import colorful icons
import axios from 'axios';

function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [activeButton, setActiveButton] = useState('login'); // Set the initial active button to 'login'
  const [fname, setFname] = useState('');
  const [fnameVerify, setFnameVerify] = useState(false);
  const [lname, setLname] = useState('');
  const [lnameVerify, setLnameVerify] = useState(false);
  const [mobile, setMobile] = useState('');
  const [mobileVerify, setMobileVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit() {
    const userData = {
      fname: fname,
      lname: lname,
      mobile: mobile,
      password: password
    };

    axios.post('http://10.0.0.155:3001/register', userData)
      .then(res => console.log(res.data))
      .catch(e => console.log(e));
  }

  function handlefName(e) {
    const fnameVar = e.nativeEvent.text;
    setFname(fnameVar);
    setFnameVerify(false);

    if (fnameVar.length > 1) {
      setFnameVerify(true);
    }
  }

  function handlelName(e) {
    const lnameVar = e.nativeEvent.text;
    setLname(lnameVar);
    setLnameVerify(false);

    if (lnameVar.length > 1) {
      setLnameVerify(true);
    }
  }

  function handleMobile(mobileVar) {
    setMobile(mobileVar);
    setMobileVerify(false);

    if (true) {
      setMobile(mobileVar);
      setMobileVerify(true);
    }
  }

  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false);

    if (true) {
      setPassword(passwordVar);
      setPasswordVerify(true);
    }
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
          {activeButton === 'login' && (
            <>
              <TextInput
                style={styles.input}
                placeholder="PhoneNumber"
                placeholderTextColor="#CCCCCC"
                onChangeText={setPhoneNumber}
                value={phoneNumber}
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
            </>
          )}

          {activeButton === 'signup' && (
            <>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="#CCCCCC"
                onChangeText={setPhoneNumber}
                value={phoneNumber}
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
                onChange={handlefName}
                value={fname}
              />

              <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor="#CCCCCC"
                onChangeText={setLname}
                value={lname}
              />
              <View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </>
          )}

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

  tiny: {
    color: 'white',
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center', // Center horizontally
    marginBottom: 20, // Add margin at the bottom
  },

  dividerText: {
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

  images: {
    width: 150, // Set the width of the image
    height: 150, // Set the height of the image
    resizeMode: 'contain', // Maintain aspect ratio and fit within the container
    marginBottom: 20,
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
    backgroundColor: '#8B0000', // Light red color
  },
});


export default LoginScreen;
