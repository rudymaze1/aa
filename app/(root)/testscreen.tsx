import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const TestScreen = () => {
  // Define valid test categories
  const { testType } = useLocalSearchParams<{ testType: keyof typeof questions }>();

  // Define questions object with types
  const questions = {
    respiratory_basics: [
      { question: 'What is tidal volume?', options: ['500mL', '1L', '250mL', '750mL'], correct: '500mL', explanation: 'Tidal volume is the volume of air displaced during normal breathing.' },
      { question: 'What is PEEP?', options: ['Positive End-Expiratory Pressure', 'Peak Expiratory Pressure', 'Partial Exhalation Pressure', 'Pulmonary End Pressure'], correct: 'Positive End-Expiratory Pressure', explanation: 'PEEP is used to keep airways open by maintaining pressure at the end of exhalation.' },
    ],
  };

  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [feedbackShown, setFeedbackShown] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedbackState, setFeedbackState] = useState<{ [key: number]: boolean }>({});


  const handleAnswerPress = (index: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [index]: answer }));
    setFeedbackState((prev) => ({ ...prev, [index]: true }));  
  };
  

  const handleSwipe = () => {
    if (feedbackShown) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % questions[testType].length);
      setFeedbackShown(false); // Reset feedback state for next question
    }
  };

  const renderItem = ({ item, index }: { item: { question: string; options: string[]; correct: string; explanation: string }; index: number }) => (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{item.question}</Text>
      {item.options.map((opt: string, i: number) => (
        <TouchableOpacity
          key={i}
          style={[
            styles.optionButton,
            // Apply selectedOption only if the user has selected this option
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
            {selectedAnswers[index] === item.correct ? 'Correct!' : 'Incorrect'}
          </Text>
          <Text style={styles.explanationText}>{item.explanation}</Text>
        </View>
      )}
    </View>
  );
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{testType.replace('_', ' ')}</Text>
      <FlatList
        data={questions[testType]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleSwipe}
        getItemLayout={(_, index) => ({
          length: 300, // Adjust based on the size of your items
          offset: 320 * index,
          index,
        })}
        initialScrollIndex={currentIndex}
      />
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#13002c',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'capitalize',
  },
  questionContainer: {
    top:100,
    height:500,
    width:350,
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#13002c',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"white",
  },
  optionButton: {
    padding: 12,
    marginVertical: 5,
    borderBottomColor:"white",
    borderBottomWidth:1,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color:"white",
  },
  selectedOption: {
    backgroundColor: '#4CAF50',
    borderRadius:50,
    alignItems: 'center',
  },
  feedbackContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  explanationText: {
    fontSize: 14,
    marginTop: 5,
    color: '#555',
  },
});
