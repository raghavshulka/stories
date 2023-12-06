import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header/index";
import Homes from "../components/Home/index";
import { FlatList } from "react-native-gesture-handler";

interface CategoriesObj {
  img: string;
  english: {
    title: "";
  };
}

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={["1", "2", "3", "4", "5", "6"]}
        renderItem={({ item, index }) => (
          <Homes key={index} />
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
