import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  FlatList,
} from "react-native";
import axios from "axios";

const AddTipScreen = ({ route, navigation }) => {
  const { vetId } = route.params || {};
  const [newTip, setNewTip] = useState({
    title: "",
    content: "",
  });
  const [tips, setTips] = useState([]);

  const addNewTip = async () => {
    if (!newTip.title || !newTip.content) {
      Alert.alert("Error", "Tip Title and Content cannot be empty.");
      return;
    }

    try {
      await axios.post(
        `http://localhost:3000/veterinarian/tips/${vetId}`,
        newTip
      );

      setNewTip({ title: "", content: "" });

      Alert.alert("Tip Added", "Your tip has been added successfully.");
      navigation.goBack();
    } catch (error) {
      console.error("Error adding tip:", error);
      Alert.alert("Error", "Failed to add tip. Please try again.");
    }
  };

  const renderTipItem = ({ item }) => (
    <View style={styles.tip}>
      <Text style={styles.tipTitle}>{item.title}</Text>
      <Text>{item.content}</Text>
      <Button title="Edit" onPress={() => handleEditTip(item)} />
    </View>
  );

  const handleEditTip = (tip) => {
    // Implement navigation to an EditTipScreen with the selected tip information
    // You can pass the tip information as a parameter to the EditTipScreen
    // Example: navigation.navigate("EditTipScreen", { vetId, tip });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Tip</Text>
      <FlatList
        data={tips}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTipItem}
      />
      <TextInput
        style={styles.input}
        placeholder="Tip Title"
        value={newTip.title}
        onChangeText={(text) => setNewTip({ ...newTip, title: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Tip Content"
        value={newTip.content}
        onChangeText={(text) => setNewTip({ ...newTip, content: text })}
      />
      <Button title="Add Tip" onPress={addNewTip} />
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
  tip: {
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 8,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
});

export default AddTipScreen;
