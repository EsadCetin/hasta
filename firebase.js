// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrkbvnuB1MBRU17gI51KJCRi6cH0gibZc",
    authDomain: "hasta-b4736.firebaseapp.com",
    projectId: "hasta-b4736",
    storageBucket: "hasta-b4736.appspot.com",
    messagingSenderId: "359379599870",
    appId: "1:359379599870:web:bfad2991238d490ef0c0af",
    measurementId: "G-T77XE0PS7X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}