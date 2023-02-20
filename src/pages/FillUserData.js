import { Text, View, StyleSheet, ScrollView } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import TextField from "../components/TextField";
import { customerDataSchema } from "./data/schemaData";
import { HeaderMainPage } from "./mainPageComp/HeaderMainPage";
import { HeaderTop } from "./mainPageComp/mainPage.style";

function FillUserData({ navigation }) {
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
              return (
                <TextField
                  key={idx}
                  label={schema.label}
                  type={schema.type}
                  placeholder={schema.placeholder}
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
});
