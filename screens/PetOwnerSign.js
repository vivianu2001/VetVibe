// PetOwnerSign.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PetOwnerSign = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your Pet Owner signup logic

    // Dummy logic for demonstration purposes
    if (name && email && password) {
      // Pet Owner signup successful
      // Navigate to Pet Owner home screen or perform any other actions
      navigation.navigate('PetOwnerHomeScreen');
    } else {
      // Handle signup error (show an alert, etc.)
      console.error('Invalid registration information');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Register as Pet Owner</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
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

export default PetOwnerSign;
