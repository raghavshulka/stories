import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { horrorStories } from "../../constants/data";

export default function Story() {
  return (
    <View style={styles.list}>
      <FlatList
        data={horrorStories}
        renderItem={({ item, index }) => (
          <View style={styles.container} key={index}>
            <Text style={styles.list}>Story {item.english.title}</Text>
            <Text style={styles.list1}>{item.english.story}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 12,
    padding: 20,
    borderRadius: 5,
    elevation: 12,
    backgroundColor: "#F0C6C0",
  },
  list: {
    fontSize: 18,
    fontWeight: "500",
    alignSelf: "center",
    textTransform: "uppercase",
    paddingBottom: 10,
    paddingTop: 15,
  },
  list1: {
    fontSize: 15,
    fontWeight: "400",
  },
});
