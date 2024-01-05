// SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVeterinarian, setIsVeterinarian] = useState(false);

  const handleSignup = () => {
    // Perform signup logic, including additional steps for veterinarians if isVeterinarian is true
    // After signup, navigate to the appropriate home screen based on the user's role
    navigation.navigate(isVeterinarian ? 'VeterinarianHome' : 'PetOwnerHome');
  };

  return (
    <View>
      <Text>Signup Screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleSignup}>
        <Text>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsVeterinarian(!isVeterinarian)}>
        <Text>{isVeterinarian ? 'I am not a Veterinarian' : 'I am a Veterinarian'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
