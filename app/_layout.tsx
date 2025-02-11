// import { AuthProvider } from "@/context/authContex";
// import { Stack } from "expo-router";
// import TestScreen from "./(root)/testscreen";
// import Home from "./(root)/[home]";



// export default function RootLayout() {
//  return (
//   <AuthProvider>
//   <Stack>
//     <Stack.Screen name="index" options={{headerShown:false, }}/>
//     <Stack.Screen name="(auth)/Login" options={{title:"login", headerShown:false,}}/>
//     <Stack.Screen name="(auth)/Register" options={{title:"register", headerShown:false,}}/>
//     <Stack.Screen name="(root)/[home]" options={{title:"register", headerShown:false,}}/>
//     <Stack.Screen name="(root)/testscreen" options={{title:"register", headerShown:false,}}/>
//     <Stack.Screen name="(root)/ScoreScreen" options={{title:"register", headerShown:false,}}/>
//   </Stack>
// </AuthProvider>
//  );
// }


import { AuthProvider } from "@/context/authContex";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{height:"100%" }}>
        <AuthProvider>
          <Stack>
            <Stack.Screen name="(auth)/Login" options={{ title: "Login", headerShown: false }} />
            <Stack.Screen name="(auth)/Register" options={{ title: "Register", headerShown: false }} />
            <Stack.Screen name="(root)/[home]" options={{ title: "Home", headerShown: false }} />
            <Stack.Screen name="(root)/testscreen" options={{ title: "Test Screen", headerShown: false }} />
            <Stack.Screen name="(root)/ScoreScreen" options={{ title: "Score Screen", headerShown: false }} />
            <Stack.Screen name="(root)/mods" options={{ title: "mods", headerShown: false }} />
          </Stack>
        </AuthProvider>
    </GestureHandlerRootView>
  );
}
