import { View, Text, Image } from "react-native";
import styles from "../Style/global";

const StoryItem = ({ user }) => {
  return (
    <View style={styles.storyItem}>
      <Image
        source={{
          uri: user.photo,
        }}
        style={styles.profileImage}
      />
      <Text>{user.name}</Text>
    </View>
  );
};

export default StoryItem;
