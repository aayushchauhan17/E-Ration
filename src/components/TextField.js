import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

function TextField({
  onChange = () => {},
  value,
  label,
  type,
  placeholder = "",
  error,
}) {
  return (
    <View style={style.container}>
      {label && <Text style={style.label}>{label} :</Text>}
      <CustomInput
        style={style.inputBox}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        keyboardType={type}
        error={error}
      />
      {error && <Text style={style.error}>Error</Text>}
    </View>
  );
}

export default TextField;

const style = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  inputBox: {
    width: "96%",
    backgroundColor: "#fff",
    height: 50,
    alignSelf: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  label: {
    marginLeft: "2%",
    fontSize: 16,
    marginBottom: 5,
  },
  error: {
    marginLeft: "2%",
    marginTop: 2,
    fontSize: 14,
    color: "red",
  },
});

const CustomInput = styled.TextInput`
  border: 1px solid ${(prop) => (prop.error ? "red" : "#777")};
`;
