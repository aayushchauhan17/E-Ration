import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, View } from "react-native";
import {
  ButtonContainer,
  HeaderTop,
  ImageContainer,
  ImageDot,
  MainContainer,
} from "./mainPage.style";
import { imageComp } from "../assets/ImageComp";
import Entypo from "react-native-vector-icons/Entypo";
import ButtonCustom from "../components/ButtonCustom";
import { HeaderMainPage } from "./mainPageComp/HeaderMainPage";

function MainPage() {
  const [imageSelect, setImageSelect] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageSelect((prev) => (prev + 1) % 2);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginHorizontal: 0,
        marginVertical: 0,
        backgroundColor: "white",
      }}
    >
      <MainContainer>
        <HeaderTop></HeaderTop>
        <HeaderMainPage />
        <ImageContainer>
          <Image source={imageComp[`${imageSelect + 1}`]} />
        </ImageContainer>
        <ImageDot>
          <Entypo
            style={{ color: imageSelect === 0 ? "#777" : "white" }}
            size={24}
            name="dot-single"
          />
          <Entypo
            style={{ color: imageSelect === 1 ? "#777" : "white" }}
            size={24}
            name="dot-single"
          />
        </ImageDot>
        <ButtonContainer>
          <ButtonCustom
            style={{ marginBottom: 30, marginTop: 20 }}
            title="Customer Login"
            width={182}
            onClick={() => {}}
          />
          <ButtonCustom title="Employee Login" width={183} onClick={() => {}} />
        </ButtonContainer>
      </MainContainer>
    </SafeAreaView>
  );
}

export default MainPage;
