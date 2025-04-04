import React from 'react';
import {TouchableOpacity, View, StyleSheet } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';


const Footer = ({ navigation }) => {

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
  text: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 700,
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
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  chartTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  chartValue: {
    color: 'white',
    fontSize: 16,
  },
  headerText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 700,
  },
});

export default Footer;