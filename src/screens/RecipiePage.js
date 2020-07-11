import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const RecipiePage = ({ navigation }) => {
  const item = navigation.getParam("recipie");
  const recipie = item.recipe;

  return (
    <View>
      <Text>Recipie page</Text>
      {recipie.ingredients.map((ingredient) => (
        <Text>{ingredient.text}</Text>
      ))}
    </View>
  );
};
export default RecipiePage;
