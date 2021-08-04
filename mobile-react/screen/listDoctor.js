import { fetchDoctor } from "../store/action";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, TouchableOpacity, Text } from "react-native";
import EachDoctor from "../components/EachDoctor";

export default function listDoctor({ navigation }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const doctors = useSelector((state) => state.allDoctor);
  useEffect(() => {
    dispatch(fetchDoctor(page));
  }, [dispatch, page]);
  function pageHandlerNext() {
    if (doctors.length === 10) {
      setPage(page + 1);
    }
  }
  function pageHandlerPrev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  if (doctors.length < 1) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <View>
      {doctors?.map((doctor) => {
        return <EachDoctor key={doctor.id} doctor={doctor} />;
      })}
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity onPress={pageHandlerPrev}>
          <Text> &lt; prev</Text>
        </TouchableOpacity>
        <Text>{page}</Text>
        <TouchableOpacity onPress={pageHandlerNext}>
          <Text>next &gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
