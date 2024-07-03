import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import LoginImage from "@/assets/images/icon.png";
import { Colors } from "../constants/Colors";
export default function LoginScreen() {
  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Image
          source={LoginImage}
          style={{
            width: 220,
            height: 450,
            borderRadius: 20,
            borderWidth: 6,
            borderColor: "#000",
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 35 }}>
          Our new business
          <Text
            style={{
              color: Colors.PRIMARY,
            }}
          >
            Cano Salazar Co
          </Text>
          App
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: "#fff",
    padding: 20,
  },
});
