// SignupScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SignupScreen = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [id, setId] = useState("");

  const handleSignup = () => {
    // Implement your signup logic here
    if (selectedRole === "Veterinarian") {
      // Check the database for the entered ID
      // You can use Firebase, a server, or any other method for verification
      const isIdValid = checkDatabaseForId(id);

      if (isIdValid) {
        // ID is valid, navigate to the appropriate screen
        navigation.navigate("Sign up Veterinarian");
      } else {
        // ID is not valid, handle accordingly (show an alert, etc.)
        console.error("Invalid ID");
      }
    } else {
      // For Pet Owner or other roles, handle signup accordingly
      // (e.g., navigate to Pet Owner home screen)
      navigation.navigate("Sign up Owner");
    }
  };

  const checkDatabaseForId = (enteredId) => {
    // Simulate a database check for the entered ID
    // Replace this with your actual database verification logic
    const validIds = ["vet123", "vet456", "vet789"];
    return validIds.includes(enteredId);
  };

  return (
    <View style={styles.container}>
      <Text>Select your role:</Text>
      <TouchableOpacity onPress={() => setSelectedRole("PetOwner")}>
        <Text>{selectedRole === "PetOwner" ? "✅" : "◻️"} Pet Owner</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedRole("Veterinarian")}>
        <Text>
          {selectedRole === "Veterinarian" ? "✅" : "◻️"} Veterinarian
        </Text>
      </TouchableOpacity>

      {selectedRole === "Veterinarian" && (
        <TextInput
          placeholder="Enter your ID"
          value={id}
          onChangeText={setId}
          style={styles.input}
        />
      )}

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

export default SignupScreen;
