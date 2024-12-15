import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import MusicCard from "../components/MusicCard";
import Header from "../components/Header";

export default function DiscoverScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Discover" onMenuPress={() => navigation.openDrawer()} />
      <ScrollView style={styles.content}>
        <MusicCard
          title="Long Ride"
          image={require("../assets/144821d3bc0f7ec70c5cf8b3efc97b9e.jpg")}
        />
        <MusicCard
          title="Love"
          image={require("../assets/80f4297787ceb89111962a3d51363277.jpg")}
        />
        <MusicCard
          title="Miss you"
          image={require("../assets/b3c6068720e378befd09608d1c2779ac.jpg")}
        />
        <MusicCard
          title="More"
          image={require("../assets/e26ee3c69fedc3e70b88f8121f0acd97.jpg")}
        />
        <MusicCard
          title="Ku ingin selalu"
          image={require("../assets/0b2bd5bd8375e630bd01d8a22fb3a36f.jpg")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1e004d" },
  content: { padding: 20 },
});
