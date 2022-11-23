import React from "react";
import { TouchableOpacity } from "react-native";
import { ButtonContainer, ButtonText } from "./buttonCustom.styled";

function ButtonCustom({
  title,
  customCss = {},
  onClick = () => {},
  width = 100,
  ...prop
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick && onClick();
      }}
    >
      <ButtonContainer customCss={customCss} width={width} {...prop}>
        <ButtonText>{title}</ButtonText>
      </ButtonContainer>
    </TouchableOpacity>
  );
}

export default ButtonCustom;
