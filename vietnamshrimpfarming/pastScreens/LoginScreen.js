import React, { useState } from 'react'; 
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Image, TextInput, View, ScrollView } from 'react-native';
import { FontAwesome, AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons'; // Import Entypo
import PhoneInput from 'react-native-phone-number-input';
import axios from 'axios';

function LoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneStartedTyping, setPhoneStartedTyping] = useState(false);
  const [phoneVerify, setPhoneVerify] = useState(false);
  const [activeButton, setActiveButton] = useState('login');
  const [fname, setFname] = useState('');
  const [fnameVerify, setFnameVerify] = useState(false);
  const [fnameStartedTyping, setFnameStartedTyping] = useState(false);
  const [lname, setLname] = useState('');
  const [lnameVerify, setLnameVerify] = useState(false);
  const [lnameStartedTyping, setLnameStartedTyping] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // State to manage password visibility

  function handleSubmit() {
    const userData = {
      fname: fname,
      lname: lname,
      mobile: phoneNumber,
      password: password
    };

    axios.post('https://8da4-2601-644-8e7f-cae0-5cb8-9747-ad2a-565d.ngrok-free.app/register', userData)
    .then(res => console.log(res.data))
    .catch(error => {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.log('Response error:', error.response.data);
      } else if (error.request) {
        // Request was made but no response was received
        console.log('Request error:', error.request);
      } else {
        // Something happened in setting up the request
        console.log('Axios error:', error.message);
      }
    });
  }

  function handlefName(text) {
    setFname(text);
    setFnameStartedTyping(true);
    setFnameVerify(text.length > 0 ? true : false);
  }

  function handlelName(text) {
    setLname(text);
    setLnameStartedTyping(true);
    setLnameVerify(text.length > 0 ? true : false);
  }

  function handlePhoneNumber(text) {
    setPhoneNumber(text);
    setPhoneStartedTyping(true);
    setPhoneVerify(text.length === 10);
  }

  function handlePassword(text) {
    setPassword(text);
    setPasswordVerify(validatePassword(text));
  }

  function validatePassword(password) {
    // Validate password requirements
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 12;
    return hasUpperCase && hasLowerCase && hasMinLength;
  }

  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.center}>
          <Image style={styles.images} source={require("./assets/shrimp.png")} />
        </View>
        <View style={styles.dividerText}>
          <TouchableOpacity onPress={() => setActiveButton('login')} style={styles.buttonText}>
            <Text style={[styles.text, activeButton === 'login' && styles.activeText]}>Đăng Nhập / Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveButton('signup')} style={styles.buttonText}>
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
              <View style={styles.phoneInputWrapper}>
                <PhoneInput
                  defaultCode="VN"
                  layout="first"
                  placeholder="Phone Number"
                  placeholderTextColor="#CCCCCC"
                  onChangeText={handlePhoneNumber}
                  value={phoneNumber}
                  containerStyle={styles.phoneInputContainer}
                  textContainerStyle={styles.phoneInputTextContainer}
                  textInputStyle={styles.phoneInputText}
                  codeTextStyle={styles.phoneInputText}
                  flagButtonStyle={styles.flagButton}
                />
                {phoneStartedTyping && (
                  phoneVerify ? (
                    <AntDesign name="checksquare" size={24} color="#3DED97" style={styles.validationIcon} />
                  ) : (
                    <AntDesign name="closesquare" size={24} color="#FF0000" style={styles.validationIcon} />
                  )
                )}
              </View>
              <View>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#CCCCCC"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={!passwordVisible} // Hide password if not visible
              />
              <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                <Entypo name={passwordVisible ? "eye" : "eye-with-line"} size={24} color="gray" />
              </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          {activeButton === 'signup' && (
            <>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.inputWithIcon}
                  placeholder="First Name"
                  placeholderTextColor="#CCCCCC"
                  onChangeText={handlefName}
                  value={fname}
                />
                {fnameStartedTyping && (
                  fnameVerify ? (
                    <AntDesign name="checksquare" size={24} color="#3DED97" style={styles.validationIcon} />
                  ) : (
                    <AntDesign name="closesquare" size={24} color="#FF0000" style={styles.validationIcon} />
                  )
                )}
              </View>
              {!fnameVerify && fnameStartedTyping && (
                <Text style={styles.errorText}>First name should be more than 1 character.</Text>
              )}

              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.inputWithIcon}
                  placeholder="Last Name"
                  placeholderTextColor="#CCCCCC"
                  onChangeText={handlelName}
                  value={lname}
                />
                {lnameStartedTyping && (
                  lnameVerify ? (
                    <AntDesign name="checksquare" size={24} color="#3DED97" style={styles.validationIcon} />
                  ) : (
                    <AntDesign name="closesquare" size={24} color="#FF0000" style={styles.validationIcon} />
                    )
                    )}
                  </View>
                  {!lnameVerify && lnameStartedTyping && (
                    <Text style={styles.errorText}>Last name should be more than 1 character.</Text>
                  )}
                  <View style={styles.phoneInputWrapper}>
                    <PhoneInput
                      defaultCode="VN"
                      layout="first"
                      placeholder="Phone Number"
                      placeholderTextColor="#CCCCCC"
                      onChangeText={handlePhoneNumber}
                      value={phoneNumber}
                      containerStyle={styles.phoneInputContainer}
                      textContainerStyle={styles.phoneInputTextContainer}
                      textInputStyle={styles.phoneInputText}
                      codeTextStyle={styles.phoneInputText}
                      flagButtonStyle={styles.flagButton}
                    />
                    {phoneStartedTyping && (
                      phoneVerify ? (
                        <AntDesign name="checksquare" size={24} color="#3DED97" style={styles.validationIcon} />
                      ) : (
                        <AntDesign name="closesquare" size={24} color="#FF0000" style={styles.validationIcon} />
                      )
                    )}
                  </View>
                  {phoneStartedTyping && !phoneVerify && (
                    <Text style={styles.errorText}>Phone number should be 10 digits</Text>
                  )}
                  <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#CCCCCC"
                    onChangeText={handlePassword}
                    value={password}
                    secureTextEntry={!passwordVisible} // Hide password if not visible
                  />
                  <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                    <Entypo name={passwordVisible ? "eye" : "eye-with-line"} size={24} color="gray" />
                  </TouchableOpacity>
                  {password && (
                      passwordVerify ? (
                        <AntDesign name="checksquare" size={24} color="#3DED97" style={styles.validationIcon} />
                      ) : (
                        <AntDesign name="closesquare" size={24} color="#FF0000" style={styles.validationIcon} />
                      )
                    )}
                  </View>
                  {!passwordVerify && password && (
                    <Text style={styles.errorText}>Password should have minimum 12 characters, one uppercase, and one lowercase.</Text>
                  )}
    
                  <View>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                      <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
    
              <View style={styles.center}>
                <Text style={styles.tiny}>or</Text>
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
        marginTop: 10,
      },
      center: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      dividerText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      dividor: {
        flexDirection: 'row',
        margin: 10,
        height: 2,
      },
      dividerHalf: {
        flex: 1,
        height: '100%',
      },
      errorText: {
        color: 'red',
        marginBottom: 10,
      },
      images: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
      },
      text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'red',
      },
      activeText: {
        color: 'white',
      },
      scrollContainer: {
        flexGrow: 1,
      },
      inputContainer: {
        paddingTop: 35,
        paddingHorizontal: 40,
      },
      inputWrapper: {
        position: 'relative',
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
      inputWithIcon: {
        height: 50,
        backgroundColor: '#333333',
        borderWidth: 1,
        borderColor: '#666666',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingRight: 45,
        marginBottom: 10,
        color: 'white',
      },
      validationIcon: {
        position: 'absolute',
        right: 20,
        top: 12,
      },

      phoneInputWrapper: {
        position: 'relative',
        backgroundColor: '#333333',
        borderWidth: 1,
        borderColor: '#666666',
        borderRadius: 10,
        marginBottom: 10,
      },
      phoneInputContainer: {
        backgroundColor: 'transparent',
        borderRadius: 10,
      },
      phoneInputTextContainer: {
        backgroundColor: 'transparent',
        borderRadius: 10,
      },
      phoneInputText: {
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
        backgroundColor: 'white',
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
        backgroundColor: '#FF6666',
      },
      lightRedBorder: {
        backgroundColor: '#8B0000',
      },
      flagButton: {
        backgroundColor: 'transparent',
      },
      eyeIcon: {
        position: 'absolute',
        right: 55,
        top: 15,
      },
    });
    
    export default LoginScreen;

