import { AuthProvider } from "@/context/authContex";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ height: "100%" }}>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(auth)/Login" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/Register" options={{ headerShown: false }} />
          <Stack.Screen name="(root)/[home]" options={{ headerShown: false, animation: "none" }} />
          <Stack.Screen name="(root)/testscreen" options={{ headerShown: false }} />
          <Stack.Screen name="(root)/ScoreScreen" options={{ headerShown: false }} />
          <Stack.Screen name="(root)/mods" options={{ headerShown: false, animation: "none" }} />
        </Stack>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
