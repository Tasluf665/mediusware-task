import React, { useState } from 'react';
import { StyleSheet, ScrollView, ImageBackground, Dimensions, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Phase from './components/Phase';
import phasesData from './data/phases.json'
import Button from './components/Button';

const Stack = createStackNavigator();
const screenHeight = Dimensions.get('window').height; 
const screenWidth = Dimensions.get('window').width; 

const App = () => {
  const [phases, setPhases] = useState(phasesData);

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.backgroundImage} resizeMode="stretch">
      <Text style={styles.title}>MW - TODO</Text>
      <ScrollView horizontal style={styles.container}>
          {phases.map(phase => <Phase key={phase.id} phase={phase}/>)}
          <Button title={'+ Add phase'} />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 48,
    marginBottom: 6
  },
  container: {
    margin: 5,
    gap: 10,
    marginRight: 16
  },
  backgroundImage: {
    height: screenHeight, 
    width: screenWidth, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }
});

export default App;
