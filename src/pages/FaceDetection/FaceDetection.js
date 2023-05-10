import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Camera } from "expo-camera";
import * as FaceDetector from "expo-face-detector";

export default function FaceDetection({ navigation, route }) {
  const { returnPage } = route?.params;
  const oderDeliverData = route?.params?.userFaceData
    ? route?.params?.userFaceData
    : {};
  const [hasPermission, setHasPermission] = React.useState();
  const [faceData, setFaceData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  React.useEffect(() => {
    if (returnPage === "DeliveryPage") {
      setTimeout(() => {
        navigation.navigate("DeliveryPage", {
          oderDeliverData: oderDeliverData,
          faceDataValidation: "Successful",
        });
      }, 3000);
    }
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function getFaceDataView() {
    if (faceData.length === 0) {
      return (
        <View style={styles.faces}>
          <Text style={styles.faceDesc}>No faces Found :(</Text>
        </View>
      );
    } else {
      return faceData.map((face, index) => {
        return returnPage === "Create New Customer" ? (
          <TouchableOpacity
            key={index}
            style={{
              marginVertical: 10,
              alignSelf: "center",
              marginTop: 550,
            }}
            onPress={() => {
              navigation.navigate(returnPage, {
                faceData: face,
              });
            }}
          >
            <View
              style={{
                width: 80,
                height: 80,
                paddingHorizontal: 7,
                paddingVertical: 6,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                borderWidth: 2,
                borderColor: "black",
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "500" }}>Click</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View key={index}></View>
        );
      });
    }
  }

  const handleFacesDetected = ({ faces }) => {
    setFaceData(faces);
  };

  return (
    <Camera
      type={Camera.Constants.Type.front}
      style={styles.camera}
      onFacesDetected={handleFacesDetected}
      faceDetectorSettings={{
        mode: FaceDetector.FaceDetectorMode.fast,
        detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
        runClassifications: FaceDetector.FaceDetectorClassifications.none,
        minDetectionInterval: 100,
        tracking: true,
      }}
    >
      {getFaceDataView()}
    </Camera>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  faces: {
    backgroundColor: "red",
    alignSelf: "center",
    alignItems: "top",
    justifyContent: "center",
    padding: 5,
  },
  faceDesc: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
});
