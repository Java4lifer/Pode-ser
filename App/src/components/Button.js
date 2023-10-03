import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

export default props => {
    
    const execute=()=>{
        console.warn('Katuri papo')
    }

    return(
        <SafeAreaView>
            <Button title='Exer 1' onPress={execute}/>
            {/* <Button title='Exer 2' onPress={function(){console.warn("Katuri papo!!!")}}/>
            <Button title='Exer 2' onPress={()=>console.warn("Katuri papo!!!")}/> */}
        </SafeAreaView>
    )

}