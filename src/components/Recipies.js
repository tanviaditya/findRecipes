import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const Recipies = ({ recipie }) => {
  return (
    <View style={styles.recipie}>
      <Text style={styles.title}>{recipie.label}</Text>
      <Text style={styles.calories}>
        Calories: {Math.round(recipie.calories)}
      </Text>
      {recipie.ingredients.map((ingredient) => (
        <Text>{ingredient.text}</Text>
      ))}
      <Image style={styles.image} source={{ uri: recipie.image }} />
      <TouchableOpacity onPress={() => Linking.openURL(recipie.url)}>
        <Text style={{ color: "blue" }}>VIEW COMPLETE RECIPE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  recipie: {
    borderWidth: 2,
    borderColor: "grey",
    margin: 2,
    borderRadius: 3,
    backgroundColor: "#f4f6ff",
  },
  image: {
    width: 250,
    height: 220,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  calories: {
    fontStyle: "italic",
  },
});
export default Recipies;
