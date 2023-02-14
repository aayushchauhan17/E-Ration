import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import TextField from "../components/TextField";
import { HeaderMainPage } from "./mainPageComp/HeaderMainPage";
import { HeaderTop } from "./mainPageComp/mainPage.style";

function LoginPage({ navigation }) {
  const [userData, setUserData] = useState({
    aadharNo: "",
    mobileNo: "",
  });
  const [error, setError] = useState({
    aadharNoError: "",
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
            label="Aadhaar Card"
            type="numeric"
            placeholder="Aadhaar Card No."
            error={error.aadharNoError}
            value={userData.aadharNo}
            onChange={(e) => {
              if (+e.length <= 12)
                setUserData((prev) => {
                  return { ...prev, aadharNo: e };
                });
            }}
          />
          <TextField
            label="Mobile Number"
            type="numeric"
            placeholder="Mobile No."
            error={error.mobileNoError}
            value={userData.mobileNo}
            onChange={(e) => {
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
              if (userData.aadharNo.length < 12) {
                setError((prev) => {
                  return {
                    ...prev,
                    aadharNoError: "Enter the 12 digit Aadhaar no.",
                  };
                });
              }
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

export default LoginPage;

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
  },
  loginText: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
