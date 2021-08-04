import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet,Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "../store/action";
import MapView from "react-native-maps";

export default function DetailPage({ route }) {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detailDoctor);

  console.log(detail);

  useEffect(() => {
    dispatch(fetchDetail(route.params.id));
  }, []);

  return (
    <View style={{ backgroundColor: "aquamarine" }}>
      <Image
        source={detail.imageUrl}
        style={{ height: 250, width: 250, marginBottom: 25 }}
      />
      <View>
        <Text style={{ marginBottom: 25 }}>{detail.name}</Text>
        <Text style={{ marginBottom: 25 }}>{detail.profession}</Text>
        <Text style={{ marginBottom: 25 }}>{detail.place}</Text>
        <MapView style={styles.map} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
