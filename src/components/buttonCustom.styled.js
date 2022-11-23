import { Text, View } from "react-native";
import styled from "react-native-styled-components";

export const ButtonContainer = styled(View, {
  width: (prop) => prop?.width,
  backgroundColor: "#6CB4EE",
  paddingHorizontal: 5,
  paddingVertical: 8,
  borderRadius: 5,
  ...(prop) => prop.customCss,
});

export const ButtonText = styled(Text, {
  fontSize: 24,
  color: "white",
  fontWeight: "500",
});
