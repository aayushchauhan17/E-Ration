import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { HeaderMainPage } from "../mainPageComp/HeaderMainPage";

function DeliveryPage({ navigation, route }) {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <HeaderMainPage otherPage={true} />
      <Text>Hi delivery page</Text>
    </SafeAreaView>
  );
}

export default DeliveryPage;
