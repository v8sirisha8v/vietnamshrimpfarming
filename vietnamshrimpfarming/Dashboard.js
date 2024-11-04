import React from 'react';
import { Dimensions, TouchableOpacity, SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import { FontAwesome, AntDesign, MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { TabView, SceneMap } from 'react-native-tab-view';

const DashboardScreen = ({ navigation }) => {

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
        <TouchableOpacity style={styles.iconContainer}>
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

  const data = [
    {
      title: "pH",
      data: Array.from({ length: 6 }, () => Math.random() * 14)
    },
    {
      title: "Dissolved Oxygen",
      data: Array.from({ length: 6 }, () => Math.random() * 10)
    },
    {
      title: "ORP",
      data: Array.from({ length: 6 }, () => Math.random() * 100)
    }
  ];

const renderChart = (chartData) => (
    <View style={styles.chartContainer}>
      <View style={styles.chartHeader}>
        <Text style={styles.chartTitle}>{chartData.title}</Text>
        <Text style={styles.chartValue}>Latest: {chartData.data[chartData.data.length - 1].toFixed(2)}</Text>
      </View>
      <LineChart
        data={{
          labels: generateHourlyLabels(),
          datasets: [
            {
              data: chartData.data,
              color: (opacity = 1) => `rgba(255, 64, 64, ${opacity})`,
              strokeWidth: 2
            }
          ]
        }}
        width={Dimensions.get("window").width}
        height={220}
        yAxisInterval={1}
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          marginHorizontal: 20,
          borderRadius: 16
        }}
      />
    </View>
  );

  // Mapping data to individual scenes for the TabView
  const scenes = {
    pH: () => renderChart(data[0]),
    oxygen: () => renderChart(data[1]),
    orp: () => renderChart(data[2])
  };

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'pH', title: 'pH' },
    { key: 'oxygen', title: 'Dissolved Oxygen' },
    { key: 'orp', title: 'ORP' }
  ]);
 
return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Dashboard</Text>
      </View>
      
      {/* TabView to swipe through charts */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap(scenes)}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={{ flex: 1 }}
      />

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
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
});

export default DashboardScreen;
