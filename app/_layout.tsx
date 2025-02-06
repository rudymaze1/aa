import { AuthProvider } from "@/context/authContex";
import { Stack } from "expo-router";
import TestScreen from "./(root)/testscreen";
import Home from "./(root)/[home]";



export default function RootLayout() {
 return (
  <AuthProvider>
  <Stack>
    <Stack.Screen name="index" options={{headerShown:false, }}/>
    <Stack.Screen name="(auth)/Login" options={{title:"login", headerShown:false,}}/>
    <Stack.Screen name="(auth)/Register" options={{title:"register", headerShown:false,}}/>
    <Stack.Screen name="(root)/[home]" options={{title:"register", headerShown:false,}}/>
    <Stack.Screen name="(root)/testscreen" options={{title:"register", headerShown:false,}}/>
    <Stack.Screen name="(root)/ScoreScreen" options={{title:"register", headerShown:false,}}/>

  </Stack>
</AuthProvider>
 );
}

