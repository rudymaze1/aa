// import React, { useState } from 'react';
// import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
// import { Audio } from 'expo-av';
// import { Ionicons } from '@expo/vector-icons';

// const breathSounds = [
//     { 
//         id: '1', 
//         title: 'Vesicular', 
//         description: 'Normal breath sounds, soft and low-pitched, heard over most lung fields. Normal finding; absence may indicate pneumonia or pleural effusion.',
//         soundFile: require('../../assets/sounds/clear.mp3') 
//       },
//       { 
//         id: '2', 
//         title: 'Bronchial', 
//         description: 'Louder, higher-pitched sounds heard over the trachea and large bronchi. May indicate pneumonia if heard in lung periphery.',
//         soundFile: require('../../assets/sounds/bronchial.mp3') 
//       },
//       { 
//         id: '3', 
//         title: 'Bronchovesicular', 
//         description: 'Medium-pitched sounds heard over the main bronchi, a mix of vesicular and bronchial. Normal over large airways; abnormal if heard in lung periphery (suggests consolidation).',
//         soundFile: require('../../assets/sounds/bronchovesicular.mp3') 
//       },
//       { 
//         id: '4', 
//         title: 'Crackles (Rales)', 
//         description: 'Discontinuous, popping sounds heard during inspiration, associated with fluid in the lungs. Common in pneumonia, pulmonary edema, heart failure, and interstitial lung disease.',
//         soundFile: require('../../assets/sounds/crackles.mp3') 
//       },
//       { 
//         id: '5', 
//         title: 'Wheezes', 
//         description: 'High-pitched musical sounds caused by narrowed airways, often in asthma or COPD. Associated with asthma, COPD, bronchitis, and airway obstruction.',
//         soundFile: require('../../assets/sounds/wheezes.mp3') 
//       },
//       { 
//         id: '6', 
//         title: 'Rhonchi', 
//         description: 'Low-pitched, snoring-like sounds caused by mucus or secretions in the airways. Common in chronic bronchitis, COPD, and pneumonia.',
//         soundFile: require('../../assets/sounds/rhonchi.mp3') 
//       },
//       { 
//         id: '7', 
//         title: 'Stridor', 
//         description: 'High-pitched, harsh sound heard during inspiration, indicating upper airway obstruction. Seen in croup, epiglottitis, foreign body aspiration, and tracheal stenosis.',
//         soundFile: require('../../assets/sounds/stridor.mp3') 
//       },
//       { 
//         id: '8', 
//         title: 'Pleural Friction Rub', 
//         description: 'Grating, leathery sound caused by inflamed pleural surfaces rubbing together. Occurs in pleurisy, pulmonary embolism, and pleural effusion.',
//         soundFile: require('../../assets/sounds/pleural_friction_rub.mp3') 
//       }
//     ];

// const BreathSoundsList = () => {
//     const [sound, setSound] = useState<Audio.Sound | null>(null);
//     const [isPlaying, setIsPlaying] = useState(false);
  
//     const playSound = async (soundFile: any) => {
//       if (sound) {
//         await sound.unloadAsync();
//       }
  
//       const { sound: newSound } = await Audio.Sound.createAsync(soundFile);
//       setSound(newSound);
  
//       // Set the playback status update before playing
//       newSound.setOnPlaybackStatusUpdate((status) => {
//         if (status.isLoaded && status.didJustFinish) {
//           setIsPlaying(false);
//         }
//       });
  
//       await newSound.playAsync();
//       setIsPlaying(true);
//     };
  
//     const pauseSound = async () => {
//       if (sound) {
//         await sound.pauseAsync();
//         setIsPlaying(false);
//       }
//     };
  
//     const toggleSound = async (soundFile: any) => {
//       if (isPlaying) {
//         pauseSound();
//       } else {
//         await playSound(soundFile);
//       }
//     };

  

//   return (
    
//     <SafeAreaView style={styles.container}>
//         <View style={styles.titleContainer}>
//         <Text style={styles.realtitle}>Breath Sounds</Text>
//         <Text style={styles.subtitle}>
//             Breath sounds are the noises produced by the movement of air through the respiratory tract. They can be classified as normal or abnormal and provide valuable information about lung function and possible pathologies.
//         </Text>
//         </View>
//       <FlatList
//         data={breathSounds}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <View style={styles.textContainer}>
//               <Text style={styles.title}>• {item.title}</Text>
//               <Text style={styles.description}>{item.description}</Text>
//             </View>
//             <TouchableOpacity style={styles.playButton} onPress={() => toggleSound(item.soundFile)}>
//               <Ionicons name={isPlaying ? "pause-circle" : "play-circle"} size={30} color="#81b0ff" />
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1C2735',
//     padding: 20,
//   },
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#2A3B4E',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 0, height: 3 },
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   description: {
//     fontSize: 14,
//     color: '#ddd',
//     marginTop: 5,
//   },
//   playButton: {
//     padding: 5,
//   },
//   titleContainer: {
//     top:40,
//     marginBottom: 55,
//     paddingHorizontal: 10,
//   },
//   realtitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#ddd',
//   },
// });

// export default BreathSoundsList;


import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const breathSounds = [
  { 
    id: '1', 
    title: 'Vesicular', 
    description: 'Normal breath sounds, soft and low-pitched, heard over most lung fields. Normal finding; absence may indicate pneumonia or pleural effusion.',
    soundFile: require('../../assets/sounds/clear.mp3') 
  },
  { 
    id: '2', 
    title: 'Bronchial', 
    description: 'Louder, higher-pitched sounds heard over the trachea and large bronchi. May indicate pneumonia if heard in lung periphery.',
    soundFile: require('../../assets/sounds/bronchial.mp3') 
  },
  { 
    id: '3', 
    title: 'Bronchovesicular', 
    description: 'Medium-pitched sounds heard over the main bronchi, a mix of vesicular and bronchial. Normal over large airways; abnormal if heard in lung periphery (suggests consolidation).',
    soundFile: require('../../assets/sounds/bronchovesicular.mp3') 
  },
  { 
    id: '4', 
    title: 'Crackles (Rales)', 
    description: 'Discontinuous, popping sounds heard during inspiration, associated with fluid in the lungs. Common in pneumonia, pulmonary edema, heart failure, and interstitial lung disease.',
    soundFile: require('../../assets/sounds/crackles.mp3') 
  },
  { 
    id: '5', 
    title: 'Wheezes', 
    description: 'High-pitched musical sounds caused by narrowed airways, often in asthma or COPD. Associated with asthma, COPD, bronchitis, and airway obstruction.',
    soundFile: require('../../assets/sounds/wheezes.mp3') 
  },
  { 
    id: '6', 
    title: 'Rhonchi', 
    description: 'Low-pitched, snoring-like sounds caused by mucus or secretions in the airways. Common in chronic bronchitis, COPD, and pneumonia.',
    soundFile: require('../../assets/sounds/rhonchi.mp3') 
  },
  { 
    id: '7', 
    title: 'Stridor', 
    description: 'High-pitched, harsh sound heard during inspiration, indicating upper airway obstruction. Seen in croup, epiglottitis, foreign body aspiration, and tracheal stenosis.',
    soundFile: require('../../assets/sounds/stridor.mp3') 
  },
  { 
    id: '8', 
    title: 'Pleural Friction Rub', 
    description: 'Grating, leathery sound caused by inflamed pleural surfaces rubbing together. Occurs in pleurisy, pulmonary embolism, and pleural effusion.',
    soundFile: require('../../assets/sounds/pleural_friction_rub.mp3') 
  }
];

const BreathSoundsList = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [playingSoundId, setPlayingSoundId] = useState<string | null>(null);

  const playSound = async (soundFile: any, soundId: string) => {
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
      setPlayingSoundId(null);
    }

    const { sound: newSound } = await Audio.Sound.createAsync(soundFile);
    setSound(newSound);
    setPlayingSoundId(soundId);

    newSound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        setPlayingSoundId(null);
      }
    });

    await newSound.playAsync();
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setPlayingSoundId(null);
    }
  };

  const toggleSound = async (soundFile: any, soundId: string) => {
    if (playingSoundId === soundId) {
      pauseSound();
    } else {
      await playSound(soundFile, soundId);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.realtitle}>Breath Sounds</Text>
        <Text style={styles.subtitle}>
          Breath sounds are the noises produced by the movement of air through the respiratory tract. They can be classified as normal or abnormal and provide valuable information about lung function and possible pathologies.
        </Text>
      </View>
      <FlatList
        data={breathSounds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>• {item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <TouchableOpacity style={styles.playButton} onPress={() => toggleSound(item.soundFile, item.id)}>
              <Ionicons name={playingSoundId === item.id ? "pause-circle" : "play-circle"} size={30} color="#81b0ff" />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C2735',
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A3B4E',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#ddd',
    marginTop: 5,
  },
  playButton: {
    padding: 5,
  },
  titleContainer: {
    top: 40,
    marginBottom: 55,
    paddingHorizontal: 10,
  },
  realtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
  },
});

export default BreathSoundsList;
