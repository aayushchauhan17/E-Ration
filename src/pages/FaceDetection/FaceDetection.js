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
  const [camera, setCamera] = React.useState(null);
  const [imageUri, setImageUri] = React.useState(null);
  const [showProcessing, setShowProcessing] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async (face) => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      //   console.log(data.uri);
      setImageUri(data.uri);
      if (returnPage === "DeliveryPage") {
        setShowProcessing(true);
        setTimeout(() => {
          navigation.navigate("DeliveryPage", {
            oderDeliverData: oderDeliverData,
            faceDataValidation: "Successful",
          });
        }, 8000);
      } else {
        navigation.navigate(returnPage, {
          faceData: { ...face, imageUri: data.uri },
        });
      }
    }
  };

  //   React.useEffect(() => {
  //     if (returnPage === "DeliveryPage") {
  //       faceReco(oderDeliverData?.userData?.faceData?.imageUri).then(() => {
  //         console.log("Finished processing file.");
  //         // navigation.navigate("DeliveryPage", {
  //         //   oderDeliverData: oderDeliverData,
  //         //   faceDataValidation: "Successful",
  //         // });
  //       });
  //       //   setTimeout(() => {
  //       //     navigation.navigate("DeliveryPage", {
  //       //       oderDeliverData: oderDeliverData,
  //       //       faceDataValidation: "Successful",
  //       //     });
  //       //   }, 3000);
  //     }
  //   }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function getFaceDataView() {
    if (showProcessing) {
      return (
        <View style={styles.faces}>
          <Text style={styles.faceDesc}>Processing....</Text>
        </View>
      );
    }

    if (faceData.length === 0) {
      return (
        <View style={styles.faces}>
          <Text style={styles.faceDesc}>No faces Found :(</Text>
        </View>
      );
    } else {
      return faceData.map((face, index) => {
        return returnPage === "Create New Customer" ||
          returnPage === "DeliveryPage" ? (
          <TouchableOpacity
            key={index}
            style={{
              marginVertical: 10,
              alignSelf: "center",
              marginTop: 550,
            }}
            onPress={() => {
              takePicture(face);
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
      ref={(ref) => setCamera(ref)}
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
