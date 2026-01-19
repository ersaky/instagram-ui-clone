import { View, Text } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import styles from "../Style/global";

const Header = () => {
  return (
    <View style={styles.header}>
      <AntDesign name="plus" size={24} color="black" />
      <Text style={styles.title}>Instagramx</Text>
      <Ionicons name="heart-outline" size={28} color="black" />
    </View>
  );
};

export default Header;
