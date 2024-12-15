import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";

export default function Header({ title, onMenuPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMenuPress}>
        <Ionicons name="menu" size={28} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name="notifications" size={28} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#7137ff",
    padding: 15,
  },
  title: { color: "#fff", fontSize: 20, fontWeight: "bold" },
});
