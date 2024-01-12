// VeterinarianHomeScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import axios from "axios";

const VeterinarianHomeScreen = ({ route }) => {
  const { vetId } = route.params || {};
  const [vetData, setVetData] = useState({
    rate: 0,
    tips: [],
    availability: { canHelpNow: false, location: "" },
  });
  useEffect(() => {
    const fetchVetInformation = async () => {
      try {
        if (!vetId) {
          // Handle the case when vetId is undefined
          console.error("Veterinarian ID is undefined");
          return;
        }

        const response = await axios.get(
          `http://localhost:3000/veterinarian/${vetId}`
        );
        const vetData = response.data;
        setVetData(vetData);
      } catch (error) {
        console.error("Error fetching vet information", error);
        console.log("Axios response:", error.response);
      }
    };

    fetchVetInformation();
  }, [vetId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Veterinarian!</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Rate:</Text>
        <Text style={styles.info}>{vetData.rate}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Availability:</Text>
        <Text style={styles.info}>
          {vetData.availability.canHelpNow ? "Available" : "Not Available"}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.info}>{vetData.availability.location}</Text>
      </View>
      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Tips:</Text>
        {vetData.tips.map((tip, index) => (
          <View key={index} style={styles.tip}>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text>{tip.content}</Text>
          </View>
        ))}
      </View>
      <Button
        title="Add Tip"
        onPress={() => {
          // Implement the logic to add a tip
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
    marginRight: 8,
  },
  info: {
    flex: 1,
  },
  tipsContainer: {
    marginTop: 16,
  },
  tipsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  tip: {
    marginBottom: 8,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
});

export default VeterinarianHomeScreen;
