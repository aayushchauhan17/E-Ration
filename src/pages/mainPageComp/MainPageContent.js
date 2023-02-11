import { useEffect, useState } from "react";
import { Image } from "react-native";
import { imageComp } from "../../assets/ImageComp";
import ButtonCustom from "../../components/ButtonCustom";
import {
  ButtonContainer,
  ImageBar,
  ImageContainer,
  ImageDot,
  ImgContainer,
  StackView,
} from "./mainPage.style";

function MainPageContent({ navigation }) {
  const [imageSelect, setImageSelect] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageSelect((prev) => (prev + 1) % 2);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <StackView>
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
          onClick={() => {
            navigation.navigate("loginPage");
          }}
        />
        <ButtonCustom
          title="Employee Login"
          onClick={() => {
            navigation.navigate("loginPage");
          }}
        />
      </ButtonContainer>
    </StackView>
  );
}

export default MainPageContent;
