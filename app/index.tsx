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

import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/(auth)/Login" />;
}
