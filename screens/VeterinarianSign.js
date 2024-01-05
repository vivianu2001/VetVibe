// VeterinarianSign.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VeterinarianSign = ({ navigation }) => {
  const [name, setName] = useState('');
  const [vetId, setVetId] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignup = () => {
    // Implement your Veterinarian signup logic here
    // For example, you might use Firebase Auth, your server, or other authentication services

    // Dummy logic for demonstration purposes
    if (name && vetId && password && phoneNumber) {
      // Veterinarian signup successful
      // Navigate to Veterinarian home screen or perform any other actions
      navigation.navigate('VeterinarianHomeScreen');
    } else {
      // Handle signup error (show an alert, etc.)
      console.error('Invalid registration information');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Register as Veterinarian</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Veterinarian ID"
        value={vetId}
        onChangeText={setVetId}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSignup}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginVertical: 10,
    width: '80%',
  },
});

export default VeterinarianSign;
