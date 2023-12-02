import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header/index";
import Homes from "../components/Home/index";
import { ScrollView } from "react-native-gesture-handler";

interface CategoriesObj {
  img: string;
  english: {
    title: "";
  };
}

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView >
        <Header />
        <Homes />
        <Homes />
        <Homes />
        <Homes />
        <Homes />
        <Homes />

      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
