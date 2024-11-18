import React from 'react';
import { Dimensions, TouchableOpacity, SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { TabView, SceneMap } from 'react-native-tab-view';

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'pH', title: 'pH' },
        { key: 'oxygen', title: 'Dissolved Oxygen' },
        { key: 'orp', title: 'ORP' }
      ]
    };
  }

  chartConfig = {
    backgroundColor: "#000",
    backgroundGradientFrom: "#000",
    backgroundGradientTo: "#000",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffffff"
    },
    propsForBackgroundLines: {
      strokeDasharray: ""
    },
    fillShadowGradient: "#ff4040",
    fillShadowGradientOpacity: 1
  };

  generateHourlyLabels = () => {
    const hours = [];
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
      const date = new Date(now);
      date.setHours(now.getHours() - i);
      let hours12 = date.getHours() % 12 || 12;
      let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
      hours.push(`${hours12}:00 ${ampm}`);
    }
    return hours;
  };

  data = [
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

  renderChart = (chartData) => (
    <View style={styles.chartContainer}>
      <View style={styles.chartHeader}>
        <Text style={styles.chartTitle}>{chartData.title}</Text>
        <Text style={styles.chartValue}>Latest: {chartData.data[chartData.data.length - 1].toFixed(2)}</Text>
      </View>
      <LineChart
        data={{
          labels: this.generateHourlyLabels(),
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
        chartConfig={this.chartConfig}
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
  scenes = {
    pH: () => this.renderChart(this.data[0]),
    oxygen: () => this.renderChart(this.data[1]),
    orp: () => this.renderChart(this.data[2])
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Dashboard</Text>
        </View>
        
        {/* TabView to swipe through charts */}
        <TabView
          navigationState={{ index: this.state.index, routes: this.state.routes }}
          renderScene={SceneMap(this.scenes)}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
          style={{ flex: 1 }}
        />

        <this.Footer navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }

  Footer = ({ navigation }) => (
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
}

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
