import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCh3zOHfuDuLK6le_cQY7iLe3FCo-VeV9c",
  authDomain: "fir-crud-86afe.firebaseapp.com",
  projectId: "fir-crud-86afe",
  storageBucket: "fir-crud-86afe.appspot.com",
  messagingSenderId: "281693830505",
  appId: "1:281693830505:web:5fddb814133f715cf8d1f8",
  measurementId: "G-0ZGZP28DBC",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
