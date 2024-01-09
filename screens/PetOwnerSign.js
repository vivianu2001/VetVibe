import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Alert, Image } from "react-native"; // Import Image component
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const PetOwnerSign = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  // Function to handle user signup
  const handleSignup = () => {
    const user = {
      name: name,
      email: email,
      password: password,
      profilePicture: profilePicture,
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
        setProfilePicture(null);
        // Navigate to "PetownerHomeScreen"
        navigation.navigate("PetownerHomeScreen");
      })
      .catch((error) => {
        // Show an alert for failed registration and log the error
        Alert.alert("Registration failed");
        console.log("Error during registration", error);
      });
  };

  // Function to handle profile picture selection
  const pickProfilePicture = async () => {
    // Request permission to access the device's photo library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === "granted") {
      // Launch the image picker
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        // Set the selected image URI to the profile picture state
        if (result.assets && result.assets.length > 0) {
          const selectedAsset = result.assets[0];

          setProfilePicture(selectedAsset.uri);
        }
      }
    } else {
      Alert.alert(
        "Permission denied",
        "Permission to access the photo library was denied."
      );
    }
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

      {/* Display the selected profile picture */}
      {profilePicture && (
        <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
      )}

      <TouchableOpacity onPress={pickProfilePicture}>
        <Text>Select Profile Picture</Text>
      </TouchableOpacity>
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
  profilePicture: {
    width: 100,
    height: 100,
    marginVertical: 10,
    borderRadius: 50, // Set borderRadius to make it round
  },
});

// Export the PetOwnerSign component
export default PetOwnerSign;
