// VeterinarianLoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const VeterinarianLoginScreen = () => {
  const [vetId, setVetId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your authentication logic for veterinarians using vetId and password
    // For example, you might use Firebase Auth, your own server, or other authentication services.
  };

  return (
    <View style={styles.container}>
      <Text>Veterinarian Login</Text>
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
      <Button
        title="Login"
        onPress={handleLogin}
        color="#FFA500" // Orange color
      />
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 200,
  },
});

export default VeterinarianLoginScreen;
