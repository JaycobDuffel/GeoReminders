import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

import MapScreen from "./components/MapScreen";

export default function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    console.log(location);
  }, [location]);

  useEffect(() => {
    (async () => {
      const { status: foregroundStatus } =
        await Location.requestForegroundPermissionsAsync();
      if (foregroundStatus !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {location && <MapScreen location={location} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
  },
});
