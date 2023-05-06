import React from "react";
import { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView, Text, View } from "react-native";
import { itemData } from "../data/itemsData";
import ProductsBox from "./ProductsBox";
import ViewCart from "./ViewCart";

function ProductPage({ navigation, route }) {
  const { userData } = route.params;
  const [cart, setCart] = useState({ items: [], totalPrice: 0 });
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <Text>hii product page..</Text>
      <ScrollView>
        {itemData.map((item, idx) => {
          return (
            <View key={idx}>
              <ProductsBox setCart={setCart} item={item} />
            </View>
          );
        })}
      </ScrollView>
      <ViewCart cart={cart} navigation={navigation} userData={userData} />
    </SafeAreaView>
  );
}

export default ProductPage;
