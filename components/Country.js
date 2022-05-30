import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Country = ({ country }) => {
  return (
    <View>
      <Text>{country.name.common}</Text>
      <Image
        source={{
          uri: country.flags.png,
        }}
        style={{ width: 200, height: 200 }}
      ></Image>
    </View>
  );
};

export default Country;

const styles = StyleSheet.create({});
