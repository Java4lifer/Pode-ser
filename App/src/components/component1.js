import React from "react";
import { Text, Image, ScrollView, StyleSheet } from "react-native";
import sare from "../assets/sare.jpg"
import gnome from "../assets/Gnome_model.webp"
import style from "../style.js"

export default () => <>
    {/* <ScrollView style={myStyle.lacreatura}> */}
    <ScrollView>
    <Text>la creatura</Text>
    <Image source={sare}/>
    <Image source={gnome}/>
    </ScrollView>
</>

const myStyle = StyleSheet.create({
    lacreatura: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

//export defaul function
//export {func1, func2}