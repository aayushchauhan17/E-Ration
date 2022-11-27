import React from "react";
import { SafeAreaView } from "react-native";
import { HeaderTop, MainContainer } from "./mainPageComp/mainPage.style";
import { HeaderMainPage } from "./mainPageComp/HeaderMainPage";
import MainPageContent from "./mainPageComp/MainPageContent";
import LoginPage from "./LoginPage";
import { createStackNavigator } from "@react-navigation/stack";

function MainPage() {
  const MainPageStack = createStackNavigator();

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
      }}
    >
      <MainContainer>
        <HeaderTop />
        <HeaderMainPage />

        <MainPageStack.Navigator screenOptions={{ headerShown: false }}>
          <MainPageStack.Screen name="home" component={MainPageContent} />
          <MainPageStack.Screen name="loginPage" component={LoginPage} />
        </MainPageStack.Navigator>
      </MainContainer>
    </SafeAreaView>
  );
}

export default MainPage;
