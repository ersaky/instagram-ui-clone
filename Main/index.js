import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../Style/global";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import Footer from "./Footer";
import Posts from "./Posts";
import Story from "./Story";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Story />
          <Posts />
          <Footer />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
