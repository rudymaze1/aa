import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';
import questions from '../data/questions';

const TestScreen = () => {
  const { testType } = useLocalSearchParams<{ testType: keyof typeof questions }>();
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedbackState, setFeedbackState] = useState<{ [key: number]: boolean }>({});
  const router = useRouter();

  const handleAnswerPress = (index: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [index]: answer }));
    setFeedbackState((prev) => ({ ...prev, [index]: true }));
  };

  const handleSwipe = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex === questions[testType].length) {
      const score = Object.values(selectedAnswers).reduce((acc, answer, index) => {
        const correctAnswer = questions[testType][index].correct;
        return answer === correctAnswer ? acc + 1 : acc;
      }, 0);

      router.push(`/ScoreScreen?score=${score}&totalQuestions=${questions[testType].length}`);
    } else {
      setCurrentIndex(nextIndex);
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
          length: 300,
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
    top: 100,
    height: 500,
    width: 350,
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
    color: 'white',
  },
  optionButton: {
    padding: 12,
    marginVertical: 5,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: 'white',
  },
  selectedOption: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
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
