import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FIREBASE_AUTH, FIREBASE_DB } from '@/config/firebaseconfig';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from '@firebase/auth';

const Registration = () => {
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [school, setSchool] = useState("");
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async () => {
    if (email !== confirmEmail) {
      setError('Emails do not match');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      const user = userCredential.user;

      await setDoc(doc(FIREBASE_DB, "users", user.uid), {
        username,
        lastName,
        school,
        email,
        uid: user.uid,
      });

      console.log("User registered successfully:", username, lastName, school, email);
      router.replace("/(home)");
    } catch (error) {
      console.error("Error registering user:", error);
      setError("Error registering. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Register</Text>

        {error && <Text style={styles.error}>{error}</Text>}

        <Ionicons name='person-outline' size={20} color="white" style={styles.icon} />
        <TextInput style={styles.input} placeholder="First Name" value={username} onChangeText={setUsername} placeholderTextColor="#1b9399" />

        <Ionicons name='person-outline' size={20} color="white" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} placeholderTextColor="#1b9399" />

        <Ionicons name='school-outline' size={20} color="white" style={styles.icon} />
        <TextInput style={styles.input} placeholder="School" value={school} onChangeText={setSchool} placeholderTextColor="#1b9399" />

        <Ionicons name='mail-outline' size={20} color="white" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" placeholderTextColor="#1b9399" />

        <Ionicons name='mail-outline' size={20} color="white" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Confirm Email" value={confirmEmail} onChangeText={setConfirmEmail} keyboardType="email-address" placeholderTextColor="#1b9399" />

        <Ionicons name='lock-closed-outline' size={20} color="white" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry placeholderTextColor="#1b9399" />

        <Ionicons name='lock-closed-outline' size={20} color="white" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry placeholderTextColor="#1b9399" />


        <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
          {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.buttonText}>Register</Text>}
        </TouchableOpacity>

        <TouchableOpacity style={styles.link} onPress={() => router.replace("/Login")}>
          <Text style={styles.linkText}>Already registered?</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#44449C',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 40,
    fontSize: 16,
    borderBottomColor: 'white',
    color: 'white',
  },
  button: {
    backgroundColor: '#6CB6AA',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'underline',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  icon: {
    top:30,
    left:10,
  },
});

export default Registration;
