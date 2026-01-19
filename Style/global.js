import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
  },
  story: {
    height: 120,
    flexDirection: "row",
    gap: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  storyItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  posts: {
    flex: 1,
    backgroundColor: "black",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "red",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  title: {
    fontSize: 24,
  },
});

export default styles;
