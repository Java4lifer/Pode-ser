import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, useState } from 'react-native';

export default function race() {

    const [num, setNum] = useState(0);

    function rand() {
        var num = Math.floor(Math.random() * (race.max - race.min + 1)) + race.min;
    }

    function click() {
        setNum(rand())
    }


    return (
        <View>
            <Text>The racism levels are at {num}%!!</Text>
            <Text>{'\n'}</Text>
            <button onClick={click}>Rap about something!</button>
        </View>
    )
}