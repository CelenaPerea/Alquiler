import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Mensaje de bienvenida</Text>
      <Image
        source={{ uri: "https://example.com/computer-image.jpg" }}
        style={styles.image}
      />
      <Button title="Ver PC" onPress={() => navigation.navigate("Main")} />
      <View style={styles.socialMediaIcons}>
        <Image
          source={{ uri: "https://example.com/facebook-logo.jpg" }}
          style={styles.icon}
        />
        <Image
          source={{ uri: "https://example.com/twitter-logo.jpg" }}
          style={styles.icon}
        />
        <Image
          source={{ uri: "https://example.com/instagram-logo.jpg" }}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeMessage: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  socialMediaIcons: {
    flexDirection: "row",
    marginTop: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});
