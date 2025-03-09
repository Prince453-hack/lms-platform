import Slide from "@/components/onboarding/slide";
import Slider from "@/components/onboarding/slider";
import { onBoardingSlides } from "@/configs/constants";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const OnboardingScreen = () => {
  const [index, setIndex] = useState(0);
  const prev = onBoardingSlides[index - 1];
  const next = onBoardingSlides[index + 1];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slider
        key={index}
        index={index}
        setIndex={setIndex}
        prev={
          prev && <Slide slide={prev} totalSlider={onBoardingSlides.length} />
        }
        next={
          next && <Slide slide={next} totalSlider={onBoardingSlides.length} />
        }
      ></Slider>
    </GestureHandlerRootView>
  );
};

export default OnboardingScreen;
