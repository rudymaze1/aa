import { useGlobalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const ScoreScreen = () => {
  const { score, totalQuestions } = useGlobalSearchParams(); 
  const { push } = useRouter(); // Use router to navigate to home

  const parsedScore = score ? parseInt(score as string, 10) : 0;
  const parsedTotalQuestions = totalQuestions ? parseInt(totalQuestions as string, 10) : 0;

  const handleGoHome = () => {
    push('/[home]'); // Navigate to the home screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Score</Text>
      <Text style={styles.scoreText}>{`${parsedScore}/${parsedTotalQuestions}`}</Text>

      {/* Encouraging message */}
      <Text style={styles.encouragingText}>
        {parsedScore === parsedTotalQuestions
          ? 'Perfect! You aced it!'
          : parsedScore >= parsedTotalQuestions / 2
          ? 'Great job! Keep it up!'
          : 'Good effort! Keep practicing, you\'ll get there!'}
      </Text>

      {/* Home Button */}
      <TouchableOpacity style={styles.homeButton} onPress={handleGoHome}>
        <Text style={styles.homeButtonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13002c',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  scoreText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 10,
  },
  encouragingText: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  homeButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
  },
  homeButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
