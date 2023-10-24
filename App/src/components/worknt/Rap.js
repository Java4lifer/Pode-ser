import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const race = ({min, max}) => {

    const [ num, setNum ] = useState(0);

    const rand = () => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function click() {
        setNum(rand())
    }

    return (
        <View>
            <Text>Levels are at {num}%!!</Text>
            <button onClick={click}>Rap</button>
        </View>
    )
}

export default race;