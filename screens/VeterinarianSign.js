// VeterinarianSign.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
const VeterinarianSign = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [vetId, setVetId] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  // useEffect to set the vetId from the route parameters
  useEffect(() => {
    if (route.params && route.params.vetId) {
      setVetId(route.params.vetId);
    }
  }, [route.params]);

  // Function to handle veterinarian signup
  const handleSignup = () => {
    // Create a veterinarian object with the entered information
    const veterinarian = {
      name: name,
      vetId: vetId,
      password: password,
      phoneNumber: phoneNumber,
      profilePicture: profilePicture,
    };

    // Make an Axios request to register the veterinarian
    axios
      .post("http://localhost:3000/registerVeterinarian", veterinarian)
      .then((response) => {
        console.log(response.data);
        // Show an alert for successful registration
        Alert.alert("Registration successful for veterinarian");
        // Clear input fields
        setName("");
        setVetId("");
        setPassword("");
        setPhoneNumber("");
        setProfilePicture(null);
        // Navigate to "VeterinarianHomeScreen"
        navigation.navigate("Veterinarian Home Screen", {
          vetId: veterinarian.vetId,
        });
      })
      .catch((error) => {
        console.error("Error registering veterinarian", error);
        // Show an alert for failed registration and log the error
        Alert.alert("Registration failed for veterinarian");
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

  // Render the veterinarian signup screen UI
  return (
    <View style={styles.container}>
      <Text>Register as Veterinarian</Text>
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
        placeholder="Veterinarian ID"
        value={vetId}
        onChangeText={setVetId} // Allow changing vetId if needed
        style={styles.input}
        editable={false} // Disable editing vetId in this screen
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

// Export the VeterinarianSign component
export default VeterinarianSign;
