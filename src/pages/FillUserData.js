import { Text, View, StyleSheet, ScrollView } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import TextField from "../components/TextField";
import { customerDataSchema } from "./data/schemaData";
import { HeaderMainPage } from "./mainPageComp/HeaderMainPage";
import { HeaderTop } from "./mainPageComp/mainPage.style";
import { useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";

function FillUserData({ navigation }) {
  const [newCustomerData, setNewCustomerData] = useState({
    fullName: "",
    fatherHusbandName: "",
    aadhaarCard: "",
    dob: "",
    address1: "",
    address2: "",
    pinCode: "",
    mobileNo: "",
  });

  const [date, setDate] = useState(new Date());

  return (
    <>
      {/* Top Header ======> */}
      <HeaderTop />
      <HeaderMainPage navigation={navigation} />
      {/* =======> */}
      <View style={style.container}>
        <ScrollView contentContainerStyle={style.scrollView} width="100%">
          <Text style={style.loginText}>Create New Customer</Text>
          <View style={style.content}>
            {/* Schema====> */}
            {customerDataSchema.map((schema, idx) => {
              return schema.type === "date" ? (
                <View style={style.datePickerStyle}>
                  <Text style={{ fontSize: 16 }}>Date of Birth * :</Text>
                  <RNDateTimePicker
                    key={idx}
                    value={date}
                    onDateChange={setDate}
                    positiveButton={{ label: "OK", textColor: "green" }}
                    themeVariant="light"
                    display="default"
                  />
                </View>
              ) : (
                <TextField
                  key={idx}
                  label={schema.label}
                  type={schema.type}
                  placeholder={schema.placeholder}
                  value={newCustomerData[schema?.key]}
                  onChange={(e) => {
                    setNewCustomerData((prev) => {
                      let temp = {};
                      temp[schema.key] = e;
                      return { ...prev, ...temp };
                    });
                  }}
                />
              );
            })}
            {/* ======> */}

            <ButtonCustom
              style={{ marginBottom: 20, marginTop: 10 }}
              title="Create"
              onClick={() => {}}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default FillUserData;

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "top",
  },
  content: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  scrollView: {
    width: "95%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#eee",
    paddingVertical: 10,
    borderRadius: 10,
  },
  loginText: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  datePickerStyle: {
    width: "92%",
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
