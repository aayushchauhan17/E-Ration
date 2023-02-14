import React from "react";
import { SafeAreaView } from "react-native";
import { HeaderTop, MainContainer } from "./mainPageComp/mainPage.style";
import { HeaderMainPage } from "./mainPageComp/HeaderMainPage";
import MainPageContent from "./mainPageComp/MainPageContent";
import LoginPage from "./LoginPage";
import { createStackNavigator } from "@react-navigation/stack";
import EmployeeLoginPage from "./EmployeeLoginPage";
import { createDrawerNavigator } from "@react-navigation/drawer";

function MainPage() {
  const Drawer = createDrawerNavigator();

  const DrawerItems = [
    {
      name: "home",
      Name: "Home",
      iconType: "Material",
      iconName: "face-profile",
    },
    {
      name: "loginPage",
      Name: "Login",
      iconType: "Feather",
      iconName: "settings",
    },
    {
      name: "employeeLoginPage",
      Name: "Employee Login",
      iconType: "Material",
      iconName: "bookmark-check-outline",
    },
  ];

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
      }}
    >
      <MainContainer>
        {/* <MainPageStack.Navigator screenOptions={{ headerShown: false }}>
          <MainPageStack.Screen name="home" component={MainPageContent} />
          <MainPageStack.Screen name="loginPage" component={LoginPage} />
          <MainPageStack.Screen
            name="employeeLoginPage"
            component={EmployeeLoginPage}
          />
        </MainPageStack.Navigator> */}

        <Drawer.Navigator
          drawerType="front"
          initialRouteName="home"
          screenOptions={{
            headerShown: false,
            overlayColor: 0.5,
            drawerStyle: {
              backgroundColor: "#fff",
              width: 250,
            },
            drawerLabelStyle: {
              color: "black",
              fontSize: 17,
              fontWeight: "600",
            },
          }}
        >
          {DrawerItems.map((drawer) => (
            <Drawer.Screen
              key={drawer.name}
              name={drawer.Name}
              component={
                drawer.name === "home"
                  ? MainPageContent
                  : drawer.name === "loginPage"
                  ? LoginPage
                  : drawer.name === "employeeLoginPage"
                  ? EmployeeLoginPage
                  : MainPageContent
              }
            />
          ))}
        </Drawer.Navigator>
      </MainContainer>
    </SafeAreaView>
  );
}

export default MainPage;
