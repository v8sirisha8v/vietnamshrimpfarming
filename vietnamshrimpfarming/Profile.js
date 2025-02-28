import React, { useEffect, useState } from 'react';
import { Dimensions, TouchableOpacity, SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import { FontAwesome, AntDesign, MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { auth, database } from './FirebaseConfig';


const Profile = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    useEffect(() => {
      const user = auth.currentUser;
      if (user) {
        setPhoneNumber(user.phoneNumber || 'No Phone Number Available')
      }
    }, [])

    const Footer = () => {
        return (
          <View style={styles.footer}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Dashboard')}>
              <AntDesign name="home" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('RegisterPond')}>
              <AntDesign name="pluscircleo" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Ionicons name="notifications-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Profile')}>
              <Ionicons name="person-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        );
      };

    //   const user = auth().currentUser;

      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Profile</Text>
          </View>
          <View style={styles.personalInfoContainer}>
            <Text style={styles.subheaderText}>Personal Info:</Text>
            <Text style={styles.smallText}>Phone Number</Text>
            <Text style={styles.subheaderText}> {phoneNumber} </Text>
          </View>
          <Footer navigation={navigation} />
        </SafeAreaView>
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 700,
  },
  subheaderText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 600,
  },
  smallText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 400,
    paddingVertical: 10,
    textDecorationLine: 'underline',
  },
  text: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 400,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 75,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'black',
  },
  personalInfoContainer: {
    paddingLeft: 30, // Adjust as needed
  },
});

export default Profile;