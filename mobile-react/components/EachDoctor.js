import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EachDoctor({ doctor }) {
  const navigation = useNavigation();
  function detailHandler() {
    navigation.navigate("Detail", {
      id: doctor.id,
    });
  }
  return (
    <TouchableOpacity onPress={detailHandler} style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={doctor.imageUrl} />
        <View style={{ marginLeft: 15 }}>
          <Text>Name:{doctor.name}</Text>
          <Text>Location:{doctor.place}</Text>
          <Text>Specialist:{doctor.profession}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    marginBottom: 10,
    backgroundColor: "gray",
  },
  card: {
    flexDirection: "row",
  },
  image: {
    width: 66,
    height: 58,
  },
});
