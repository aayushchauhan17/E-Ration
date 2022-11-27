import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { imageComp } from "../../assets/ImageComp";

export function HeaderMainPage() {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.personIcon}>
        <View>
          <Ionicons size={26} name="ios-person-outline" />
        </View>
      </TouchableOpacity>

      <View style={style.imageContainer}>
        <Image style={style.image} source={imageComp["GovLogo"]} />
        <Text style={style.rationText}>E-Ration</Text>
      </View>

      <TouchableOpacity style={style.menu} onPress={() => {}}>
        <Text>
          <Ionicons size={30} name="ios-menu" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#eee",
    height: 65,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    top: Platform.OS === "android" ? 20 : -13,
  },
  menu: {
    alignSelf: "center",
    marginRight: 8,
  },
  image: {
    width: 30,
    height: 50,
    marginRight: 10,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rationText: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  personIcon: {
    marginLeft: 8,
    alignSelf: "center",
  },
});
