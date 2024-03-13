import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WaterParameterScreen = ({ navigation, route }) => {
  const { title, value } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const DashboardScreen = ({ navigation }) => {
  const [waterParameters, setWaterParameters] = useState({
    pH: 7.2,
    salinity: 20,
    temperature: 28,
    oxygenLevels: 6.5,
  });

  useEffect(() => {
    // Fetch data from API or database and update state
    // Example:
    // fetchWaterParameters().then(data => setWaterParameters(data));
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Dashboard</Text>
      </View>

      {/* Add water parameter buttons here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  header: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export { DashboardScreen, WaterParameterScreen };
