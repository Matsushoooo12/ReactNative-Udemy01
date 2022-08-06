import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hello from "./src/components/Hello";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  appbar: {
    width: "100%",
    height: 104,
    backgroundColor: "#467FD3",
    justifyContent: "flex-end",
  },
  appbarInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  appbarLeft: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  appbarRight: {},
  memoItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.15)",
  },
  memoItemTitle: {
    fontSize: 16,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "gray",
  },
  circleButton: {
    backgroundColor: "#467FD3",
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRaduius: 8,
  },
  circleButtonLabel: {
    color: "#FFF",
    fontSize: 40,
    lineHeight: 40,
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
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarLeft}>Memo App</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>
      <View>
        {/* メモリストItem */}
        <View style={styles.memoItemContainer}>
          <View>
            <Text style={styles.memoItemTitle}>買い物リスト</Text>
            <Text style={styles.memoItemDate}>2020年12月24日 10:00</Text>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>
        <View style={styles.memoItemContainer}>
          <View>
            <Text style={styles.memoItemTitle}>買い物リスト</Text>
            <Text style={styles.memoItemDate}>2020年12月24日 10:00</Text>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>
        <View style={styles.memoItemContainer}>
          <View>
            <Text style={styles.memoItemTitle}>買い物リスト</Text>
            <Text style={styles.memoItemDate}>2020年12月24日 10:00</Text>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>
      </View>
      {/* 投稿ボタン */}
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  );
}
