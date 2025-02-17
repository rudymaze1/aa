import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";

const BottomTabBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const homeScale = useRef(new Animated.Value(1)).current;
  const modsScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animateButton = (button: Animated.Value, active: boolean) => {
      Animated.timing(button, {
        toValue: active ? 1.1 : 1, // Slightly smaller scale-up
        duration: 100,
        useNativeDriver: true,
      }).start();
    };

    animateButton(homeScale, pathname === "/home");
    animateButton(modsScale, pathname === "/mods");
  }, [pathname]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale: homeScale }] }}>
        <TouchableOpacity
          style={[styles.button, pathname === "/home" && styles.activeButton]}
          onPress={() => router.replace("/home")}
        >
          <Ionicons name="home-outline" size={22} color="#9DB2CE" />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={{ transform: [{ scale: modsScale }] }}>
        <TouchableOpacity
          style={[styles.button, pathname === "/mods" && styles.activeButton]}
          onPress={() => router.replace("/mods")}
        >
          <Ionicons name="book-outline" size={22} color="#9DB2CE" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {

    position: "absolute",
    bottom: 30,
    left: "40%",
    transform: [{ translateX: -60 }],
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 25,
    padding: 10,
    gap: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: 200, // Slimmer width
    height: 45, // Reduced height
  },
  button: {
    left:1,
    backgroundColor: "white",
    width: 80, // Slimmer button
    height: 35, // Shorter button height
    alignItems: "center",
    justifyContent: "center",
    bottom:5,
  },
  activeButton: {
    borderRadius: 30,
    borderWidth:1,
    borderColor:"#86A3F4",
    backgroundColor: "#386BF6", // Active button color
    shadowColor: "#1E4BB8", // Darker blue for inner shadow effect
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.6,
    shadowRadius: 1,
    elevation: 1, // For Android shadow effect
},
});

