import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Text>Registro/Login</Text>
      {/* Implementa Firebase Auth aquí si es necesario */}
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
