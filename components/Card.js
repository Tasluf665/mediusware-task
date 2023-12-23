import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Card = ({ card, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(card.title);
  const [editedDescription, setEditedDescription] = useState(card.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(card.id, editedTitle, editedDescription);
    setIsEditing(false);
  };
  return (
    <View style={styles.container}>
      {isEditing ? (
        <>
          <TextInput
            style={styles.editInput}
            value={editedTitle}
            onChangeText={(text) => setEditedTitle(text)}
          />
          <TextInput
            style={styles.editInput}
            value={editedDescription}
            onChangeText={(text) => setEditedDescription(text)}
          />
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.saveButton}>Save</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={styles.taskTitleContainer}>
            <Text style={styles.title}>{card.title}</Text>
            <TouchableOpacity onPress={handleEdit}>
              <FontAwesome5 name="edit" size={16} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>{card.description}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: "#ffffff",
    width: "100%",
  },
  title: {
    fontSize: 16,
  },
  description: {
    fontSize: 12,
  },
  taskTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Card;
