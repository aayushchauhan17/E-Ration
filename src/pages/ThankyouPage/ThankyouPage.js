import React from "react";
import { Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { HeaderMainPage } from "../mainPageComp/HeaderMainPage";

function ThankyouPage({ navigation, route }) {
  const { cart, userData } = route?.params;
  console.log(userData, "nhsdbh");
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <HeaderMainPage otherPage={true} />
      <ScrollView>
        <View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4a4zxZpBL9oV6FpB7u57C0ME2z_sqwzHD4ZMhhjz9&s",
              }}
              style={{
                width: "30%",
                height: 100,
                marginBottom: 5,
                marginTop: 4,
                borderRadius: 5,
                marginRight: 20,
                marginLeft: 5,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "800",
                width: "80%",
                textAlign: "center",
                marginBottom: 20,
                color: "green",
              }}
            >
              Thank You {userData?.fullName}!
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                width: "80%",
                textAlign: "center",
              }}
            >
              Your Order Successfully accepted by the Ration shopkeeper.
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                marginLeft: 20,
                marginVertical: 10,
                marginTop: 30,
              }}
            >
              Customer Details :
            </Text>
            <View
              style={{
                backgroundColor: "#eee",
                width: "88%",
                borderRadius: 10,
                alignSelf: "center",
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    width: "35%",
                  }}
                >
                  Name :
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    marginLeft: 5,
                  }}
                >
                  {userData?.fullName}
                </Text>
              </View>
              <View
                style={{ display: "flex", flexDirection: "row", marginTop: 5 }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    width: "35%",
                  }}
                >
                  Father Name :
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    marginLeft: 5,
                  }}
                >
                  {userData?.fatherHusbandName}
                </Text>
              </View>
              <View
                style={{ display: "flex", flexDirection: "row", marginTop: 5 }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    width: "35%",
                  }}
                >
                  Address :
                </Text>
                <View style={{ display: "flex" }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      marginLeft: 5,
                    }}
                  >
                    {userData?.address1}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      marginLeft: 5,
                      marginTop: 2,
                    }}
                  >
                    {userData?.address2}
                  </Text>
                </View>
              </View>
              <View
                style={{ display: "flex", flexDirection: "row", marginTop: 5 }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    width: "35%",
                  }}
                >
                  Mobile No. :
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    marginLeft: 5,
                  }}
                >
                  +91 {userData?.mobileNo}
                </Text>
              </View>
              <View
                style={{ display: "flex", flexDirection: "row", marginTop: 5 }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    width: "35%",
                  }}
                >
                  Pin Code :
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    marginLeft: 5,
                  }}
                >
                  {userData?.pinCode}
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                marginLeft: 20,
                marginVertical: 10,
                marginTop: 30,
              }}
            >
              Order Details :
            </Text>
            <View
              style={{
                backgroundColor: "#eee",
                width: "88%",
                borderRadius: 10,
                alignSelf: "center",
              }}
            >
              {cart.items?.map((data, idx) => {
                return (
                  <View
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginVertical: 10,
                      marginHorizontal: 15,
                      borderBottomWidth: 1,
                      borderColor: "#777",
                      paddingBottom: 8,
                      paddingHorizontal: 5,
                      paddingTop: 9,
                    }}
                  >
                    <Text
                      style={{ width: "50%", fontSize: 15, fontWeight: "700" }}
                    >
                      {data?.name}
                    </Text>
                    <Text style={{ width: "15%", fontSize: 15 }}>
                      {data?.quantity}
                    </Text>
                    <Text style={{ fontSize: 15 }}>
                      ₹{parseFloat(data?.price)}
                    </Text>
                  </View>
                );
              })}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginVertical: 10,
                  marginHorizontal: 15,
                  paddingBottom: 10,
                  paddingHorizontal: 2,
                }}
              >
                <Text
                  style={{ width: "50%", fontSize: 18, fontWeight: "bold" }}
                >
                  Total
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  ₹{cart.totalPrice}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ThankyouPage;
