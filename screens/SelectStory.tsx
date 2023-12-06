import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Story from "../components/StoryCard/Story";

export default function SelectStory(navigation: any) {
  const image = {
    uri: "https://images.unsplash.com/photo-1601513445506-2ab0d4fb4229?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{ height: 270 }}
        source={image}
        resizeMode="cover"
      >
        <Ionicons
          onPress={() => navigation.goBack("Home")}
          name="arrow-back-circle-outline"
          size={40}
          color="white"
          style={{ padding: 10 }}
        />
      </ImageBackground>
      <View>
        <Story />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
