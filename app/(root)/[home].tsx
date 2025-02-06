import { Animated, FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; 
import questions from '../data/questions';

const Home = () => {
    const scrollY = useRef(new Animated.Value(0)).current;
    const router = useRouter(); 

    const opacity = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    const DATA = [
        { id: '1', title: 'RESPIRATORY ASSESSMENT', testType: 'respiratory_basics' },
        { id: '2', title: 'INFORMATION GATHERING', testType: 'information_gathering' },
        { id: '3', title: 'INFECTION PREVENTION', testType: 'infection_prevention' },
        { id: '4', title: 'VENTILATOR MANAGEMENT', testType: 'ventilator_management' },
        { id: '5', title: 'OXYGEN THERAPY', testType: 'oxygen_therapy' },
        { id: '6', title: 'LUNG MECHANICS', testType: 'lung_mechanics' },
        { id: '7', title: 'ACID-BASE BALANCE', testType: 'acid_base_balance' },
        { id: '8', title: 'PATIENT ASSESSMENT', testType: 'patient_assessment' },
        { id: '9', title: 'NEONATAL RESPIRATORY CARE', testType: 'neonatal_respiratory_care' },
        { id: '10', title: 'CHEST IMAGING', testType: 'chest_imaging' },
        { id: '11', title: 'ADVANCED AIRWAY MANAGEMENT', testType: 'advanced_airway_management' },
    ];

    interface CardItemProps {
        title: string;
        testType: string;
    }

    const CardItem: React.FC<CardItemProps> = ({ title, testType }) => {
        const router = useRouter();
    
        return (
            <TouchableOpacity 
                style={styles.card} 
                onPress={() => router.push(`/testscreen?testType=${testType}`)} // ✅ Pass `testType` as query
            >
                {/* <ImageBackground 
                    source={require('../../assets/images/cardback.png')} 
                    style={styles.backgroundImage}
                    resizeMode="cover"
                /> */}
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
                    <View><Text style={styles.headertext}>Chance{"\n"}of Passing</Text></View>
                </View>
            </View>

            <View style={styles.bottomcontainer}>
                <Animated.Text style={[styles.qstext, { opacity }]}>Quick Study</Animated.Text>
                <Animated.FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <CardItem title={item.title} testType={item.testType} />}
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
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        // Elevation for Android
        elevation: 5,
      },
      cardText: {
        top:50,
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
    }

})