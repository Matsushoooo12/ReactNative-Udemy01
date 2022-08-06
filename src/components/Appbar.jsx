import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
});

export default function Appbar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarLeft}>Memo App</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
}
