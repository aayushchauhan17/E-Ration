import { StyleSheet, Text, View } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import TextField from "../components/TextField";

function LoginPage() {
  return (
    <View style={style.container}>
      <View style={style.content}>
        <Text style={style.loginText}>Costumer Login</Text>
        <TextField
          label="Aadhaar Card"
          type="numeric"
          placeholder="Aadhaar Card No."
          error=""
          value=""
          onChange={() => {}}
        />
        <TextField
          label="Mobile Number"
          type="numeric"
          placeholder="Mobile No."
          error=""
          value=""
          onChange={() => {}}
        />
        <ButtonCustom
          style={{ marginBottom: 20, marginTop: 10 }}
          title="Login"
        />
      </View>
    </View>
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
