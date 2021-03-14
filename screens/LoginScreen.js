import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Avatar, TextInput, Button } from "react-native-paper";

const LoginScreen = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigateUserHomeScreen = () => {
    props.navigation.navigate("Home");
  };
  const navigateSignUp = () => {
    props.navigation.navigate("Sign Up");
  };
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
          }}
        >
          Hello User!!!
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          label="User Name"
          value={username}
          onChangeText={(username) => setUserName(usename)}
          style={{
            margin: 10,
            backgroundColor: "transprant",
          }}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={{
            margin: 10,
            backgroundColor: "transprant",
          }}
        />
        <View style={styles.Button}>
          <Button
            icon="login"
            mode="contained"
            onPress={navigateUserHomeScreen}
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
                letterSpacing: 2,
              }}
            >
              Sign In
            </Text>
          </Button>
        </View>
        <View style={styles.Button}>
          <Button
            icon="login"
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
                letterSpacing: 2,
              }}
            >
              Sign UP
            </Text>
          </Button>
        </View>
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
    marginTop: 50,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  form: {
    flex: 2,
    padding: 10,
    flexDirection: "column",
  },
  Button: {
    padding: 5,
    margin: 5,
  },
});
export default LoginScreen;
