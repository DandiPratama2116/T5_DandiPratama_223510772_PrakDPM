import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/e178f751ac2db5b6c75938a95073ef26.jpg")}
        style={styles.profilePic}
      />
      <Text style={styles.username}>Dandi Pratama</Text>
      <Text style={styles.menuItem}>Home</Text>
      <Text style={styles.menuItem}>Artist</Text>
      <Text style={styles.menuItem}>Favorite</Text>
      <Text style={styles.menuItem}>Help</Text>
      <Text style={styles.menuItem}>Settings</Text>
      <Text style={styles.logout}>Logout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1e004d", padding: 20 },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  },
  username: {
    fontSize: 28,
    color: "#fff",
    textAlign: "center",
    marginVertical: 10,
  },
  menuItem: { color: "#fff", fontSize: 18, marginVertical: 10 },
  logout: { color: "#ff3e3e", fontSize: 18, marginTop: 20 },
});
