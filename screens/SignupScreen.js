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
  const [isIdValid, setIsIdValid] = useState(false); // State to track ID validation

  const handleSignup = async () => {
    // Implement your signup logic here
    if (selectedRole === "Veterinarian") {
      const validId = await checkDatabaseForId(id);

      if (validId) {
        // ID is valid, navigate to the appropriate screen
        navigation.navigate("Sign up Veterinarian", { vetId: id });
      } else {
        // ID is not valid, set state and handle accordingly
        setIsIdValid(false);
        console.error("Invalid ID");
      }
    } else {
      // For Pet Owner or other roles, handle signup accordingly
      // (e.g., navigate to Pet Owner home screen)
      navigation.navigate("Sign up Owner");
    }
  };

  const checkDatabaseForId = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/checkVetId/${id}`);
      const data = await response.json();
      const isValid = data.isValid;

      // Set the validation state
      setIsIdValid(isValid);

      return isValid;
    } catch (error) {
      console.error("Error checking vet ID:", error);
      // Handle the error as needed
      return false;
    }
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
        <View>
          <TextInput
            placeholder="Enter your ID"
            value={id}
            onChangeText={setId}
            style={styles.input}
          />
        </View>
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
