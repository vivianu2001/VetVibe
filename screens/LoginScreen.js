// LoginScreen.js

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate a successful login
    // For a real login, use authentication logic (e.g., Firebase)
    const isLoggedIn = true;

    if (isLoggedIn) {
      // Navigate to the Home screen (replace 'Home' with your desired screen name)
      navigation.navigate('Home');
    } else {
      // Handle login error (show an alert, etc.)
      console.error('Login error: Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        leftIcon={<Icon name="email" size={24} color="black" />}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        leftIcon={<Icon name="lock" size={24} color="black" />}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default LoginScreen;
