import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const MapScreen = ({ location }) => {
  console.log(location);

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: location ? location.coords.latitude : 37.78825,
        longitude: location ? location.coords.longitude : -122.4324,
        latitudeDelta: 0.0622,
        longitudeDelta: 0.0221,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 7,
    width: "100%",
    height: "100%",
  },
  text: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
  },
});

export default MapScreen;
