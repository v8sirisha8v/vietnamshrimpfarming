import React, { useRef, useState } from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from './FirebaseConfig';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import PhoneInput from 'react-native-phone-number-input';

const LoginScreen2 = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);
  const phoneInput = useRef(null);

  const sendVerification = async () => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneInput.current?.getNumberAfterPossiblyEliminatingZero().formattedNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      setPhoneNumber('');
      return verificationId;
    } catch (error) {
      console.error('Error sending verification code:', error);
      Alert.alert('Error', 'Failed to send verification code. Please try again.');
      return null;
    }
  };

  const handleSendVerification = async () => {
    const id = await sendVerification();
    if (id) {
      navigation.navigate('Verification', { verificationId: id });
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.center}>
        <Image style={styles.images} source={require("./assets/shrimp.png")} />
      </View>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Text style={styles.otpText}>
        Enter your phone number.
      </Text>
      <View style={styles.phoneInputWrapper}>
        <PhoneInput
          ref={phoneInput}
          defaultCode="US"
          layout="first"
          placeholder="Phone Number"
          placeholderTextColor="#FFFFFF"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          containerStyle={styles.phoneInputContainer}
          textContainerStyle={styles.phoneInputTextContainer}
          textInputStyle={styles.phoneInputText}
          codeTextStyle={styles.phoneInputText}
          flagButtonStyle={styles.flagButton}
        />
      </View>
      <TouchableOpacity style={styles.sendVerification} onPress={handleSendVerification}>
        <Text style={styles.buttonText}>
          Continue
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
  phoneInputWrapper: {
    backgroundColor: '#000000',
    borderWidth: 1,
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
  },
});

export default LoginScreen2;
