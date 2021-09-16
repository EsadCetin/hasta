import { Text, View } from "react-native";
import styles from "../../hasta/screens/styles";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import firebase from '../../hasta/firebase'
function Signup() {

    const [state, setState] = useState({
        Adı: '',
        Email: '',
        Parola: '',
        Fotoğrafı: '',
    });
    const changeText = (Adı, value) => {
        setState({ ...state, [Adı]: value })
    }
    const registerUser = () => {
        if (state.Email === '' && state.Parola === '') {
            Alert.alert('Enter details to signup!')
        } else {
            setState({
                isLoading: true,
            })
            firebase
            auth()
                .createUserWithEmailAndPassword(state.Email, state.Parola)

        }
    }

    const addData = () => {
        if (state.Email == '') {
            alert('Lütfen E-mail Adresinizi giriniz')
        } else if (state.Parola == '') {
            alert('Lütfen Telefon Numaranızı giriniz')
        } else if (state.Adı == '') {
            alert('Lütfen adınızı giriniz')
        } else if (state.Fotoğrafı == '') {
            alert('Lütfen Fotoğrafınızı yükleyiniz')
        } else {
            firebase.db.collection('users').add({
                Email: state.Email,
                Parola: state.Parola,
                Adı: state.Adı,
                Fotoğrafı: state.Fotoğrafı,

            })
            navigation.navigate('Sixth Screen')
            registerUser();
        }
    }
    return (
        <View style={styles.Screen}>
            <Text style={styles.Text1}>torba</Text>

            <TextInput style={styles.TextInput} placeholder="E-mail Adresiniz" onChangeText={(value) => changeText('Email', value)} keyboardType={"email-address"} />
            <TextInput style={styles.TextInput} placeholder="Parola" onChangeText={(value) => changeText('Parola', value)} keyboardType={"number-pad"} />
            <TextInput style={styles.TextInput} placeholder="Adınız" onChangeText={(value) => changeText('Adı', value)} />
            <TextInput style={styles.TextInput} placeholder="Eklemek İstediğiniz Fotoğraf" onChangeText={(value) => changeText('Fotoğrafı', value)} />
            <TouchableOpacity onPress={() => addData()} style={styles.AddButton}>
                <Text style={styles.Add}>Ekle</Text>
            </TouchableOpacity>
        </View >
    );

}
export default Signup;