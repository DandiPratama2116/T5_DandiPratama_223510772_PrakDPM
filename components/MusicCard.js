import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function MusicCard({ title, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    padding: 10,
  },
});
