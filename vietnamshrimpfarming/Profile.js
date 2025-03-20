import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { getDatabase, ref, get } from "firebase/database";
import { auth } from './FirebaseConfig';
import Footer from './Footer';


const Profile = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    phoneNumber: 'No Phone Number Available',
    email: 'No Email Available',
    displayName: 'User',
  });

  useEffect(() => {
    console
      const unsubscribe = auth.onAuthStateChanged(async(user) => {
        console.log(auth.currentUser.uid)
        if (user) {
          console.log("Logged-in User UID:", user.uid);
        } else {
          console.warn("Bro No user logged in.")
        }
      })

      return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <Image 
            source={require('./images/Portrait_Placeholder.png')} 
            style={styles.profileImage} 
          />
          <Text style={[styles.displayName, styles.textContainer]}>{userInfo.displayName}</Text>
          <Text style={styles.phone}>{auth.currentUser.phoneNumber}</Text>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212'},
  scrollContainer: { flexGrow: 1, justifyContent: 'center'},
  profileContainer: { alignItems: 'center', marginBottom: 200},
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  displayName: { color: '#FFF', fontSize: 22, fontWeight: 'bold' },
  email: { color: '#AAA', fontSize: 16 },
  phone: { color: '#AAA', fontSize: 16 },
  textContainer: {padding: 10},
});

export default Profile;
