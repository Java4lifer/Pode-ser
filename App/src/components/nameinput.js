import React, {useState} from 'react'
import {SafeAreaView, Text, TextInput} from 'react-native'
//import estilo from '../estilo'

export default props =>{
    const [nam, setNam] = useState('a')
return(
    <SafeAreaView>
        <Text> {nam}  </Text>
        <TextInput 
        placeholder="Type name"
        value={nam}
        onChangeText={n=>setNam(n)}
        />
    </SafeAreaView>
)
}