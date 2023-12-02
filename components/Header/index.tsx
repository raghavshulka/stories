import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.box}>
          <Feather name="menu" size={26} color="black" />
          <Text style={
             styles.text
          } >Stories</Text>
        </View>
        <View style={styles.box}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <AntDesign name="hearto" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:10,

  },
  box:{
    flexDirection: "row",
    gap:10,
    alignItems: 'center',


  },
  text:{
    fontWeight:"bold",
   fontSize: 17
  }
 
});
