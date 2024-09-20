import React, { useState } from 'react';
import { Switch, TextInput, TouchableOpacity, SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // Import Entypo

const DashboardScreen = ({ navigation }) => {
  const [pondName, setPondName] = useState('');
  const [pondCode, setPondCode] = useState('');
  const [pondLocation, setPondLocation] = useState('');
  const [showPH, setShowPH] = useState(true);
  const [showDO, setShowDO] = useState(true);
  const [showORP, setShowORP] = useState(true);

  const handleSubmit = () => {
    // Handle form submission logic here
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
            <Entypo name="cross" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.text}>Pond Registration</Text>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Name Your Pond"
              placeholderTextColor="#999"
              value={pondName}
              onChangeText={setPondName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter code</Text>
            <TextInput
              style={styles.input}
              placeholder="Code"
              placeholderTextColor="#999"
              value={pondCode}
              onChangeText={setPondCode}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Location</Text>
            <TextInput
              style={styles.input}
              placeholder="Choose location"
              placeholderTextColor="#999"
              value={pondLocation}
              onChangeText={setPondLocation}
            />
          </View>

          {/* Sliders for metrics */}
          <View style={styles.sliderContainer}>
            <Text style={styles.label}>Select Metrics</Text>
            <View style={styles.slider}>
              <Text style={styles.sliderText}>pH</Text>
              <Switch value={showPH} onValueChange={setShowPH} />
            </View>
            <View style={styles.slider}>
              <Text style={styles.sliderText}>Dissolved Oxygen</Text>
              <Switch value={showDO} onValueChange={setShowDO} />
            </View>
            <View style={styles.slider}>
              <Text style={styles.sliderText}>ORP</Text>
              <Switch value={showORP} onValueChange={setShowORP} />
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    flex: 1,
    alignItems: 'center',
    marginRight: 22,
  },
  text: {
    color: '#FFF',
    fontSize: 20,
  },
  iconContainer: {
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginHorizontal: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    color: '#FFF',
    marginBottom: 5,
    fontSize: 17,
  },
  input: {
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#18191A',
    color: '#FFF',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'rgba(255, 64, 64, 0.8)', // Semi-transparent red
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
  sliderContainer: {
    marginTop: 20,
  },
  slider: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sliderText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default DashboardScreen;
