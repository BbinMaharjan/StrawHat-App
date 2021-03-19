import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Alert } from "react-native";
import { Avatar, TextInput, Button, Modal, List } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { addUsersToFirebase, getAllUsers } from "../store/actions/signup";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";

const SignupScreen = (props) => {
  const [visible, setVisible] = useState(false);
  // const [fullname, setFullName] = useState("");
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  // const resetForm = () => {
  //   setFullName("");
  //   setUserName("");
  //   setPassword("");
  // };

  const navigateWellcomeScreen = () => {
    props.navigation.navigate("Wellcome");
  };

  const users = useSelector((state) => state.usersState.users);

  React.useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const { control, handleSubmit, errors } = useForm();

  const submitForm = (user) => {
    // const user = {
    //   fullname,
    //   username,
    //   password,
    // };
    !Object.keys(errors).length > 0 && dispatch(addUsersToFirebase(user));
    // resetForm();
    Alert.alert(
      "User",
      `Username: ${user.userName} Password: ${user.password}`
    );
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
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              label="Full Name"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              style={{
                margin: 10,
                backgroundColor: "transprant",
              }}
            />
          )}
          name="fullName"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.fullName && <Text style={styles.etxt}>FullName required.</Text>}
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              label="User Name"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              style={{
                margin: 10,
                backgroundColor: "transprant",
              }}
            />
          )}
          name="userName"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.userName && <Text style={styles.etxt}>UserName required.</Text>}

        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              label="Password"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              style={{
                margin: 10,
                backgroundColor: "transprant",
              }}
            />
          )}
          name="password"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.password && <Text style={styles.etxt}>Password required.</Text>}
        <View style={styles.Button}>
          <Button
            icon="login"
            mode="contained"
            onPress={handleSubmit(submitForm)}
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
        onDismiss={hideModal}
        contentContainerStyle={{
          padding: 10,
          margin: 10,
          backgroundColor: "#fff",
        }}
      >
        {users.map((user, index) => {
          return (
            <List.Item
              key={index}
              title={user.userName}
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
    marginTop: 20,
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
  etxt: {
    color: "red",
  },
});
export default SignupScreen;
