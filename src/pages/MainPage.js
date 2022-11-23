import React, { useEffect, useState } from "react";
import { Image, SafeAreaView } from "react-native";
import {
  ButtonContainer,
  ImageContainer,
  ImageDot,
  MainContainer,
} from "./mainPage.style";
import { imageComp } from "../assets/ImageComp";
import Entypo from "react-native-vector-icons/Entypo";
import ButtonCustom from "../components/ButtonCustom";

function MainPage() {
  const [imageSelect, setImageSelect] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageSelect((prev) => (prev + 1) % 2);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView>
      <MainContainer>
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
