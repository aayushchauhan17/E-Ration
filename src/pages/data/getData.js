import { db } from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export async function getDataFirebase(
  dataKey,
  userId,
  setData = () => {},
  setLoading = () => {}
) {
  setLoading(true);
  const docRef = doc(db, dataKey, userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data(), "fgsdb", docSnap);
    setData(docSnap.data());
    setLoading(false);
  } else {
    // doc.data() will be undefined in this case
    // console.log("No such document!");
    setData(null);
    setLoading(false);
  }
}
