import { Ionicons } from "@expo/vector-icons";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity } from "react-native";
import MainPage from "../src/pages/MainPage";

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="MainPage"
        options={{
          title: "E-Ration",
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => {}}>
              <Text>
                <Ionicons size={26} name="ios-menu" />
              </Text>
            </TouchableOpacity>
          ),
        }}
        component={MainPage}
      />
    </Stack.Navigator>
  );
}
