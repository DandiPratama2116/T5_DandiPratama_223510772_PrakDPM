import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";

export default function BottomTab({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}
          >
            <Ionicons
              name={label === "Discover" ? "home" : "person"}
              size={24}
              color={isFocused ? "#7137ff" : "#999"}
            />
            <Text style={[styles.label, isFocused && { color: "#7137ff" }]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1e004d",
    paddingVertical: 10,
  },
  tabItem: {
    alignItems: "center",
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: "#999",
  },
});
