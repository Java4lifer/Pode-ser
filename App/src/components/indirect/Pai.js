import React, { useState } from "react";
import {Button} from "react-native";
import Filho from "./Filho";
import { Text } from "react-native";

export default props => {
    const [text, setText] = useState("")
    const [num, setNum] = useState(0)
    
    function showValue(numb, tex) {
        setNum(numb)
        setText(tex)
    }

    return(
        <>
            <Text>
                {text} {num}
            </Text>
            <Filho min={1} max={240} function={showValue}/>
        </>
    )
}