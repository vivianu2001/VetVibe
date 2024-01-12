// VeterinarianLoginScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const VeterinarianLoginScreen = () => {
  const [vetId, setVetId] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  // // useEffect hook to check the login status when the component mounts
  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       // Check if there is an authToken stored in AsyncStorage
  //       const token = await AsyncStorage.getItem("authToken");
  //       if (token) {
  //         // If authToken exists, replace the screen with "Pet Owner Home Screen" after a delay
  //         setTimeout(() => {
  //           navigation.replace("Pet Owner Home Screen");
  //         }, 400);
  //       }
  //     } catch (error) {
  //       console.log("Error checking login status", error);
  //     }
  //   };

  //   // Call the checkLoginStatus function
  //   checkLoginStatus();
  // }, []); // Empty dependency array ensures the effect runs only once after mount

  // Function to handle user login
  const handleLogin = () => {
    const veterinarian = {
      vetId: vetId,
      password: password,
    };

    // Send a login request to the server
    axios
      .post("http://localhost:3000/loginv", veterinarian)
      .then((response) => {
        // If login is successful, store authToken in AsyncStorage and navigate to "Pet Owner Home Screen"
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        // In VeterinarianLoginScreen.js after successful login
        navigation.navigate("Veterinarian Home Screen", {
          vetId: vetId,
        });
      })
      .catch((error) => {
        // If login fails, show an alert and log the error
        Alert.alert("Login error");
        console.log("Error during login", error);
      });
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
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 200,
  },
});

export default VeterinarianLoginScreen;
