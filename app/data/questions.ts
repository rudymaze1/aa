const questions = {
    respiratory_basics: [
        { question: 'What is tidal volume?', options: ['500mL', '1L', '250mL', '750mL'], correct: '500mL', explanation: 'Tidal volume is the volume of air displaced during normal breathing.' },
        { question: 'What does PEEP stand for?', options: ['Positive End-Expiratory Pressure', 'Peak Expiratory Pressure', 'Partial Exhalation Pressure', 'Pulmonary End Pressure'], correct: 'Positive End-Expiratory Pressure', explanation: 'PEEP maintains pressure in the lungs to prevent alveolar collapse.' },
        { question: 'What is a normal respiratory rate for an adult?', options: ['8-12 bpm', '12-20 bpm', '20-30 bpm', '30-40 bpm'], correct: '12-20 bpm', explanation: 'The normal respiratory rate for a healthy adult is 12-20 breaths per minute.' },
        { question: 'What is the primary function of the respiratory system?', options: ['Gas exchange', 'Blood circulation', 'Digesting food', 'Producing energy'], correct: 'Gas exchange', explanation: 'The respiratory system facilitates oxygen and carbon dioxide exchange in the lungs.' },
        { question: 'Which muscle is primarily responsible for breathing?', options: ['Diaphragm', 'Trapezius', 'Deltoid', 'Rectus abdominis'], correct: 'Diaphragm', explanation: 'The diaphragm is the primary muscle that contracts during inhalation to allow airflow into the lungs.' },
      ],
      
      information_gathering: [
        { question: 'What is the first step in patient assessment?', options: ['Checking pulse', 'Obtaining history', 'Administering oxygen', 'Performing chest X-ray'], correct: 'Obtaining history', explanation: 'A thorough patient history provides crucial information for diagnosis.' },
        { question: 'Which test is commonly used to assess oxygenation in the blood?', options: ['Chest X-ray', 'Pulmonary Function Test', 'ABG', 'ECG'], correct: 'ABG', explanation: 'Arterial blood gas (ABG) analysis measures oxygen and CO₂ levels in the blood.' },
        { question: 'Which symptom is most commonly associated with respiratory distress?', options: ['Chest pain', 'Dyspnea', 'Nausea', 'Blurred vision'], correct: 'Dyspnea', explanation: 'Dyspnea (shortness of breath) is a common symptom of respiratory distress.' },
        { question: 'What is the purpose of a pulse oximeter?', options: ['Measure heart rate', 'Measure oxygen saturation', 'Detect lung infections', 'Measure blood pressure'], correct: 'Measure oxygen saturation', explanation: 'A pulse oximeter non-invasively measures blood oxygen saturation (SpO₂).' },
        { question: 'Which of these is NOT a respiratory assessment tool?', options: ['Spirometry', 'Chest auscultation', 'ECG', 'Capnography'], correct: 'ECG', explanation: 'ECG assesses heart function, not lung function.' },
      ],
    
      infection_prevention: [
        { question: 'What is the most effective way to prevent the spread of infection?', options: ['Wearing gloves', 'Hand hygiene', 'Using antibiotics', 'Sterilizing equipment'], correct: 'Hand hygiene', explanation: 'Proper handwashing is the most effective infection control method.' },
        { question: 'Which PPE is required when treating a patient with tuberculosis?', options: ['Surgical mask', 'N95 respirator', 'Goggles', 'Gloves'], correct: 'N95 respirator', explanation: 'TB is airborne, so an N95 respirator is required for protection.' },
        { question: 'Which method is best for sterilizing reusable respiratory equipment?', options: ['Alcohol wipes', 'Boiling water', 'Autoclaving', 'Soap and water'], correct: 'Autoclaving', explanation: 'Autoclaving uses high-pressure steam to sterilize medical equipment.' },
        { question: 'What is the primary purpose of droplet precautions?', options: ['Prevent airborne transmission', 'Protect against respiratory droplets', 'Avoid surface contamination', 'Prevent skin infections'], correct: 'Protect against respiratory droplets', explanation: 'Droplet precautions protect against infections spread through coughing or sneezing.' },
        { question: 'Which of these diseases requires airborne precautions?', options: ['Influenza', 'Tuberculosis', 'MRSA', 'C. difficile'], correct: 'Tuberculosis', explanation: 'TB spreads via airborne particles, requiring airborne precautions.' },
      ],
    
      ventilator_management: [
        { question: 'Which ventilator mode provides full support with every breath controlled?', options: ['SIMV', 'PSV', 'AC', 'CPAP'], correct: 'AC', explanation: 'Assist-Control (AC) mode delivers a set volume or pressure for every breath.' },
        { question: 'What does PEEP do in mechanical ventilation?', options: ['Increases tidal volume', 'Keeps alveoli open', 'Decreases oxygenation', 'Reduces airway resistance'], correct: 'Keeps alveoli open', explanation: 'PEEP prevents alveolar collapse and improves oxygenation.' },
        { question: 'Which parameter is most important to monitor in ventilated patients?', options: ['FiO₂', 'PEEP', 'ABG', 'VT'], correct: 'ABG', explanation: 'Arterial blood gas (ABG) analysis determines the effectiveness of ventilation.' },
        { question: 'What is the normal initial tidal volume setting for a ventilated patient?', options: ['3-5 mL/kg', '5-8 mL/kg', '8-10 mL/kg', '10-12 mL/kg'], correct: '5-8 mL/kg', explanation: 'A normal tidal volume setting is 5-8 mL/kg to avoid lung injury.' },
        { question: 'Which condition can result from excessive ventilator pressures?', options: ['Atelectasis', 'Barotrauma', 'Hypoxia', 'Respiratory alkalosis'], correct: 'Barotrauma', explanation: 'Excessive airway pressures can cause barotrauma, leading to alveolar rupture.' },
      ],
    
      oxygen_therapy: [
        { question: 'What is the normal FiO₂ of room air?', options: ['21%', '40%', '60%', '100%'], correct: '21%', explanation: 'Room air contains 21% oxygen under normal atmospheric conditions.' },
        { question: 'Which device delivers the highest concentration of oxygen?', options: ['Nasal cannula', 'Simple mask', 'Non-rebreather mask', 'Venturi mask'], correct: 'Non-rebreather mask', explanation: 'A non-rebreather mask delivers up to 90-100% oxygen.' },
        { question: 'At what flow rate should a nasal cannula be set?', options: ['1-6 L/min', '6-10 L/min', '10-15 L/min', '15-20 L/min'], correct: '1-6 L/min', explanation: 'A nasal cannula delivers oxygen at 1-6 L/min.' },
        { question: 'Which oxygen device delivers a precise FiO₂?', options: ['Simple mask', 'Venturi mask', 'Nasal cannula', 'Face tent'], correct: 'Venturi mask', explanation: 'The Venturi mask delivers a precise, fixed FiO₂ by controlling air entrainment.' },
        { question: 'Which condition is a risk of prolonged high-flow oxygen therapy?', options: ['Hypercapnia', 'Oxygen toxicity', 'Hypoxia', 'Apnea'], correct: 'Oxygen toxicity', explanation: 'Prolonged exposure to high oxygen levels can cause lung tissue damage.' },
      ],
  };
  
  export default questions; 