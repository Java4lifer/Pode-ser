import React from "react";
import {Button, ProgressBarAndroidComponent, Text} from "react-native";

export default pros => {
    
    function gerarNum(min, max) {
        const fator = max - min +1
        return parseInt(Math.random()*fator)+min
    }
    return(
        <Button title="exer" 
        onPress={function(){const n = gerarNum(pros.min, pros.max)}}></Button>
        )
}