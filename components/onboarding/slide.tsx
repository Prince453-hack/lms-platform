import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface SlideProps {
  slide: any;
  totalSlider: number;
}

export default function Slide({}: SlideProps) {
  return (
    <View>
      <Text>Slide</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
