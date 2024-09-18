import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import CustomNavigationBar from '../components/CustomNavigationBar';
import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
	<PaperProvider>
	  <NavigationContainer>
		<Stack.Navigator
		  initialRouteName="Home"
		  screenOptions={{
			header: (props) => <CustomNavigationBar {...props} />,
		  }}>
		  <Stack.Screen name="Home" component={HomeScreen} />
		  <Stack.Screen name="Second" component={SecondScreen} />
		</Stack.Navigator>
	  </NavigationContainer>
	</PaperProvider>
  );
}