import BottomTabBar from "@/components/bottomfloating";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Modal } from "react-native";
import { Swipeable, GestureHandlerRootView } from "react-native-gesture-handler";
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove, getFirestore } from "firebase/firestore";
import { useAuth } from "@/context/authContex";
import { useRouter } from "expo-router";

interface Lesson {
  id: number;
  title: string;
  content: string;
}

interface Module {
  id: number;
  name: string;
  description?: string;
  lessons?: Lesson[];
}

const ModulesScreen = () => {
  const { user } = useAuth();
  const [modulesData, setModulesData] = useState<Module[]>([]);
  const [availableModules, setAvailableModules] = useState<Module[]>([
    { id: 101, name: "Module 1 - Evaluation of Patient Data in Cardiopulmonary Care", description: "Objective: Understand how to evaluate and interpret various patient data in the context of the cardiopulmonary system." },
    { id: 102, name: "Module 2", description: "This is the description for Module 2.\nIt contains additional details." },
    { id: 103, name: "Module 3", description: "This is the description for Module 3.\nYou can add as many points as needed." },
  ]);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [showLessons, setShowLessons] = useState(false);

  const firestore = getFirestore();
  const router = useRouter();

  // Fetch assigned modules
  useEffect(() => {
    if (user) {
      const fetchAssignedModules = async () => {
        try {
          const userRef = doc(firestore, "users", user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const userData = userSnap.data();
            setModulesData(userData?.assignedModules || []);
          }
        } catch (error) {
          console.error("Error fetching assigned modules: ", error);
        }
      };

      fetchAssignedModules();
    }
  }, [user]);

  // Fetch lessons for selected module
  const fetchLessonsForModule = async (moduleId: number) => {
    try {
      const moduleRef = doc(firestore, "modules", moduleId.toString());
      const moduleSnap = await getDoc(moduleRef);

      if (moduleSnap.exists()) {
        const moduleData = moduleSnap.data();
        setSelectedModule({
          id: moduleId,
          name: moduleData.name || "Unnamed Module", // Ensure we have a name
          description: moduleData.description, // If description exists
          lessons: moduleData.lessons || [], // Default to empty array if no lessons
        });
        setShowLessons(true);
      }
    } catch (error) {
      console.error("Error fetching module lessons: ", error);
    }
  };

  // Handle assigning module
  const handleAssign = async (module: Module) => {
    if (!user) return;

    try {
      const userRef = doc(firestore, "users", user.uid);
      await updateDoc(userRef, {
        assignedModules: arrayUnion(module),
      });

      setModulesData((prev) => [...prev, module]);
      setAvailableModules((prev) => prev.filter((m) => m.id !== module.id));
      setSelectedModule(null);
    } catch (error) {
      console.error("Error assigning module: ", error);
    }
  };

  // Handle deleting assigned module
  const handleDelete = async (module: Module) => {
    if (!user) return;

    try {
      const userRef = doc(firestore, "users", user.uid);
      await updateDoc(userRef, {
        assignedModules: arrayRemove(module),
      });

      setModulesData((prev) => prev.filter((m) => m.id !== module.id));
      setAvailableModules((prev) => {
        if (!prev.some((m) => m.id === module.id)) {
          return [...prev, module];
        }
        return prev;
      });
    } catch (error) {
      console.error("Error deleting module: ", error);
    }
  };

  // Render right swipe actions
  const renderRightActions = (module: Module) => (
    <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(module)}>
      <Text style={styles.deleteButtonText}>Delete</Text>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.modulesSection}>
            <Text style={styles.sectionTitle}>Assigned Modules</Text>
            {modulesData.map((module) => (
              <Swipeable key={module.id} renderRightActions={() => renderRightActions(module)}>
                <TouchableOpacity onPress={() => fetchLessonsForModule(module.id)}>
                  <ModuleCard name={module.name} styles={styles} />
                </TouchableOpacity>
              </Swipeable>
            ))}
          </View>

          <View style={styles.modulesSection}>
            <Text style={styles.sectionTitle}>Available Modules</Text>
            {availableModules.map((module) => (
              <TouchableOpacity key={module.id} onPress={() => { setSelectedModule(module); setShowLessons(false); }}>
                <ModuleCard name={module.name} styles={styles} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* Modal for Module Assignment */}
      <Modal visible={selectedModule !== null} animationType="slide" transparent={true} onRequestClose={() => setSelectedModule(null)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedModule?.name}</Text>
            {showLessons && selectedModule?.lessons ? (
              <View>
                {selectedModule.lessons.map((lesson) => (
                  <View key={lesson.id}>
                    <Text style={styles.lessonTitle}>{lesson.title}</Text>
                    <Text style={styles.lessonContent}>{lesson.content}</Text>
                  </View>
                ))}
              </View>
            ) : (
              <Text style={styles.modalDescription}>{selectedModule?.description}</Text>
            )}
            <TouchableOpacity onPress={() => { handleAssign(selectedModule!); setShowLessons(false); }} style={styles.assignButton}>
              <Text style={styles.assignButtonText}>Assign</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedModule(null)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <BottomTabBar />
    </GestureHandlerRootView>
  );
};

// ModuleCard Component for displaying each module
const ModuleCard = ({ name, styles }: { name: string, styles: any }) => {
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
  lessonTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  lessonContent: {
    fontSize: 16,
    color: "#333",
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
