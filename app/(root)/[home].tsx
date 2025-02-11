import { Animated, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef } from 'react';
import { useRouter } from 'expo-router'; 
import { Ionicons } from '@expo/vector-icons';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { replace } from 'expo-router/build/global-state/routing';



const Home = () => {
    const scrollY = useRef(new Animated.Value(0)).current;
    const router = useRouter(); 

 
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
                    <Text style={styles.welcometext}>Welcome!</Text>
                    <Text style={styles.schooltext}>School</Text>
                    <Ionicons name='settings-outline' size={30} color={"white"} />
                </View>
                <Image source={require("../../assets/images/Line6.png")} style={styles.lineimg} />
                <View style={styles.headertextloc}>
                    <View><Text style={styles.headertext}>Days to{"\n"}<Text style={styles.boldText}>Graduate</Text></Text></View>
                    <View><Text style={styles.headertext}>Topics{"\n"}Reviewed</Text></View>
                    <View><Text style={styles.modheader}>{"\n"}Modules     </Text></View>
                </View>
                <View style={styles.statarrow}>
                <TouchableOpacity onPress={handleModbutton}>
                <Ionicons name='arrow-forward-circle' size={60} color={"white"} />
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
        left: 300,
        top: 30,
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
        padding: 10,
        top:40,
        height:1000,
        marginBottom:0,
      },
      card: {
        right: 5,
        backgroundColor: '#CB696C',
        padding: 20,
        borderRadius: 10,
        width: 160,
        height: 120,
        marginTop: 0,
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
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
    },
    bottomcontainer:{
        backgroundColor:"white",
        bottom:90,
        marginBottom:150,

    },
    profset:{
        flexDirection:"row",
        top:20,
        left:0,
        paddingLeft:35,
        paddingRight:20,
        justifyContent:"space-between",
    },
    welcometext:{
        color:"white",
        fontWeight:900,
        fontSize:24,
        right:30,
    },
    schooltext:{
        position:"fixed",
        fontSize:12,
        right:185,
        top:30,
        color:"white",
    },
    lineimg:{
        top:60,
        left:13,
        height:1,
    },
    headertextloc:{
        flexDirection:"row",
        top:100,
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


})