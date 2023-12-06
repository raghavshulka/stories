import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();

  const image = {
    uri: "https://images.unsplash.com/photo-1601513445506-2ab0d4fb4229?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <TouchableOpacity  activeOpacity={0.6} style={styles.container} onPress={() => navigation.navigate("SelectStory")}>


      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
        >
        <Text style={styles.text}>Dark Moon Story</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    paddingTop:10,
    paddingBottom:20,
  
  },
  image: {
  
    width: 370,
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
});
