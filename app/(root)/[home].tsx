import { Animated, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'expo-router'; 
import { Ionicons } from '@expo/vector-icons';
import { replace } from 'expo-router/build/global-state/routing';
import BottomTabBar from '@/components/bottomfloating';
import { FIREBASE_AUTH, FIREBASE_DB } from '@/config/firebaseconfig';
import { doc, getDoc } from 'firebase/firestore';
import { ActivityIndicator } from 'react-native';



const Home = () => {
    const scrollY = useRef(new Animated.Value(0)).current;
    const router = useRouter(); 
    const [userData, setUserData] = useState<{ username: string; school: string; lastName?: string } | null>(null);

    const replace = () => {
        router.replace('/(root)/Settings'); // Adjust the path as necessary
      };
 

    useEffect(() => {
        const fetchUserData = async () => {
            const user = FIREBASE_AUTH.currentUser;
            if (user) {
              try {
                const userDoc = await getDoc(doc(FIREBASE_DB, "users", user.uid));
                if (userDoc.exists()) {
                  const data = userDoc.data() as { username: string; school: string; lastName?: string };
                  setUserData(data);
                }
              } catch (error) {
                console.error("Error fetching user data:", error);
              }
            }
          };

        fetchUserData();
    }, []);

 
    const handleModbutton = () => {
        console.log("Button pressed, navigating to module...");
        try {
          router.push("/(root)/mods");
          console.log("Navigation triggered.");
        } catch (error) {
          console.log("Error navigating:", error);
        }
      };
      
      


    const opacity = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });
   
    const DATA = [
        { id: '1', title: 'RESPIRATORY ASSESSMENT', testType: 'respiratory_basics', image: require('../../assets/images/stethoscope.png') },
        { id: '2', title: 'INFORMATION GATHERING', testType: 'information_gathering', image: require('../../assets/images/clipboard.png') },
        { id: '3', title: 'INFECTION PREVENTION', testType: 'infection_prevention', image: require('../../assets/images/mask.png') },
        { id: '4', title: 'VENTILATOR MANAGEMENT', testType: 'ventilator_management', image: require('../../assets/images/ventman.png') },
        { id: '5', title: 'OXYGEN THERAPY', testType: 'oxygen_therapy', image: require('../../assets/images/oxygen.png') },
        { id: '6', title: 'LUNG MECHANICS', testType: 'lung_mechanics', image: require('../../assets/images/lungs.png') },
        { id: '7', title: 'ACID-BASE BALANCE', testType: 'acid_base_balance', image: require('../../assets/images/abg.png') },
        { id: '8', title: 'PATIENT ASSESSMENT', testType: 'patient_assessment', image: require('../../assets/images/bedcare.png') },
        { id: '9', title: 'NEONATAL RESPIRATORY CARE', testType: 'neonatal_respiratory_care', image: require('../../assets/images/neonatal.png') },
        // { id: '10', title: 'CHEST IMAGING', testType: 'chest_imaging', image: require('../../assets/images/camera.png') },
        // { id: '11', title: 'ADVANCED AIRWAY MANAGEMENT', testType: 'advanced_airway_management', image: require('../../assets/images/mic.png') },
    ];


    interface CardItemProps {
        title: string;
        testType: string;
        image: any;
    }
    const CardItem: React.FC<CardItemProps> = ({ title, testType, image }) => {
        const router = useRouter();
       

        return (
            <TouchableOpacity 
                style={styles.card} 
                onPress={() => router.push(`/testscreen?testType=${testType}`)} 
            >
                <Image source={image} style={styles.cardImage} />
                <Text style={styles.cardText}>{title}</Text>
            </TouchableOpacity>
        );
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topcontainer}>
            <View style={styles.profset}>
                <Ionicons name='person-outline' size={40} color={"white"} />
                <View style={styles.textContainer}>
                    <Text style={styles.welcometext}>
                        {userData?.username
                            ? `${userData.username} ${userData.lastName ? userData.lastName.charAt(0).toUpperCase() + '.' : ''}`
                            : ""}
                    </Text>
                    <Text style={styles.schooltext}>{userData?.school || ""}</Text>
                </View>
                <TouchableOpacity onPress={replace}>
                <Ionicons name='settings-outline' size={30} color={"white"} />
                </TouchableOpacity>
            </View>

                            <Image source={require("../../assets/images/Line6.png")} style={styles.lineimg} />
                <View style={styles.headertextloc}>
                    <View><Text style={styles.headertext}>Days to{"\n"}<Text style={styles.boldText}>Graduate</Text></Text></View>
                    <View><Text style={styles.headertext}>Topics{"\n"}Reviewed</Text></View>
                    <View><Text style={styles.modheader}>{"\n"}Modules     </Text></View>
                </View>
                <View style={styles.statarrow}>
                <TouchableOpacity onPress={handleModbutton}>
                <Ionicons name='arrow-forward-outline' size={30} color={"white"} />
                </TouchableOpacity>

                </View>
            </View>

            <View style={styles.bottomcontainer}>
                <Animated.Text style={[styles.qstext, { opacity }]}>Quick Study</Animated.Text>
                <Animated.FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <CardItem 
                            title={item.title} 
                            testType={item.testType} 
                            image={item.image} // Pass image path instead of icon
                        />
                    )}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    contentContainerStyle={styles.listContainer}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                />
            </View>
            <BottomTabBar/>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    },
    modheader:{
         color:"white",
         top:5,
         left:3,
    },
    statarrow: {
        left: "80.5%",
        top: 8,
        shadowColor: '#000', // Black shadow color
        shadowOffset: { width: 0, height: 1 }, // Shadow offset
        shadowOpacity: 0.8, // Opacity of the shadow
        shadowRadius: 4, // Blurriness of the shadow
        elevation: 5, // For Android shadow (depth)
      },
    cardImage: {
        width: 40,
        height: 40,
        alignSelf: 'center',
        marginBottom: 10,
        resizeMode:'contain',
    },
    row: {
        justifyContent: 'space-between',
        padding:20,
        marginTop:-5,
      },    
    listContainer: {
        top:40,
        height:"135%",
        marginBottom:0,
        marginTop:10,
        left:"4%",
        width:"90%",
      },
      card: {
        right: 5,
        backgroundColor: '#CB696C',
        padding: 20,
        borderRadius: 10,
        width: "50%",
        height: 140,
        marginRight:20,
        // Shadow for iOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        // Elevation for Android
        elevation: 5,

      },
      cardText: {
        top:0,
        fontSize: 12,
        fontWeight: 'bold',
        color:"white",
        textAlign:"center",
      },
    qstext:{
        position:"absolute",
        left:30,
        top:25,
        fontWeight:300,
        color:"#44449C",
    },
    topcontainer:{
        backgroundColor:"#44449C",
        height:280,
        bottom:90,
        paddingTop:90,
        
    },
    bottomcontainer:{
        backgroundColor:"#DDE6E8",
        bottom:140,
        marginBottom:150,
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        height:790,
        

    },
    profset:{
        flexDirection:"row",
        top:20,
        left:0,
        paddingLeft:35,
        paddingRight:20,
        justifyContent:"space-between",
    },
    welcometext: {
        fontSize: 24,
        fontWeight: '900',
        color: 'white',
        flexShrink: 1,  // Allow the text to shrink if it's too long
        maxWidth: '75%', // Set a max width to prevent overflow
        overflow: 'hidden', // Hide overflow text
        textOverflow: 'ellipsis', // Add ellipsis for truncation
    },
    schooltext: {
        fontSize: 12,
        color: 'white',
        flexShrink: 1,  // Allow the text to shrink if it's too long
        maxWidth: '75%', // Set a max width to prevent overflow
        overflow: 'hidden', // Hide overflow text
        textOverflow: 'ellipsis', // Add ellipsis for truncation
    },
    lineimg:{
        top:30,
        left:13,
        height:1,
    },
    headertextloc:{
        flexDirection:"row",
        top:50,
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:20,
    },
    headertext:{
        color:"white",
    },
    boldText:{
         fontSize: 15,
         right:30,
    },
    backgroundImage:{
        position:"absolute",
        height:130,
        width:170,
    },
    cardIcon: {
         position: 'absolute',
         top: 4,
         left: 5,
         color:"white",
        },
        textContainer: {
            flex: 1,  // Take up available space between the icons
            justifyContent: 'center',
            alignItems: 'flex-start', // Align texts to the start (left)
            paddingHorizontal: 10,  // Space out the text for better consistency
        },


})