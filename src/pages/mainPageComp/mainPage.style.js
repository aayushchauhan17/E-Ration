import styled from "styled-components/native";

export const MainContainer = styled.View`
  margin-top: 20px;
`;

export const ImageContainer = styled.View`
  width: 96%;
  background-color: #eee;
  align-self: center;
  height: 200px;
  overflow: hidden;
  border-radius: 4px;
`;

export const ImageDot = styled.View`
  display: flex;
  flex-direction: row;
  align-self: center;
  z-index: 1;
  position: relative;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
`;

export const HeaderTop = styled.View`
  background-color: #eee;
  width: 100%;
  height: 100px;
  position: absolute;
  top: -80px;
`;

export const ImgContainer = styled.View`
  background-color: #eee;
  width: 100%;
  padding-top: 8px;
  width: 96%;
  align-self: center;
  border-radius: 8px;
  margin-top: -10px;
`;

export const ImageBar = styled.View`
  width: ${(prop) => (prop.isSelected ? "15px" : "8px")};
  height: 8px;
  border-radius: 20px;
  background-color: ${(prop) => prop.color};
  align-self: center;
  margin-left: 5px;
  margin-right: 5px;
`;
