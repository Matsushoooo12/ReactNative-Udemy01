import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
});

export default function MemoItem() {
  return (
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
  );
}
