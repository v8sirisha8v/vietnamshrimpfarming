import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from './FirebaseConfig';

const Verification = ({ route, navigation }) => {
  const { verificationId } = route.params;
  const [verificationCode, setVerificationCode] = useState('');

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );
    firebase.auth().signInWithCredential(credential)
      .then(() => {
        setVerificationCode('');
        Alert.alert('Success', 'Phone authentication successful. Welcome to dashboard.');
        navigation.navigate('Dashboard');
      })
      .catch(error => {
        console.error('Error verifying code:', error);
        Alert.alert('Error', 'Failed to verify code. Please try again.');
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.center}>
        <Image style={styles.images} source={require("./assets/shrimp.png")} />
      </View>
      <Text style={styles.otpText}>
        Verify your code.
      </Text>
      <Text style={styles.tiny}>
        Check your messages for the code. If not, go back and hit send.
      </Text>
      <View>
        <TextInput
          value={verificationCode}
          onChangeText={setVerificationCode}
          placeholderTextColor="#FFFFFF"
          keyboardType="numeric"
          style={styles.verificationCode}
        />
      </View>
      <TouchableOpacity style={styles.sendVerification} onPress={confirmCode}>
        <Text style={styles.buttonText}>
          Verify Code
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  images: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 10,
  },
  verificationCode: {
    color: '#FFF',
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    padding: 10,
    width: 130,
  },
  tiny: {
    fontSize: 15,
    color: '#FFF',
    marginVertical: 5,
    textAlign: 'center',
  },
  sendVerification: {
    marginTop: 50,
    padding: 20,
    backgroundColor: '#FF4040',
    borderRadius: 10,
    width: '90%',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  otpText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
    textAlign: 'center',
  },
});

export default Verification;
