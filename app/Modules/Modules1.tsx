// import React, { useState } from 'react';
// import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { useRouter } from 'expo-router';
// import { ImageBackground } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const lessonSlides = [
//     {
//         type: 'lesson',
//         title: 'Introduction',
//         objectiveTitle: 'Objective:',
//         objectiveContent: 'Understand how to evaluate and interpret various patient data in the context of the cardiopulmonary system, with the aim of improving clinical decision-making and patient outcomes.',
//         audienceTitle: 'Audience',
//         audienceContent: 'Medical professionals, respiratory therapists, nurses, or anyone involved in patient care...',
//         overviewTitle: 'Overview:',
//         overviewContent: 'This module will explore the key elements of a patient’s medical record, including history, physical examination, diagnostic tests, and other clinical data that help evaluate the cardiopulmonary system. Special attention will be paid to interpreting critical data that influences diagnosis and treatment decisions.This module will explore the key elements of a patient’s medical record, including history, physical examination...',
//         image: require('../../assets/images/stethimg.png'),
//     },
//     {
//         type: 'lesson',
//         lessontitle: 'Patient History',
//         lessoncontent: (
//           <View>
//             <Text style={{ fontSize:20, fontWeight: '200',color:"#B4B2B2", marginBottom:20, bottom:20,}}>Patient history provides critical context for understanding their current cardiopulmonary health. Key components include:</Text>
//             <Text style={{ right:5,padding:10, fontSize:16,fontWeight: '300',color:"#B4B2B2", marginBottom:20,}} >• <Text style={{  fontWeight: 'bold',color:"#E0DEDE"}}>History of Present Illness (HPI):</Text> What brought the patient in for care? Are there any symptoms related to cardiopulmonary function (e.g., shortness of breath, chest pain, palpitations)?</Text>
//             <Text style={{ right:5,padding:10, fontSize:16,fontWeight: '300',color:"#B4B2B2", marginBottom:20,}} >• <Text style={{ fontWeight: 'bold',color:"#E0DEDE"}}>Timeline of symptoms:</Text> Sudden onset (e.g., heart attack, pulmonary embolism) vs. chronic progression (e.g., COPD, asthma).</Text>
//             <Text style={{ right:5,padding:10, fontSize:16,fontWeight: '300',color:"#B4B2B2", marginBottom:20,}} >• <Text style={{ fontWeight: 'bold',color:"#E0DEDE"}}>Orders:</Text> Review medical orders for relevant tests and interventions (e.g., echocardiogram, chest X-ray, lab tests).</Text>
//             <Text style={{ right:5,padding:10, fontSize:16,fontWeight: '300',color:"#B4B2B2", marginBottom:20,}} >• <Text style={{ fontWeight: 'bold',color:"#E0DEDE"}}>Medication Reconciliation:</Text> Identify current medications and check for any known cardiopulmonary side effects or interactions (e.g., beta-blockers, ACE inhibitors, diuretics).</Text>
//             <Text style={{ right:5,padding:10, fontSize:16,fontWeight: '300',color:"#B4B2B2", marginBottom:20,}} >• <Text style={{ fontWeight: 'bold',color:"#E0DEDE"}}>Progress Notes:</Text> Review daily updates on patient condition and responses to treatment (e.g., improvements in oxygenation, changes in lung function).</Text>
//           </View>
//         ),
//       },
//       {
//         type: 'lesson',
//         lessontitle: 'Orders and Meds',
//         lessoncontent: (
//           <View>
//             <Text style={{ right:10, padding:10, fontSize:16,fontWeight: '300',color:"#B4B2B2", marginBottom:30,}} >• <Text style={{ fontWeight: 'bold',color:"#E0DEDE"}}>Orders:</Text> Review medical orders for relevant tests and interventions (e.g., chest X-ray, ABG, pulmonary function tests).</Text>
//             <Text style={{ right:10, padding:10, fontSize:16,fontWeight: '300',color:"#B4B2B2", marginBottom:30,}} >• <Text style={{ fontWeight: 'bold',color:"#E0DEDE"}}>Meds:</Text> Identify current medications and check for cardiopulmonary side effects. (e.g) A patient on beta-blockers may experience bronchoconstriction, necessitating adjustments in asthma medications.</Text>
//           </View>
//         ),
//       },
//       {
//         type: 'lesson',
//         lessontitle: 'Progress Notes and Advanced Directives',
//         lessoncontent: (
//           <View>
//             <Text style={{ top:20,right:0, paddingRight:30, fontSize:16,fontWeight: '300',color:"#B4B2B2", marginBottom:30,}} >• <Text style={{ fontWeight: 'bold',color:"#E0DEDE"}}>Progress Notes:</Text>Review daily updates on patient condition and treatment responses. Consider changes in the patient’s status or unexpected side effects of treatment.</Text>
//             <Text style={{ right:10, padding:10, fontSize:16,fontWeight: '300',color:"#B4B2B2", marginBottom:30,}} >• <Text style={{ fontWeight: 'bold',color:"#E0DEDE"}}>DNR Status/Advance Directives:</Text> Understand patient wishes regarding resuscitation, particularly in end-stage diseases. (e.g) A patient with terminal lung cancer may opt for palliative care, impacting treatment decisions.</Text>
//             <Text style={{ fontWeight: 'bold',color:"#E0DEDE", fontSize:20,}}>Social, Family, and Medical History:</Text> 
//             <Text style={{ right:10, padding:10, fontSize:16,fontWeight: '300',color:"#B4B2B2", marginBottom:30,}} >• <Text style={{ fontWeight: 'bold',color:"#E0DEDE"}}>Consider these things: </Text> Family history of cardiopulmonary diseases (e.g., heart disease, asthma, COPD). Social history, including smoking status, occupational exposures, and living conditions. (e.g) A patient with a strong family history of cardiovascular disease may warrant more aggressive monitoring and preventive measures.</Text>
//           </View>
//         ),
//       },
//       {
//         type: 'lesson',
//         lessontitle: 'Physical Examination',
//         lessoncontent: (
//           <View>
//             <Text style={{ right:0, paddingRight:30, fontSize:16,fontWeight: '300',color:"#B4B2B2", marginBottom:30,}} >• <Text style={{ fontWeight: 'bold',color:"#E0DEDE"}}>Progress Notes:</Text>Review daily updates on patient condition and treatment responses. Consider changes in the patient’s status or unexpected side effects of treatment.</Text>
//             <Text style={{ right:0, paddingRight:40, fontSize:16,fontWeight: '300',color:"#B4B2B2", marginBottom:30,}} >• <Text style={{ fontWeight: 'bold',color:"#E0DEDE"}}>Key Components:</Text>Inspect chest for abnormalities (e.g., asymmetry, use of accessory muscles). Auscultate lung and heart sounds, noting any abnormal findings (e.g., wheezing, crackles, murmurs). Check for signs of hypoxia, such as cyanosis, confusion, or labored breathing. Evaluate vital signs: heart rate, respiratory rate, blood pressure, and oxygen saturation.</Text>
//             <Text style={{ right:0, paddingRight:40, fontSize:16,fontWeight: '300',color:"#B4B2B2", marginBottom:30,}} >• <Text style={{ fontWeight: 'bold',color:"#E0DEDE"}}></Text> Check for signs of hypoxia, such as cyanosis, confusion, or labored breathing. Evaluate vital signs: heart rate, respiratory rate, blood pressure, and oxygen saturation.</Text>


//           </View>
//         ),
//       },
// ];

// const quizSlides = [
//   { 
//     type: 'quiz', 
//     question: "Which of the following is the primary purpose of evaluating a patient’s medical history in cardiopulmonary care?", 
//     options: ['A) To understand their overall health and identify possible risk factors', 'B) To prescribe medications', 'C) To determine the need for surgery', 'D) To evaluate their social status'],
//     correctAnswer: 'A',
//     feedback: 'Understanding a patient’s health history helps identify potential risks and plan treatment.',
//   },
//   { 
//     type: 'quiz', 
//     question: "What is the key sign of hypoxia during a physical examination?", 
//     options: ['A) High fever', 'B) Cyanosis or confusion', 'C) Abnormal lung sounds', 'D) Swollen extremities'], 
//     correctAnswer: 'B',
//     feedback: 'Cyanosis or confusion are common signs of hypoxia, indicating a lack of oxygen in the tissues.',
//   },
//   { 
//     type: 'quiz', 
//     question: "What test measures the lung capacity during a physical examination?", 
//     options: ['A) Spirometry', 'B) X-ray', 'C) Pulmonary Function Test', 'D) CT Scan'], 
//     correctAnswer: 'A',
//     feedback: 'Spirometry is a key test used to measure lung function and capacity.',
//   },

// ];

// const Module1 = () => {
//   const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
//   const [feedbackState, setFeedbackState] = useState<{ [key: number]: { correct: boolean, feedback: string } }>({});
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const router = useRouter();

//   const allSlides = [...lessonSlides, ...quizSlides, { type: 'conclusion' }];
//   const totalSlides = allSlides.length;

//   const handleAnswerPress = (index: number, answer: string) => {
//     const quizIndex = index - lessonSlides.length; // Adjusting index to reference quizSlides
//     const correct = quizSlides[quizIndex].correctAnswer === answer;
//     setSelectedAnswers((prev) => ({ ...prev, [index]: answer }));
//     setFeedbackState((prev) => ({
//       ...prev,
//       [index]: { correct, feedback: quizSlides[quizIndex].feedback },
//     }));
//   };

//   const handleSwipe = () => {
//     const nextIndex = currentIndex + 1;
//     if (nextIndex < totalSlides) {
//       setCurrentIndex(nextIndex);
//     }
//   };

//   const renderSlideItem = ({ item, index }: { item: {  lessoncontent:string;  lessontitle?: string; content:string; type: string; title?: string; objectiveTitle?: string; objectiveContent?: string; audienceTitle?: string; audienceContent?: string; overviewTitle?: string; overviewContent?: string; question?: string; options?: string[]; correctAnswer?: string; feedback?: string }; index: number }) => {    if (item.type === 'lesson') {
//       return (
        
//         <View style={styles.Lessoncard}>
//           <ScrollView style={styles.cardContent}>
//           <Image source={item.image} style={{height:300,width:400,resizeMode:"cover", borderTopLeftRadius:40, borderTopRightRadius:40,}} />
//           <Text style={styles.cardTitle}>{item.title}</Text>
//             <Text style={styles.titles}>{item.objectiveTitle}</Text>
//             <Text style={styles.descript}>{item.objectiveContent}</Text>
//             <Text style={styles.titles}>{item.overviewTitle}</Text>
//             <Text style={styles.descript}>{item.overviewContent}</Text>
//             <Text style={styles.lessontitle}>{item.lessontitle}</Text>
//             <Text style={styles.lessoncontent}>{item.lessoncontent}</Text>










//             <Text style={styles.descriptiontext}>{item.content}</Text>
            

//           </ScrollView>
//         </View>
//       );
//     } else if (item.type === 'quiz') {
//       const quizIndex = index - lessonSlides.length; // Adjusting index to reference quizSlides
//       return (
        
//         <View style={styles.quizcard}>
//           <Text style={styles.questionText}>{item.question}</Text>
//           {item.options?.map((opt, i) => (
//             <TouchableOpacity
//               key={i}
//               style={[
//                 styles.optionButton,
//                 selectedAnswers[index] === opt ? styles.selectedOption : {},
//               ]}
//               onPress={() => handleAnswerPress(index, opt)}
//             >
//               <Text style={styles.optionText}>{opt}</Text>
//             </TouchableOpacity>
//           ))}
//           {feedbackState[index] && selectedAnswers[index] && (
//             <View style={styles.feedbackContainer}>
//               <Text style={styles.feedbackText}>
//                 {feedbackState[index].correct ? 'Correct!' : 'Incorrect'}
//               </Text>
//               <Text style={styles.feedbackText}>{feedbackState[index].feedback}</Text>
//             </View>
//           )}
//         </View>
//       );
//     } else if (item.type === 'conclusion') {
//       return (
        
//         <View style={styles.Conclusioncard}>
//           <ScrollView style={styles.conclusioncard}>
//           <Text style={styles.ConcTitle}>Evaluation of Patient Data in {"\n"}Cardiopulmonary Care {"\n"} Summary</Text>

//             <Text style={styles.conclsuiontext}>
//             Patient Data in Medical Records – Emphasizes the importance of evaluating various medical record components to assess a patient’s condition.
//             {"\n"} {"\n"}Patient History – Focuses on HPI, identifying symptoms like shortness of breath or chest pain. Example: A patient with asthma presenting with respiratory symptoms.
//             {"\n"} {"\n"}Orders & Medication Reconciliation – Reviews medical tests and medications, noting potential side effects (e.g., beta-blockers causing bronchoconstriction).
//             {"\n"} {"\n"}Progress Notes & Advance Directives – Tracks patient condition over time and considers treatment preferences, such as DNR status in end-stage diseases.
//             {"\n"} {"\n"}Social, Family, & Medical History – Examines family history (e.g., heart disease, COPD) and social factors (e.g., smoking, occupational exposure).
//             {"\n"} {"\n"}Physical Examination – Covers key assessments: chest inspection, auscultation, signs of hypoxia, and vital signs. Example: Wheezing suggesting bronchospasm.
//             </Text>

//             <View>
//                 <TouchableOpacity style={styles.conclusionbutton}>
//                     <Text style={styles.buttontext}>
//                        Home
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//           </ScrollView>
//         </View>
//       );
//     }
//     return null;
//   };

//   return (
    
//     <View style={styles.container}>
        
//       <FlatList
//         data={allSlides}
//         keyExtractor={(item, index) => String(index)}
//         renderItem={renderSlideItem}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onMomentumScrollEnd={handleSwipe}
//         initialScrollIndex={currentIndex} // Set initial index based on current index state
//         style={styles.flatList}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#1C2735',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     flatList: {
//       width: '100%', // Ensure the FlatList takes the full width of the container
//       marginBottom: 20,
//     },
//     Lessoncard:{
//         width:"5%",
//         padding:5,
//         right:4,
//         bottom:40,
//         height:"100%",
//     },
//     card: {
//       top:80,
//       width: 390, // Fixed width for the card
//       padding: 20,
//       backgroundColor: 'white',
//       borderRadius: 15,
//       marginVertical: 10, // Consistent vertical margin
//       bottom:30,
//       right:20,
//     },
//     cardTitle: {
//         left:10,
//       bottom:30,
//       fontSize: 22,
//       fontWeight: 'bold',
//       marginBottom: 15,
//       color: 'green', // Ensuring the title text is white
//     },
//     cardContent: {
//         width:390,
//       flex: 1,
//       marginTop: 10,
//       fontSize: 16,
//       color: 'green',
//       lineHeight: 24,
//     },
//     questionText: {
//       fontSize: 20,
//       fontWeight: 'bold',
//       marginBottom: 15,
//       color: '#E0DEDE', // Ensuring quiz question text is white
//     },
//     optionButton: {
//       padding: 15,
//       marginVertical: 8,
//       backgroundColor: '#337950',
//       borderRadius: 10,
//       alignItems: 'center',
//     },
//     optionText: {
//       fontSize: 18,
//       color: '#E0DEDE', // Ensuring option text is white
//     },
//     selectedOption: {
//       backgroundColor: '#5ebb84',
//     },
//     feedbackContainer: {
//       marginTop: 10,
//       padding: 10,
//       backgroundColor: 'white',
//       borderRadius: 8,
//     },
//     feedbackText: {
//       fontSize: 16,
//       fontWeight: 'bold',
//       color: '#245438', // Ensuring feedback text is white
//     },
//     contenttext:{
//         fontSize:13,
//         bottom:30,
//     },
//     titles:{
//         fontSize:20,
//         left:10,
//         fontWeight:"700",
//         bottom:32,
//         color:"white",
//     },
//     descript:{
//         fontSize:14,
//         bottom:30,
//         padding:10,
//         marginBottom:20,
//        color:"#B4B2B2"

        
//     },
//     descriptiontext:{
//         bottom:200,
//         left:10,
//         color:"#B4B2B2"
//     },
//     lessontitle:{
//         position:"absolute",
//         top:90,
//         fontSize: 22,
//         fontWeight: 'bold',
//         marginBottom: 15,
//         color: 'white', // Ensuring the title text is white
//     },
//     lessoncontent:{
//         position:"absolute",
//         top:140,
//     },
//     Conclusioncard:{
//         top:100,
//         right:10,
//         padding:10,
//         height:750,
//         width:350,
//     },
//     ConcTitle:{
//         fontSize:24,
//         color:"white",
//         fontWeight:"800",
    
//     },
//     conclsuiontext:{
//         fontSize:20,
//         paddingRight:20,
//         color:"#B4B2B2"
//     },
//     conclusioncard:{
//         width:360,
//         right:10,
//     },
//     quizcard:{
//         padding:10,
//         width:395,
//         right:37,
//         top:100,
//     },
//     conclusionbutton:{
//         height:50,
//         backgroundColor:"white",
//         alignItems:"center",
//         justifyContent:"center",
//         marginBottom:90,
//         marginTop:50,
//         borderRadius:50,
//         width:100,
//     },
//     buttontext:{
//         fontSize:20,
//     },

    
//   });
  

// export default Module1;







import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

// Styles are declared before the component to avoid the TS error.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor:"#1C2735"
  },
  card: {
    width: width, // Making each card a bit smaller than the screen width
    height: height * 1, // Adjusting the height for better content fitting
    backgroundColor: '#1C2735',
    borderRadius: 15,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  quizcard:{
    width: width, // Making each card a bit smaller than the screen width
    height: height * 0.8, // Adjusting the height for better content fitting
    backgroundColor: '#1C2735',
    borderRadius: 15,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    top: "1.5%",
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
    marginBottom: 15,
  },
  cardImage: {
    width: '100%',
    height: "30%",
    borderRadius: 10,
    marginBottom: 15,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    bottom: "180%",
    fontSize: 16,
    color: 'white',
  },
  text2: {
    bottom: 330,
    fontSize: 16,
    color: 'white',
  },
  quiztext:{
    height:"50%",
  },

  indicatorContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  indicator: {
    bottom: 20,
    width: 5,
    height: 5,
    margin: 5,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  activeIndicator: {
    backgroundColor: 'lightgreen', // Active indicator color
  },
  selectedOption: {
    backgroundColor: '#d0f5b7', // Light green for selected option
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  correctOption: {
    backgroundColor: 'white', // Light green for correct answer
  },
  incorrectOption: {
    backgroundColor: 'red', // Light red for incorrect answer
  },
  correctFeedback: {
    color: 'white', // Green text for correct feedback
  },
  incorrectFeedback: {
    color: 'white', // Red text for incorrect feedback
  },
});

// Lesson Slides Data
const lessonSlides = [
  {
    title: 'Introduction',
    image: require('../../assets/images/stethimg.png'),
    content: (
      <View>
        <Text style={styles.text}>Objective: Understand how to evaluate and interpret various patient data...</Text>
        <Text style={styles.text}>Audience: Medical professionals, respiratory therapists, nurses...</Text>
        <Text style={styles.text}>Overview: This module will explore the key elements of a patient’s medical record...</Text>
      </View>
    ),
  },
  {
    title: 'Patient History',
    content: (
      <View>
        <Text style={styles.text2}>• History of Present Illness (HPI): What brought the patient in for care?</Text>
        <Text style={styles.text2}>• Timeline of symptoms: Sudden onset vs. chronic progression (e.g., COPD, asthma)</Text>
        <Text style={styles.text2}>• Orders: Review medical orders for relevant tests and interventions...</Text>
      </View>
    ),
  },
  {
    title: 'Orders and Meds',
    content: (
      <View>
        <Text style={styles.text2}>• Orders: Review medical orders for relevant tests and interventions (e.g., chest X-ray, ABG)</Text>
        <Text style={styles.text2}>• Medications: Identify current medications and check for cardiopulmonary side effects...</Text>
      </View>
    ),
  },
  {
    title: 'Progress Notes and Advanced Directives',
    content: (
      <View>
        <Text style={styles.text2}>• Progress Notes: Review daily updates on patient condition...</Text>
        <Text style={styles.text2}>• DNR Status/Advance Directives: Understand patient wishes regarding resuscitation...</Text>
      </View>
    ),
  },
  {
    title: 'Physical Examination',
    content: (
      <View>
        <Text style={styles.text2}>• Key Components: Inspect chest for abnormalities (e.g., asymmetry, accessory muscle use)</Text>
        <Text style={styles.text2}>• Auscultate lung and heart sounds, noting abnormal findings...</Text>
      </View>
    ),
  },
];

// Quiz Slides Data
const quizSlides = [
  {
    title: 'Quiz - Patient History',
    question: "Which of the following is the primary purpose of evaluating a patient’s medical history in cardiopulmonary care?",
    options: [
      'A) To understand their overall health and identify possible risk factors',
      'B) To prescribe medications',
      'C) To determine the need for surgery',
      'D) To evaluate their social status',
    ],
    correctAnswer: 'A',
    feedback: 'Understanding a patient’s health history helps identify potential risks and plan treatment.',
  },
  {
    title: 'Quiz - Physical Examination',
    question: 'What is the key sign of hypoxia during a physical examination?',
    options: ['A) High fever', 'B) Cyanosis or confusion', 'C) Abnormal lung sounds', 'D) Swollen extremities'],
    correctAnswer: 'B',
    feedback: 'Cyanosis or confusion are common signs of hypoxia, indicating a lack of oxygen in the tissues.',
  },
  {
    title: 'Quiz - Respiratory Assessment',
    question: 'What test measures lung capacity during a physical examination?',
    options: ['A) Spirometry', 'B) X-ray', 'C) Pulmonary Function Test', 'D) CT Scan'],
    correctAnswer: 'A',
    feedback: 'Spirometry is a key test used to measure lung function and capacity.',
  },
];

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  const handleOptionSelect = (option: string) => {
    const correct = option === quizSlides[currentQuizIndex].correctAnswer;
    setSelectedOption(option);
    setIsAnswerCorrect(correct);
  };

  const handleNextLesson = () => {
    setSelectedOption(null);
    setIsAnswerCorrect(null);
    if (activeIndex < lessonSlides.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      alert('You have completed all lessons!');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const contentOffsetX = e.nativeEvent.contentOffset.x;
          const index = Math.floor(contentOffsetX / width);
          setActiveIndex(index);
        }}
      >
        {/* Lesson Content */}
        {lessonSlides.map((lesson, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{lesson.title}</Text>
            {lesson.image && <Image source={lesson.image} style={styles.cardImage} />}
            <View style={styles.cardContent}>
              {lesson.content}
            </View>
          </View>
        ))}

        {/* Quiz Content (Each lesson is followed by its quiz) */}
        {quizSlides.map((quiz, index) => (
          <View key={index} style={styles.quizcard}>
            <Text style={styles.cardTitle}>{quiz.title}</Text>
            <Text style={styles.cardTitle}>{quiz.question}</Text>
            {quiz.options.map((option, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.cardContent,
                  selectedOption === option && styles.selectedOption,
                  isAnswerCorrect === false && selectedOption === option && styles.incorrectOption,
                  isAnswerCorrect === true && selectedOption === option && styles.correctOption,
                ]}
                onPress={() => handleOptionSelect(option)}
              >
                <Text style={styles.quiztext}>{option}</Text>
              </TouchableOpacity>
            ))}
            {selectedOption && (
              <Text style={[styles.quiztext, isAnswerCorrect ? styles.correctFeedback : styles.incorrectFeedback]}>
                {quiz.feedback}
              </Text>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Indicators */}
      <View style={styles.indicatorContainer}>
        {lessonSlides.map((_, index) => (
          <View
            key={index}
            style={[styles.indicator, activeIndex === index && styles.activeIndicator]}
          />
        ))}
      </View>
    </View>
  );
};

export default CardSlider;
