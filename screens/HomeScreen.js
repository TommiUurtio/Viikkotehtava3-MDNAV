import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
  return (
	<View style={styles.container}>
	  <Text style={styles.text}>HomeScreen</Text>
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
  },
  text: {
	fontSize: 24,
  },
});

export default HomeScreen;