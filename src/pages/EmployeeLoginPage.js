import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import TextField from "../components/TextField";
import { HeaderMainPage } from "./mainPageComp/HeaderMainPage";
import { HeaderTop } from "./mainPageComp/mainPage.style";

function EmployeeLoginPage({ navigation }) {
  const [userData, setUserData] = useState({
    mobileNo: "",
  });
  const [error, setError] = useState({
    mobileNoError: "",
  });
  return (
    <>
      {/* Top Header ======> */}
      <HeaderTop />
      <HeaderMainPage navigation={navigation} />
      {/* =======> */}
      <View style={style.container}>
        <View style={style.content}>
          <Text style={style.loginText}>Costumer Login</Text>
          <TextField
            label="Mobile Number"
            type="numeric"
            placeholder="Mobile No."
            disable={+userData.mobileNo.length > 10}
            error={error.mobileNoError}
            value={userData.mobileNo}
            onChange={(e) => {
              console.log(e);
              if (+e.length <= 10)
                setUserData((prev) => {
                  return { ...prev, mobileNo: e };
                });
            }}
          />
          <ButtonCustom
            style={{ marginBottom: 20, marginTop: 10 }}
            title="Login"
            onClick={() => {
              if (userData.mobileNo.length < 10) {
                setError((prev) => {
                  return {
                    ...prev,
                    mobileNoError: "Enter the 10 digit Mobile no.",
                  };
                });
              }
            }}
          />
        </View>
      </View>
    </>
  );
}

export default EmployeeLoginPage;

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#eee",
    width: "90%",
    minHeight: "45%",
    marginBottom: "40%",
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  loginText: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
