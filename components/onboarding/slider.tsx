import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface SliderProps {
  index: number;
  setIndex: (value: number) => void;
  children: JSX.Element;
  prev?: JSX.Element;
  next?: JSX.Element;
}

export default function Slider({
  index,
  setIndex,
  prev,
  next,
  children: current,
}: SliderProps) {
  return (
    <View>
      <Text>Slider</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
