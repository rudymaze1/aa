import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Button, Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const TestScreen = () => {
  const route = useRoute();
  
  // Define a type for valid test categories
  type TestType = keyof typeof questions;

  const { testType } = route.params as { testType: TestType }; // ✅ Type safety applied
  const { testscreen } = useLocalSearchParams(); // ✅ Read dynamic route parameter

  const questions = {
    respiratory_basics: [
      { question: 'What is tidal volume?', options: ['500mL', '1L', '250mL', '750mL'], correct: '500mL' },
      { question: 'What is PEEP?', options: ['Positive End-Expiratory Pressure', 'Peak Expiratory Pressure', 'Partial Exhalation Pressure', 'Pulmonary End Pressure'], correct: 'Positive End-Expiratory Pressure' },
    ],
    information_gathering: [
      { question: 'What does a blood gas tell us?', options: ['Oxygenation', 'Ventilation', 'Acid-Base Status', 'All of the above'], correct: 'All of the above' },
      { question: 'What is normal pH?', options: ['7.35-7.45', '7.25-7.35', '7.45-7.55', '7.15-7.25'], correct: '7.35-7.45' },
    ],
    ventilator_management: [
      { question: 'What mode provides full ventilatory support?', options: ['AC', 'SIMV', 'CPAP', 'BiPAP'], correct: 'AC' },
    ],
    oxygen_therapy: [
      { question: 'What is the FiO2 of room air?', options: ['21%', '50%', '40%', '60%'], correct: '21%' },
    ],
    lung_mechanics: [
      { question: 'What is compliance?', options: ['Lung elasticity', 'Airway resistance', 'Lung volume change per unit pressure', 'Oxygen transport'], correct: 'Lung volume change per unit pressure' },
    ],
    acid_base_balance: [
      { question: 'What organ primarily regulates pH?', options: ['Lungs', 'Kidneys', 'Heart', 'Liver'], correct: 'Kidneys' },
    ],
    patient_assessment: [
      { question: 'Which vital sign is most important for respiratory distress?', options: ['Heart Rate', 'Oxygen Saturation', 'Blood Pressure', 'Temperature'], correct: 'Oxygen Saturation' },
    ],
    neonatal_respiratory_care: [
      { question: 'What is a normal neonatal respiratory rate?', options: ['20-40', '30-60', '40-80', '15-30'], correct: '30-60' },
    ],
    chest_imaging: [
      { question: 'What does a white-out on X-ray indicate?', options: ['Pleural Effusion', 'Pneumonia', 'Pneumothorax', 'ARDS'], correct: 'ARDS' },
    ],
    advanced_airway_management: [
      { question: 'What is the correct ET tube size for an adult male?', options: ['6.0', '7.5', '8.0-8.5', '9.0'], correct: '8.0-8.5' },
    ],
  };

  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});

  const handleAnswerPress = (index: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [index]: answer }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{testType.replace('_', ' ')}</Text>
      <FlatList
        data={questions[testType] || []}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{item.question}</Text>
            {item.options.map((opt, i) => (
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
          </View>
        )}
      />
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'capitalize',
  },
  questionContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: 'white',
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
  },
  optionButton: {
    padding: 12,
    marginVertical: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
  },
  selectedOption: {
    backgroundColor: '#4CAF50',
  },
});

