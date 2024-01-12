import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const EditPetProfileScreen = ({ route, navigation }) => {
  const [activeTab, setActiveTab] = useState("petInfo"); // petInfo or medicalHistory
  const [petName, setPetName] = useState(route.params.petName || "");
  const [animalType, setAnimalType] = useState(route.params.animalType || "");
  const [age, setAge] = useState(route.params.age || "");
  const [gender, setGender] = useState(route.params.gender || "");
  const [lastVaccinationDate, setLastVaccinationDate] = useState(
    route.params.lastVaccinationDate || ""
  );
  const [lastVetVisit, setLastVetVisit] = useState(
    route.params.lastVetVisit || ""
  );
  const [medications, setMedications] = useState(
    route.params.medications || ""
  );
  const [allergies, setAllergies] = useState(route.params.allergies || "");
  const [petImage, setPetImage] = useState("https://placekitten.com/200/200"); // Default pet image
  const [medicalHistoryImage, setMedicalHistoryImage] = useState(
    "https://example.com/medical_history_image.png"
  ); // Default medical history image

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const TabButton = ({ tab, title }) => (
    <TouchableOpacity
      style={[styles.tabButton, activeTab === tab && styles.activeTab]}
      onPress={() => handleTabPress(tab)}
    >
      <Text style={styles.tabButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const saveChanges = () => {
    // Save changes locally (You can update the state using a state management solution here)
    // For now, just navigate back with the updated parameters
    navigation.navigate("PetProfile", {
      updatedPetName: petName,
      updatedAnimalType: animalType,
      updatedAge: age,
      updatedGender: gender,
      lastVaccinationDate: lastVaccinationDate,
      lastVetVisit: lastVetVisit,
      medications: medications,
      allergies: allergies,
      updatedPetImage: petImage,
    });
  };

  const handleImagePicker = () => {
    // Logic to open image picker and update petImage state
    // You need to implement the image picker functionality here
    // Example:
    // openImagePicker().then((selectedImage) => setPetImage(selectedImage));
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TabButton tab="petInfo" title="Pet Info" />
        <TabButton tab="medicalHistory" title="Medical History" />
      </View>
      {activeTab === "petInfo" && (
        <View>
          <TouchableOpacity onPress={handleImagePicker}>
            <Image source={{ uri: petImage }} style={styles.petImage} />
          </TouchableOpacity>
          <View>
            <Text style={styles.label}>Pet's Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Pet's Name"
              value={petName}
              onChangeText={(text) => setPetName(text)}
            />

            <Text style={styles.label}>Animal Type:</Text>
            <TextInput
              style={styles.input}
              placeholder="Animal Type"
              value={animalType}
              onChangeText={(text) => setAnimalType(text)}
            />

            <Text style={styles.label}>Age:</Text>
            <TextInput
              style={styles.input}
              placeholder="Age"
              value={age}
              onChangeText={(text) => setAge(text)}
            />

            <Text style={styles.label}>Gender:</Text>
            <TextInput
              style={styles.input}
              placeholder="Gender"
              value={gender}
              onChangeText={(text) => setGender(text)}
            />
          </View>
        </View>
      )}

      {activeTab === "medicalHistory" && (
        <View>
          <TouchableOpacity onPress={handleImagePicker}>
            <Image source={{ uri: petImage }} style={styles.petImage} />
          </TouchableOpacity>

          <View>
            <Text style={styles.label}>Last Vaccination Date:</Text>
            <TextInput
              style={styles.input}
              placeholder="Last Vaccination Date"
              value={lastVaccinationDate}
              onChangeText={(text) => setLastVaccinationDate(text)}
            />

            <Text style={styles.label}>Last Vet Visit:</Text>
            <TextInput
              style={styles.input}
              placeholder="Last Vet Visit"
              value={lastVetVisit}
              onChangeText={(text) => setLastVetVisit(text)}
            />

            <Text style={styles.label}>Medications:</Text>
            <TextInput
              style={styles.input}
              placeholder="Medications"
              value={medications}
              onChangeText={(text) => setMedications(text)}
            />

            <Text style={styles.label}>Allergies:</Text>
            <TextInput
              style={styles.input}
              placeholder="Allergies"
              value={allergies}
              onChangeText={(text) => setAllergies(text)}
            />
          </View>
        </View>
      )}

      <Button title="Save Changes" onPress={saveChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "#FFFFFF", // White
  },
  tabsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#FFA500", // Bright orange
  },
  tabButtonText: {
    fontSize: 16,
  },
  input: {
    height: 40,
    width: "100%", // Updated to span the entire width
    borderColor: "#FFA500",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 20, // Added to make it round
    backgroundColor: "#FFFFFF", // White
  },
  petImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default EditPetProfileScreen;
