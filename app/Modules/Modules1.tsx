import React, { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const lessonSlides = [
    {
        type: 'lesson',
        title: 'Introduction',
        objectiveTitle: 'Objective:',
        objectiveContent: 'Understand how to evaluate and interpret various patient data in the context of the cardiopulmonary system, with the aim of improving clinical decision-making and patient outcomes.',
        audienceTitle: 'Audience',
        audienceContent: 'Medical professionals, respiratory therapists, nurses, or anyone involved in patient care...',
        overviewTitle: 'Overview:',
        overviewContent: 'This module will explore the key elements of a patient’s medical record, including history, physical examination, diagnostic tests, and other clinical data that help evaluate the cardiopulmonary system. Special attention will be paid to interpreting critical data that influences diagnosis and treatment decisions.This module will explore the key elements of a patient’s medical record, including history, physical examination...',
        image: require('../../assets/images/stethimg.png'),
    },
    {
        type: 'lesson',
        lessontitle: 'Patient History',
        lessoncontent: (
          <View>
            <Text>Patient history provides critical context for understanding their current cardiopulmonary health. Key components include:</Text>
            <Text>• <Text style={{ fontWeight: 'bold'}}>History of Present Illness (HPI):</Text> What brought the patient in for care? Are there any symptoms related to cardiopulmonary function (e.g., shortness of breath, chest pain, palpitations)?</Text>
            <Text>• <Text style={{ fontWeight: 'bold' }}>Timeline of symptoms:</Text> Sudden onset (e.g., heart attack, pulmonary embolism) vs. chronic progression (e.g., COPD, asthma).</Text>
            <Text>• <Text style={{ fontWeight: 'bold' }}>Orders:</Text> Review medical orders for relevant tests and interventions (e.g., echocardiogram, chest X-ray, lab tests).</Text>
            <Text>• <Text style={{ fontWeight: 'bold' }}>Medication Reconciliation:</Text> Identify current medications and check for any known cardiopulmonary side effects or interactions (e.g., beta-blockers, ACE inhibitors, diuretics).</Text>
            <Text>• <Text style={{ fontWeight: 'bold' }}>Progress Notes:</Text> Review daily updates on patient condition and responses to treatment (e.g., improvements in oxygenation, changes in lung function).</Text>
            <Text>• <Text style={{ fontWeight: 'bold' }}>DNR Status/Advance Directives:</Text> Understand the patient’s wishes regarding resuscitation and end-of-life care (e.g., do-not-resuscitate order, preferences on mechanical ventilation).</Text>
            <Text>• <Text style={{ fontWeight: 'bold' }}>Social, Family, and Medical History:</Text> Consider family history of cardiopulmonary diseases (e.g., heart disease, asthma, COPD). Social factors like smoking, alcohol consumption, or occupational exposures (e.g., asbestos, pollution) can influence respiratory health.</Text>
          </View>
        ),
      },
      {
        type: 'lesson',
        lessontitle: 'haommmynoyyy',
      },
  { 
    type: 'lesson',
    lessontitle: 'Physical Examination', 
    lessoncontent: 'Key Focus Areas:\n- Inspect and palpate the chest\n- Auscultate lung and heart sounds\n- Check for signs of hypoxia\n- Evaluate vital signs\n\nA physical examination provides valuable information to assess a patient’s respiratory status and overall health.',
  },
];

const quizSlides = [
  { 
    type: 'quiz', 
    question: "Which of the following is the primary purpose of evaluating a patient’s medical history in cardiopulmonary care?", 
    options: ['A) To understand their overall health and identify possible risk factors', 'B) To prescribe medications', 'C) To determine the need for surgery', 'D) To evaluate their social status'],
    correctAnswer: 'A',
    feedback: 'Understanding a patient’s health history helps identify potential risks and plan treatment.',
  },
  { 
    type: 'quiz', 
    question: "What is the key sign of hypoxia during a physical examination?", 
    options: ['A) High fever', 'B) Cyanosis or confusion', 'C) Abnormal lung sounds', 'D) Swollen extremities'], 
    correctAnswer: 'B',
    feedback: 'Cyanosis or confusion are common signs of hypoxia, indicating a lack of oxygen in the tissues.',
  },
  { 
    type: 'quiz', 
    question: "What test measures the lung capacity during a physical examination?", 
    options: ['A) Spirometry', 'B) X-ray', 'C) Pulmonary Function Test', 'D) CT Scan'], 
    correctAnswer: 'A',
    feedback: 'Spirometry is a key test used to measure lung function and capacity.',
  },

];

const Module1 = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [feedbackState, setFeedbackState] = useState<{ [key: number]: { correct: boolean, feedback: string } }>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const allSlides = [...lessonSlides, ...quizSlides, { type: 'conclusion' }];
  const totalSlides = allSlides.length;

  const handleAnswerPress = (index: number, answer: string) => {
    const quizIndex = index - lessonSlides.length; // Adjusting index to reference quizSlides
    const correct = quizSlides[quizIndex].correctAnswer === answer;
    setSelectedAnswers((prev) => ({ ...prev, [index]: answer }));
    setFeedbackState((prev) => ({
      ...prev,
      [index]: { correct, feedback: quizSlides[quizIndex].feedback },
    }));
  };

  const handleSwipe = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < totalSlides) {
      setCurrentIndex(nextIndex);
    }
  };

  const renderSlideItem = ({ item, index }: { item: {  lessoncontent:string;  lessontitle?: string; content:string; type: string; title?: string; objectiveTitle?: string; objectiveContent?: string; audienceTitle?: string; audienceContent?: string; overviewTitle?: string; overviewContent?: string; question?: string; options?: string[]; correctAnswer?: string; feedback?: string }; index: number }) => {    if (item.type === 'lesson') {
      return (
        
        <View style={styles.Lessoncard}>
          <ScrollView style={styles.cardContent}>
          <Image source={item.image} style={{height:300,width:390,resizeMode:"cover", borderTopLeftRadius:40, borderTopRightRadius:40,}} />
          <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.titles}>{item.objectiveTitle}</Text>
            <Text style={styles.descript}>{item.objectiveContent}</Text>
            <Text style={styles.titles}>{item.overviewTitle}</Text>
            <Text style={styles.descript}>{item.overviewContent}</Text>
            <Text style={styles.lessontitle}>{item.lessontitle}</Text>
            <Text style={styles.lessoncontent}>{item.lessoncontent}</Text>










            <Text style={styles.descriptiontext}>{item.content}</Text>
            

          </ScrollView>
        </View>
      );
    } else if (item.type === 'quiz') {
      const quizIndex = index - lessonSlides.length; // Adjusting index to reference quizSlides
      return (
        
        <View style={styles.card}>
          <Text style={styles.questionText}>{item.question}</Text>
          {item.options?.map((opt, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.optionButton,
                selectedAnswers[index] === opt ? styles.selectedOption : {},
              ]}
              onPress={() => handleAnswerPress(index, opt)}
            >
              <Text style={styles.optionText}>{opt}</Text>
            </TouchableOpacity>
          ))}
          {feedbackState[index] && selectedAnswers[index] && (
            <View style={styles.feedbackContainer}>
              <Text style={styles.feedbackText}>
                {feedbackState[index].correct ? 'Correct!' : 'Incorrect'}
              </Text>
              <Text style={styles.feedbackText}>{feedbackState[index].feedback}</Text>
            </View>
          )}
        </View>
      );
    } else if (item.type === 'conclusion') {
      return (
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Conclusion</Text>
          <ScrollView style={styles.cardContent}>
            <Text style={styles.feedbackText}>
              You've completed the module! Congratulations on reviewing the content and answering the quizzes.
            </Text>
          </ScrollView>
        </View>
      );
    }
    return null;
  };

  return (
    
    <View style={styles.container}>
        
      <FlatList
        data={allSlides}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderSlideItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleSwipe}
        initialScrollIndex={currentIndex} // Set initial index based on current index state
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    flatList: {
      width: '100%', // Ensure the FlatList takes the full width of the container
      marginBottom: 20,
    },
    Lessoncard:{
        width:400,
        padding:5,
        right:4,
        bottom:40,
        height:"100%",
    },
    card: {
      top:80,
      width: 390, // Fixed width for the card
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 15,
      marginVertical: 10, // Consistent vertical margin
      bottom:30,
      right:20,
    },
    cardTitle: {
        left:10,
      bottom:30,
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 15,
      color: 'green', // Ensuring the title text is white
    },
    cardContent: {
      flex: 1,
      marginTop: 10,
      fontSize: 16,
      color: 'green',
      lineHeight: 24,
    },
    questionText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
      color: 'red', // Ensuring quiz question text is white
    },
    optionButton: {
      padding: 15,
      marginVertical: 8,
      backgroundColor: '#4CAF50',
      borderRadius: 10,
      alignItems: 'center',
    },
    optionText: {
      fontSize: 18,
      color: 'red', // Ensuring option text is white
    },
    selectedOption: {
      backgroundColor: '#FFC107',
    },
    feedbackContainer: {
      marginTop: 10,
      padding: 10,
      backgroundColor: 'red',
      borderRadius: 8,
    },
    feedbackText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'red', // Ensuring feedback text is white
    },
    contenttext:{
        fontSize:13,
        bottom:30,
    },
    titles:{
        fontSize:20,
        left:10,
        fontWeight:"500",
        bottom:32,
    },
    descript:{
        fontSize:14,
        bottom:30,
        padding:10,
        marginBottom:20,
        
    },
    descriptiontext:{
        bottom:200,
        left:10,
    },
    lessontitle:{
        position:"absolute",
        top:90,
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        color: 'green', // Ensuring the title text is white
    },
    lessoncontent:{
        position:"absolute",
        top:140,
    },
    
  });
  

export default Module1;

