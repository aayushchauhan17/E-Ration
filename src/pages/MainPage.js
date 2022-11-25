import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, View } from "react-native";
import {
  ButtonContainer,
  HeaderTop,
  ImageBar,
  ImageContainer,
  ImageDot,
  ImgContainer,
  MainContainer,
} from "./mainPageComp/mainPage.style";
import { imageComp } from "../assets/ImageComp";
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
        <HeaderTop />
        <HeaderMainPage />
        <ImgContainer>
          <ImageContainer>
            <Image source={imageComp[`${imageSelect + 1}`]} />
          </ImageContainer>
          <ImageDot>
            <ImageBar
              color={imageSelect === 0 ? "#777" : "white"}
              isSelected={imageSelect === 0}
            />
            <ImageBar
              color={imageSelect === 1 ? "#777" : "white"}
              isSelected={imageSelect === 1}
            />
          </ImageDot>
        </ImgContainer>
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
