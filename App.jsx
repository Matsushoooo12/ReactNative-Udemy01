import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hello from "./src/components/Hello";
import Appbar from "./src/components/Appbar";
import MemoItem from "./src/components/MemoItem";
import CircleButton from "./src/components/CircleButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Hello} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
      <Appbar />
      <MemoItem />
      <CircleButton>+</CircleButton>
    </View>
  );
}
