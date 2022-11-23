import { View } from "react-native";
import styled from "react-native-styled-components";

export const MainContainer = styled(View, {
  marginTop: 20,
});

export const ImageContainer = styled(View, {
  width: "95%",
  backgroundColor: "#eee",
  alignSelf: "center",
  height: 200,
  overflow: "hidden",
  borderRadius: 4,
});

export const ImageDot = styled(View, {
  display: "flex",
  flexDirection: "row",
  gap: 0,
  alignSelf: "center",
  zIndex: 1,
  position: "relative",
  top: -20,
});

export const ButtonContainer = styled(View, {
  alignItems: "center",
});
