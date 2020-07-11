import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Recipies from "../components/Recipies";
import SearchBar from "../components/SearchBar";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const APP_ID = "6fa53ac6";
  const APP_KEY = "9ef9440493e1bc83de8f29d783e40036";

  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getRecipies("chicken");
  }, []);

  const getRecipies = async (text) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${text}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    // console.log(data.hits);
    setRecipies(data.hits);
  };
  return (
    <ScrollView style={styles.container}>
      <SearchBar
        search={search}
        onTermChange={(newTerm) => setSearch(newTerm)}
        onTermSubmit={() => getRecipies(search)}
      ></SearchBar>
      {/* <Text>{search}</Text> */}
      <View style={styles.listRecipie}>
        {recipies.map((recipie) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("RecipiePage", { recipie })}
          >
            <Recipies recipie={recipie.recipe} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffcb74",
  },
  listRecipie: {
    marginVertical: 30,
  },
});
export default HomeScreen;
