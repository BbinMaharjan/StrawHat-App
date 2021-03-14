import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const WellcomeScreen = (props) => {
  const navigateSignIn = () => {
    props.navigation.navigate("Sign In");
  };
  const navigateSignUp = () => {
    props.navigation.navigate("Sign Up");
  };

  return (
    <View style={styles.Screen}>
      <View style={styles.Image}>
        <Image
          source={require("../assets/images/flags.png")}
          style={{
            resizeMode: "contain",
            width: 150,
            height: 150,
          }}
        />
      </View>
      <View style={styles.Title}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            letterSpacing: 2,
          }}
        >
          Wellcome
        </Text>
        <Text style={{ fontSize: 25, color: "gray" }}>Hello There!!!</Text>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={{ fontSize: 15, color: "gray" }}
        >
          Wellcome To StrawHat App.Wellcome To StrawHat App Wellcome To StrawHat
          App.Wellcome To StrawHat App.Wellcome To StrawHat App.Wellcome To
          StrawHat App.Wellcome To StrawHat App.Wellcome To StrawHat App
        </Text>
      </View>
      <View style={styles.Button}>
        <Button
          icon="login"
          mode="contained"
          onPress={navigateSignIn}
          style={{
            borderRadius: 25,
            height: 50,
            backgroundColor: "green",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            SIGN IN
          </Text>
        </Button>
      </View>
      <View style={styles.Button}>
        <Button
          icon="book"
          mode="contained"
          onPress={navigateSignUp}
          style={{
            borderRadius: 25,
            height: 50,
            backgroundColor: "red",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            SIGN UP
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  Image: {
    alignItems: "center",
    marginTop: 100,
    padding: 10,
  },
  Title: {
    padding: 10,
    marginBottom: 10,
  },
  Button: {
    padding: 5,
    margin: 5,
  },
});
export default WellcomeScreen;
