import { StatusBar } from "expo-status-bar";
import {Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/dashboard">Dashboard</Link>
      <StatusBar style="auto" />
    </View>
  );
}
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
