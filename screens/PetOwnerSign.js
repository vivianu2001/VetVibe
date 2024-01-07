import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Alert } from "react-native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const PetOwnerSign = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle user signup
  const handleSignup = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    // Send a signup request to the server
    axios
      .post("http://localhost:3000/register", user)
      .then((response) => {
        console.log(response);
        // Show an alert for successful registration
        Alert.alert("Registration successful");
        // Clear input fields
        setName("");
        setEmail("");
        setPassword("");
        // Navigate to "PetownerHomeScreen"
        navigation.navigate("PetownerHomeScreen");
      })
      .catch((error) => {
        // Show an alert for failed registration and log the error
        Alert.alert("Registration failed");
        console.log("Error during registration", error);
      });
  };

  // Render the signup screen UI
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

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginVertical: 10,
    width: "80%",
  },
});

// Export the PetOwnerSign component
export default PetOwnerSign;
