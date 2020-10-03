import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class CameraPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CameraPage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
  },
});
