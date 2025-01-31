import { FIREBASE_AUTH } from "@/config/firebaseconfig";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { Link, useRouter } from "expo-router";
import { replace } from "expo-router/build/global-state/routing";
import { useState } from "react"
import { Button, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";




const Loginscreen = () => {
    const [Email, setEmail] = useState ("") ;
    const [Password, setPassword] = useState ("") ;
    const router = useRouter();  
 
 
    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(FIREBASE_AUTH, Email, Password);
            console.log('Login successful');
            router.replace("/[home]"); 
        } catch (error) {
            console.error("login error", error);
            alert("Login failed, please check credentials");
        }
    };


    const regbutton = () => {
        router.replace("/Register")
    }
 


   return (
        <ImageBackground 
          source={require('../../assets/images/loginscreenbg.png')} 
          style={styles.backgroundImage}
          resizeMode="cover" // "cover", 
        >
          <View style={styles.container}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"} 
              keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} 
            >
              <View style={styles.inputcard}> 
                <Text style={styles.signintext}>
                    SIGN IN
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="username"
                  value={Email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor={"lightgrey"}
                
                />
    
                <TextInput
                  style={styles.input}
                  placeholder="password"
                  value={Password}
                  onChangeText={setPassword}
                  secureTextEntry
                  placeholderTextColor={"lightgrey"}
                />

                <TouchableOpacity style={styles.logbutton} onPress={handleLogin}>
                    <Text style={{fontSize:15, color:"white"}}>
                        LOG IN
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={regbutton} style={{bottom:30, width:90, left:10,}}>
                    <Text style={{fontSize:20,textDecorationLine:"underline", color:"white" }}>
                        Register?
                    </Text>
                </TouchableOpacity>
                



              </View>
            </KeyboardAvoidingView>
          </View>
          <View style={styles.bottombutton}>
            <TouchableOpacity style={styles.bottomborer}>
                <Text style={{color:"white", fontWeight:"500"}}>
                learn more about what we have to offer
                </Text>
            </TouchableOpacity>
          </View>
          
        </ImageBackground>
      );
    }




const styles = StyleSheet.create ({
    bottombutton:{
        bottom:200,
        alignItems:"center",
    },
    bottomborer:{
        backgroundColor:"#71B670",
        padding:10,
        borderRadius:41,
    },
    inputcard:{
        backgroundColor:"rgba(107, 107, 178, 0.6)",
        padding:15,
        paddingTop:20,
        borderRadius:21,
        top:80,
        paddingBottom:0,
        height:200,
    },
    logbutton:{
        backgroundColor:"#72BAAE",
        width:121,
        left:205,
        height:36,
        borderRadius:30,
        justifyContent: 'center',
        alignItems:"center",
    },
    signintext:{
        bottom:10,
        fontSize:20,
        color:"#FFFFFF",


    },
   container:{
       flex:1,
       justifyContent: 'center',
       padding: 16,
   },
   input:{
       height:40,
       backgroundColor:"#FFF2F2",
       borderColor:"lightgrey",
       borderWidth:1,
       marginBottom: 10,
       paddingLeft: 8,
       borderRadius:36,

   },
   backgroundImage:{
    flex: 1, 
    width: '100%', 
    height: '100%',
   },
})

export default Loginscreen;
