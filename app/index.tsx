// import { Text, View } from "react-native";
// import LoginScreen from "./(auth)/Login";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <LoginScreen/>

//     </View>
//   );
// }





// import { Redirect } from "expo-router";

// export default function Index() {
//   return <Redirect href="/(auth)/Login" />;
// }




import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, useRouter } from "expo-router";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem("userToken");

      if (token) {
        setUserToken(token); // If token exists, set it
      }

      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <Redirect href={userToken ? "/(root)/Home" : "/(auth)/Login"} />;
}
