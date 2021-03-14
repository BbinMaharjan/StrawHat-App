import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Avatar, TextInput, Button } from "react-native-paper";

const SignupScreen = (props) => {
  const [fulname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigateUserLoginScreen = () => {
    props.navigation.navigate("Sign In");
  };
  const navigateWellcomeScreen = () => {
    props.navigation.navigate("Wellcome");
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
          Hello There!!!
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          label="Full Name"
          value={fulname}
          onChangeText={(fullname) => setFullName(fullname)}
          style={{
            margin: 10,
            backgroundColor: "transprant",
          }}
        />
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
            onPress={navigateUserLoginScreen}
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
              Save
            </Text>
          </Button>
        </View>
        <View style={styles.Button}>
          <Button
            icon="close"
            mode="contained"
            onPress={navigateWellcomeScreen}
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
              Cancle
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
export default SignupScreen;
