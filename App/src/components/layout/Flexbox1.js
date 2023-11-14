import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default props => {
    return(
        <View style={style.Flex1}>
            <Quadrado color='#50d1f6'/>
            <Quadrado/>
            <Quadrado/>
            <Quadrado/>
        </View>
    )
}


const style = StyleSheet.create({
    Flexuh:{
        flexGrow: 1,
        justifyContent: "space-around",
        backgroundColor:"#000"
    }
})