import React from 'react';
import { Dimensions, TouchableOpacity, SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import { FontAwesome, AntDesign, MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import useFirebaseData from './useFirebaseData';
import { database } from './FirebaseConfig';

const DashboardScreen = ({ navigation }) => {

  const allData = useFirebaseData("/IMU_LSM6DS3");


  const Footer = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconContainer}>
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

  const chartConfig = {
    backgroundColor: "#000", // Black background
    backgroundGradientFrom: "#000", // Black gradient start
    backgroundGradientTo: "#000", // Black gradient end
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White color for labels and axes
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White color for labels
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffffff"
    },
    propsForBackgroundLines: {
      strokeDasharray: "" // Removes background lines
    },
    fillShadowGradient: "#ff4040", // Red fill for the area under the line
    fillShadowGradientOpacity: 1 // Fully opaque fill
  };

  const generateHourlyLabels = () => {
    const hours = [];
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
      const date = new Date(now);
      date.setHours(now.getHours() - i);
      let hours12 = date.getHours() % 12 || 12; // convert to 12-hour format
      let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
      hours.push(`${hours12}:00 ${ampm}`);
    }
    return hours;
  };


  const get_pHArray = () => {
    let pHValues = []
    for (const key in allData) {
      pHValues.push(`${allData[key].pHValue}`)
      console.log
    };
    return pHValues;
  }
  const get_rawValueArray = () => {
    let rawValues = []
    for (const key in allData) {
      rawValues.push(`${allData[key].rawValue}`)
    };
    return rawValues;
  }
  const get_voltageArray = () => {
    let voltages = []
    for (const key in allData) {
      voltages.push(`${allData[key].voltage}`)
    };
    return voltages;
  }

  const data = [
    {
      title: "pH",
      data: get_pHArray(),
    },
    {
      title: "Dissolved Oxygen",
      data: get_rawValueArray(),
    },
    {
      title: "ORP",
      data: get_voltageArray(),
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Dashboard</Text>
        </View>
        {data.map((item, index) => (
          <View key={index}>
            <View style={styles.chartHeader}>
              <Text style={styles.chartTitle}>{item.title}</Text>
              <Text style={styles.chartValue}>Latest: {item.data[item.data.length - 1]}</Text>
            </View>
            <LineChart
              data={{
                labels: generateHourlyLabels(),
                datasets: [
                  {
                    data: item.data.slice(-6),
                    color: (opacity = 1) => `rgba(255, 64, 64, ${opacity})`, // Red color for the line
                    strokeWidth: 2, // Optional
                  }
                ]
              }}
              width={Dimensions.get("window").width} // from react-native
              height={220}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={chartConfig}
              bezier
              style={{
                marginVertical: 8,
                marginHorizontal: 20,
                borderRadius: 16,
                paddingBottom: 10
              }}
            />
          </View>
        ))}
      </ScrollView>
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

export default DashboardScreen;