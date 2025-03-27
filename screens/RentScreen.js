import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RentScreen() {
  return (
    <View style={styles.container}>
      <Text>Esta es la pantalla de Alquiler</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
