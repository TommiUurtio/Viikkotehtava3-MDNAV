import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SecondScreen() {
  return (
	<View style={styles.container}>
	  <Text style={styles.text}>SecondScreen</Text>
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

export default SecondScreen;