import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model X</Text>
        <Text style={styles.subTitle}>Starting at $69,000</Text>
      </View>
      <StyledButton
        type="primary"
        content={"Custom Order"}
        onPress={() => {
          console.warn("Custom order Pressed");
        }}
      />
      <StyledButton
        type="secondary"
        content={"Existing Inventory"}
        onPress={() => {
          console.warn("Existing Inventory order Pressed");
        }}
      />
    </View>
  );
};

export default CarItem;
