import React from "react";
import {Button} from "react-native";
import Filho from "./Filho";

export default props => {
    let x = 10
    let y = 69
    return(
        <>
            <Filho a={x} b={y}/>
        </>
    )
}