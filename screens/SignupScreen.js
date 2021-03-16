import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Avatar, TextInput, Button, Modal, List } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../store/actions/signup";
const SignupScreen = (props) => {
  const [visible, setVisible] = useState(false);
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersState.users);

  const showModal = () => setVisible(true);
  const resetForm = () => {
    setFullName("");
    setUserName("");
    setPassword("");
  };

  const navigateWellcomeScreen = () => {
    props.navigation.navigate("Wellcome");
  };

  const submitForm = () => {
    const user = {
      id: Math.random().toString(),
      fullname,
      username,
      password,
    };
    dispatch(addUsers(user));

    console.log(user);
    resetForm();
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
          value={fullname}
          onChangeText={(fullname) => setFullName(fullname)}
          style={{
            margin: 10,
            backgroundColor: "transprant",
          }}
        />
        <TextInput
          label="User Name"
          value={username}
          onChangeText={(username) => setUserName(username)}
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
            onPress={submitForm}
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

        <View style={styles.Button}>
          <Button
            icon="close"
            mode="contained"
            onPress={showModal}
            style={{
              borderRadius: 25,
              height: 50,
              backgroundColor: "blue",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                letterSpacing: 2,
              }}
            >
              View Users
            </Text>
          </Button>
        </View>
      </View>
      <Modal
        visible={visible}
        contentContainerStyle={{
          padding: 20,
          margin: 20,
          backgroundColor: "#fff",
        }}
      >
        {users.map((user) => {
          return (
            <List.Item
              key={user.id}
              title={user.username}
              description={user.password}
            />
          );
        })}
      </Modal>
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
