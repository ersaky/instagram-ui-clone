import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../Style/global";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Ionicons name="home-outline" size={28} color="black" />
      <Ionicons name="search-outline" size={28} color="black" />
      <Ionicons name="add-circle-outline" size={28} color="black" />
      <Ionicons name="heart-outline" size={28} color="black" />
      <Ionicons name="person-circle-outline" size={28} color="black" />
    </View>
  );
};

export default Footer;
