// VeterinarianSign.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";

const VeterinarianSign = ({ navigation }) => {
  const [name, setName] = useState("");
  const [vetId, setVetId] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSignup = () => {
    // Make an Axios request to register the veterinarian
    const veterinarian = {
      name: name,
      vetId: vetId,
      password: password,
      phoneNumber: phoneNumber,
    };

    axios
      .post("http://localhost:3000/registerVeterinarian", veterinarian)
      .then((response) => {
        console.log(response.data);
        Alert.alert("Registration successful for veterinarian");
        setName("");
        setVetId("");
        setPassword("");
        setPhoneNumber("");
        navigation.navigate("VeterinarianHomeScreen");
      })
      .catch((error) => {
        console.error("Error registering veterinarian", error);
        Alert.alert("Registration failed for veterinarian");
      });
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

export default VeterinarianSign;
