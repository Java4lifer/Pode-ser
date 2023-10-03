import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default ({max, min}) => {
    const conta = max-min +1
    var rand = []
    
    for(i = 0; i < 6; i++) {
        var listed = rand.concat(Math.floor(Math.random() * conta) + min)
        rand = listed
    }

    // const getnum = () => {
    //     rand = Math.floor(Math.random() * conta) + min
    // }
    
    return(
        <>
            <Text>
                Number: {rand[0]}
                {/* <button onClick={getnum}>Generate number</button> */}
            </Text>
            <Text>Number: {rand[1]}</Text>
            <Text>Number: {rand[2]}</Text>
            <Text>Number: {rand[3]}</Text>
            <Text>Number: {rand[4]}</Text>
            <Text>Number: {rand[5]}</Text>
        </>
    )
}