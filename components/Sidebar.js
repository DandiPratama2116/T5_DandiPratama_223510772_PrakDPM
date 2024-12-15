import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "react-native-vector-icons";

export default function Sidebar({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/e178f751ac2db5b6c75938a95073ef26.jpg")}
        style={styles.profilePic}
      />
      <Text style={styles.username}>Dandi Pratama</Text>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Discover")}
      >
        <Ionicons name="home" size={24} color="#fff" />
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="musical-notes" size={24} color="#fff" />
        <Text style={styles.menuText}>Artist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="heart" size={24} color="#fff" />
        <Text style={styles.menuText}>Favorite</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="help-circle" size={24} color="#fff" />
        <Text style={styles.menuText}>Help</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="settings" size={24} color="#fff" />
        <Text style={styles.menuText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logout}>
        <Ionicons name="log-out" size={24} color="#ff3e3e" />
        <Text style={[styles.menuText, { color: "#ff3e3e" }]}>Logout</Text>
      </TouchableOpacity>
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
  menuItem: { flexDirection: "row", alignItems: "center", marginVertical: 10 },
  menuText: { color: "#fff", fontSize: 18, marginLeft: 10 },
  logout: { flexDirection: "row", alignItems: "center", marginTop: 20 },
});
