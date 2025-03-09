import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { Redirect } from "expo-router";

const index = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscription = async () => {
      const token = SecureStore.getItem("accessToken");
      setLoggedInUser(token ? true : false);
      setLoading(false);
    };
    subscription();
  }, []);
  1;
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <Redirect href={!loggedInUser ? "/(routes)/onboarding" : "/(tabs)"} />
      )}
    </>
  );
};

export default index;
