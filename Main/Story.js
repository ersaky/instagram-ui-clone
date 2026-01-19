import { View, Text, Image } from "react-native";
import styles from "../Style/global";
import StoryItem from "./StoryItem";

const users = [
  {
    id: 1,
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "UserName1",
  },
  {
    id: 2,
    photo:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=464&auto=format&fit=crop&crop=face",
    name: "UserName2",
  },
  {
    id: 3,
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=387&auto=format&fit=crop&crop=face",
    name: "UserName3",
  },
  {
    id: 4,
    photo:
      "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?q=80&w=387&auto=format&fit=crop&crop=face",
    name: "UserName4",
  },
  {
    id: 5,
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "UserName5",
  },
];

const Story = () => {
  return (
    <View style={styles.story}>
      {users.map((obj) => (
        <StoryItem key={obj.id} user={obj} />
      ))}
    </View>
  );
};

export default Story;
