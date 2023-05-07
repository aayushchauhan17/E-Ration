import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { HeaderMainPage } from "../mainPageComp/HeaderMainPage";

function ShopkeeperProductPage({ navigation, route }) {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <HeaderMainPage otherPage={true} />
      <Text>hi ShopkeeperProductPage page</Text>
    </SafeAreaView>
  );
}

export default ShopkeeperProductPage;
