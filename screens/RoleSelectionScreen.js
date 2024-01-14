import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";

// Import the paw image
import PawImage from "/Users/vivi/VetVibe/assets/paw.jpg";

const RoleSelectionScreen = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  // Function to handle role selection and navigate to the corresponding screen
  const handleRoleSelection = (role) => {
    setSelectedRole(role);

    if (role === "PetOwner") {
      navigation.navigate("Pet Owner Login");
    } else if (role === "Veterinarian") {
      navigation.navigate("Veterinarian Login");
    }
  };

  return (
    <View style={styles.container}>
      {/* VetVibe header with paw image */}
      <View style={styles.header}>
        <Image source={PawImage} style={styles.pawImage} resizeMode="contain" />
        <Text style={styles.title}>VetVibe</Text>
      </View>

      {/* Login buttons for Pet Owner and Veterinarian */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#ff8c00" }]} // orange color
        onPress={() => handleRoleSelection("PetOwner")}
      >
        <Text style={styles.buttonText}>Login as Pet Owner</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#ff8c00" }]} // orange color
        onPress={() => handleRoleSelection("Veterinarian")}
      >
        <Text style={styles.buttonText}>Login as Veterinarian</Text>
      </TouchableOpacity>

      {/* Signup link */}
      <TouchableOpacity
        style={styles.signupLink}
        onPress={() => navigation.navigate("Sign up")}
      >
        <Text style={styles.signupLinkText}>Need an account? Sign up now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  header: {
    alignItems: "center",
    marginBottom: 180,
  },
  title: {
    fontSize: 40,
    color: "#333333",
    marginTop: 10,
  },
  pawImage: {
    width: 100,
    height: 100,
  },
  button: {
    backgroundColor: "#ff8c00",
    padding: 15,
    borderRadius: 8,
    marginBottom: 25,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#ff8c00",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  signupLink: {
    marginTop: 20,
  },
  signupLinkText: {
    color: "#3498db",
    fontSize: 16,
  },
});

export default RoleSelectionScreen;
