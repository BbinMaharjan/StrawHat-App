import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Avatar } from "react-native-paper";

const UserHomeScreen = (props) => {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.image}
    >
      <View style={styles.screen}>
        <Avatar.Image
          size={160}
          style={{
            resizeMode: "cover",
            backgroundColor: "transprant",
          }}
          source={require("../assets/images/student.png")}
        />
        <Text
          style={{
            fontWeight: "bold",
            letterSpacing: 2,
            marginTop: 10,
            fontSize: 20,
            color: "gray",
          }}
        >
          Wellcome To HomeScreen!!!
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  screen: {
    flex: 1,
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
export default UserHomeScreen;
