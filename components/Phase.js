import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Card from "./Card";
import Button from "./Button";
import { Button as RnButton } from "react-native";

const Phase = ({ phase, setPhases, phases }) => {
  const handleEditCard = async (cardId, title, description) => {
    const updatedPhases = phase.cards?.map((p) => {
      if (p.id === cardId) {
        return {
          id: cardId,
          description: description,
          title: title,
        };
      }
      return p;
    });

    const updatedata = phases.map((item) => {
      if (item.id === phase.id) {
        item.cards = updatedPhases;
        return item;
      }
      return item;
    });

    setPhases(updatedata);
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{phase.title}</Text>
          <RnButton title="..." color={"#fff"} />
        </View>

        <ScrollView>
          {phase.cards?.map((card) => (
            <Card key={card.id} card={card} onEdit={handleEditCard} />
          ))}
          <Button title={"+ Add card"} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 300,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  option: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Phase;
