// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
// } from "react-native";
// import { Swipeable, GestureHandlerRootView } from "react-native-gesture-handler";

// interface Module {
//   id: number;
//   name: string;
//   description?: string;
// }

// const ModulesScreen = () => {
//   const [modulesData, setModulesData] = useState<Module[]>([
//     { id: 1, name: "Module 1" },
//     { id: 2, name: "Module 2" },
//     { id: 3, name: "Module 3" },
//   ]);

//   const [availableModules, setAvailableModules] = useState<Module[]>([
//     { id: 101, name: "Module 1", description: "x-ray.\nabg.\noxygen.\n..." },
//     { id: 102, name: "Module 2", description: "This is the description for Module 2.\nIt contains additional details." },
//     { id: 103, name: "Module 3", description: "This is the description for Module 3.\nYou can add as many points as needed." },
//   ]);

//   const handleDelete = (id: number) => {
//     setModulesData((prev) => prev.filter((module) => module.id !== id));
//   };

//   const renderRightActions = (id: number) => (
//     <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(id)}>
//       <Text style={styles.deleteButtonText}>Delete</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaView style={styles.container}>
//         <ScrollView>
//           {/* Graph Section */}
//           <View style={styles.graphContainer}>
//             <Text style={styles.graphTitle}>Graph Placeholder</Text>
//             <View style={styles.graphPlaceholder} />
//           </View>

//           {/* Current Modules */}
//           <View style={styles.modulesSection}>
//             <Text style={styles.sectionTitle}>Assigned Modules</Text>
//             <View style={styles.moduleContainer}>
//               {modulesData.map((module) => (
//                 <Swipeable key={module.id} renderRightActions={() => renderRightActions(module.id)}>
//                   <ModuleCard name={module.name} styles={styles} />
//                 </Swipeable>
//               ))}
//             </View>
//           </View>

//           {/* Available Modules */}
//           <View style={styles.modulesSection}>
//             <Text style={styles.sectionTitle}>Available Modules</Text>
//             <View style={styles.moduleContainer}>
//               {availableModules.map((module) => (
//                 <ModuleCard
//                   key={module.id}
//                   name={module.name}
//                   description={module.description}
//                   styles={styles} // Pass the whole styles object
//                 />
//               ))}
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// };

// interface ModuleCardProps {
//   name: string;
//   description?: string;
//   styles: any;  // Declare styles explicitly in the prop type
// }

// const ModuleCard = ({ name, description, styles }: ModuleCardProps) => {
//   const formatDescription = (description: string) => {
//     return description
//       .split("\n")
//       .map((line, index) => (
//         <Text key={index} style={styles.bulletPointText}>
//           • {line}
//         </Text>
//       ));
//   };

//   return (
//     <TouchableOpacity style={styles.card}>
//       <Text style={styles.cardText}>{name}</Text>
//       {description && <View style={styles.descriptionContainer}>{formatDescription(description)}</View>}
//     </TouchableOpacity>
//   );
// };

// export default ModulesScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",  // Set the background color to blue
//   },
//   bulletPointText: {
//     color: "#333",
//     fontSize: 14,
//     marginTop: 5,
//   },
//   descriptionContainer: {
//     marginBottom: 5,
//     paddingLeft: 10,
//   },
//   graphContainer: {
//     height: 200,
//     backgroundColor: "#ddd",
//     marginBottom: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//   },
//   graphTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   graphPlaceholder: {
//     width: "100%",
//     height: "80%",
//     backgroundColor: "#ccc",
//     borderRadius: 8,
//   },
//   modulesSection: {
//     marginBottom: 30,
//     backgroundColor: "white",
//     borderRadius: 10,
//     padding: 10,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#333",
//   },
//   moduleContainer: {
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   availableModuleCard: {
//     backgroundColor: "#F9DDDD",
//     padding: 18,
//     borderRadius: 10,
//     width: "100%",
//     marginBottom: 15,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 5,
//     height: 120,
//   },
//   card: {
//     backgroundColor: "#F9DDDD",
//     padding: 20,
//     borderRadius: 10,
//     marginBottom: 15,
//     width: 350,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   cardText: {
//     color: "#333",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   deleteButton: {
//     backgroundColor: "#ff3b30",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "80%",
//     width: 80,
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   deleteButtonText: {
//     color: "white",
//     fontWeight: "bold",
//   },
// });



// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
//   Modal,
// } from "react-native";
// import { Swipeable, GestureHandlerRootView } from "react-native-gesture-handler";

// interface Module {
//   id: number;
//   name: string;
//   description?: string;
// }

// const ModulesScreen = () => {
//   const [modulesData, setModulesData] = useState<Module[]>([
//     { id: 1, name: "Module 1" },
//     { id: 2, name: "Module 2" },
//     { id: 3, name: "Module 3" },
//   ]);

//   const [availableModules, setAvailableModules] = useState<Module[]>([
//     { id: 101, name: "Module 1- Evaluation of Patient Data in Cardiopulmonary Care", description: "Objective: Understand how to evaluate and interpret various patient data in the context of the cardiopulmonary system. \nAudience: Medical professionals, respiratory therapists, nurses, or anyone involved in patient care related to the cardiopulmonary system. Overview: This module will explore the key elements of a patient’s medical record, including history, physical examination, diagnostic tests, and other clinical data that help evaluate the cardiopulmonary system." },
//     { id: 102, name: "Module 2", description: "This is the description for Module 2.\nIt contains additional details." },
//     { id: 103, name: "Module 3", description: "This is the description for Module 3.\nYou can add as many points as needed." },
//   ]);

//   const [selectedModule, setSelectedModule] = useState<Module | null>(null);

//   const handleDelete = (id: number) => {
//     setModulesData((prev) => prev.filter((module) => module.id !== id));
//   };

//   const renderRightActions = (id: number) => (
//     <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(id)}>
//       <Text style={styles.deleteButtonText}>Delete</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaView style={styles.container}>
//         <ScrollView>
//           <View style={styles.graphContainer}>
//             <Text style={styles.graphTitle}>Graph Placeholder</Text>
//             <View style={styles.graphPlaceholder} />
//           </View>
          
//           <View style={styles.modulesSection}>
//             <Text style={styles.asssectionTitle}>Assigned Modules</Text>
//             {modulesData.map((module) => (
//               <Swipeable key={module.id} renderRightActions={() => renderRightActions(module.id)}>
//                 <ModuleCard name={module.name} styles={styles} />
//               </Swipeable>
//             ))}
//           </View>

//           <View style={styles.modulesSection}>
//             <Text style={styles.sectionTitle}>Available Modules for your program </Text>
//             {availableModules.map((module) => (
//               <TouchableOpacity key={module.id} onPress={() => setSelectedModule(module)}>
//                 <ModuleCard name={module.name} styles={styles} />
//               </TouchableOpacity>
//             ))}
//           </View>
//         </ScrollView>
//       </SafeAreaView>

//       <Modal
//         visible={!!selectedModule}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setSelectedModule(null)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>{selectedModule?.name}</Text>
//             <Text style={styles.modalDescription}>{selectedModule?.description}</Text>
//             <TouchableOpacity onPress={() => setSelectedModule(null)} style={styles.closeButton}>
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </GestureHandlerRootView>
//   );
// };

// interface ModuleCardProps {
//   name: string;
//   styles: any;
// }

// const ModuleCard = ({ name, styles }: ModuleCardProps) => {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.cardText}>{name}</Text>
//     </View>
//   );
// };

// export default ModulesScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   graphContainer: {
//     height: 200,
//     backgroundColor: "#ddd",
//     marginBottom: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//   },
//   graphTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   graphPlaceholder: {
//     width: "100%",
//     height: "80%",
//     backgroundColor: "#ccc",
//     borderRadius: 8,
//   },
//   modulesSection: {
//     marginBottom: 30,
//     padding: 10,
//   },
//   sectionTitle: {
//     left:70,
//     marginBottom: 10,
//     color:"#8181E0",
//   },
//   asssectionTitle:{
//     left:130,
//     color:"#8181E0",
//   },
//   card: {
//     backgroundColor: "#F9DDDD",
//     padding: 20,
//     borderRadius: 10,
//     marginBottom: 15,
//     width: 350,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   cardText: {
//     color: "#333",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0,0,0,0.5)",
//   },
//   modalContent: {
//     width: 300,
//     padding: 20,
//     backgroundColor: "white",
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   modalDescription: {
//     fontSize: 16,
//     color: "#333",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   closeButton: {
//     backgroundColor: "#ff3b30",
//     padding: 10,
//     borderRadius: 5,
//   },
//   closeButtonText: {
//     color: "white",
//     fontWeight: "bold",
//   },
//   deleteButton: {
//     backgroundColor: "#ff3b30",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "80%",
//     width: 80,
//     borderRadius: 10,
//   },
//   deleteButtonText: {
//     color: "white",
//     fontWeight: "bold",
//   },
// });



import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import { Swipeable, GestureHandlerRootView } from "react-native-gesture-handler";

interface Module {
  id: number;
  name: string;
  description?: string;
}

const ModulesScreen = () => {
  const [modulesData, setModulesData] = useState<Module[]>([]);
  const [availableModules, setAvailableModules] = useState<Module[]>([
    { id: 101, name: "Module 1- Evaluation of Patient Data in Cardiopulmonary Care", description: "Objective: Understand how to evaluate and interpret various patient data in the context of the cardiopulmonary system. \nAudience: Medical professionals, respiratory therapists, nurses, or anyone involved in patient care related to the cardiopulmonary system. Overview: This module will explore the key elements of a patient’s medical record, including history, physical examination, diagnostic tests, and other clinical data that help evaluate the cardiopulmonary system." },
{ id: 102, name: "Module 2", description: "This is the description for Module 2.\nIt contains additional details." },
    { id: 103, name: "Module 3", description: "This is the description for Module 3.\nYou can add as many points as needed." },
  ]);

  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  const handleDelete = (id: number) => {
    setModulesData((prev) => {
      const removedModule = prev.find((module) => module.id === id);
      if (removedModule) {
        setAvailableModules((prevAvailable) => [...prevAvailable, removedModule]);
      }
      return prev.filter((module) => module.id !== id);
    });
  };

  const handleAssign = (module: Module) => {
    setModulesData((prev) => [...prev, { id: module.id, name: module.name }]);
    setAvailableModules((prev) => prev.filter((m) => m.id !== module.id));
    setSelectedModule(null);
  };

  const renderRightActions = (id: number) => (
    <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(id)}>
      <Text style={styles.deleteButtonText}>Delete</Text>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.graphContainer}>
            <Text style={styles.graphTitle}>Graph Placeholder</Text>
            <View style={styles.graphPlaceholder} />
          </View>
          
          <View style={styles.modulesSection}>
            <Text style={styles.sectionTitle}>Assigned Modules</Text>
            {modulesData.map((module) => (
              <Swipeable key={module.id} renderRightActions={() => renderRightActions(module.id)}>
                <ModuleCard name={module.name} styles={styles} />
              </Swipeable>
            ))}
          </View>

          <View style={styles.modulesSection}>
            <Text style={styles.sectionTitle}>Available Modules</Text>
            {availableModules.map((module) => (
              <TouchableOpacity key={module.id} onPress={() => setSelectedModule(module)}>
                <ModuleCard name={module.name} styles={styles} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
      
      <Modal
        visible={!!selectedModule}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setSelectedModule(null)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedModule?.name}</Text>
            <Text style={styles.modalDescription}>{selectedModule?.description}</Text>
            <TouchableOpacity onPress={() => handleAssign(selectedModule!)} style={styles.assignButton}>
              <Text style={styles.assignButtonText}>Assign</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedModule(null)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </GestureHandlerRootView>
  );
};

interface ModuleCardProps {
  name: string;
  styles: any;
}

const ModuleCard = ({ name, styles }: ModuleCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{name}</Text>
    </View>
  );
};

export default ModulesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  graphContainer: {
    height: 200,
    backgroundColor: "#ddd",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  graphTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  graphPlaceholder: {
    width: "100%",
    height: "80%",
    backgroundColor: "#ccc",
    borderRadius: 8,
  },
  modulesSection: {
    marginBottom: 30,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  card: {
    backgroundColor: "#F9DDDD",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: 350,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 16,
  },
  assignButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 5,
  },
  assignButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#ff3b30",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    width: 80,
    borderRadius: 10,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#ff3b30",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
