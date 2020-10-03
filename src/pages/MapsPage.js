import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default class MapsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {
        latitude: -29.973907,
        longitude: -51.194862,
        latitudeDelta: 0.1,
        longitudeDelta: 0.02,
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={this.state.position}>
          <Marker
            coordinate={this.state.position}
            title={'Marker :D'}
            description={'Novo marcador no mapa'}
          />
        </MapView>
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
    paddingLeft: 10,
    paddingRight: 10,
  },
  map: {
    height: '100%',
    width: '100%',
  },
});
