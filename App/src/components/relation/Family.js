import React from 'react'
import { Text } from 'react-native'

export default props =>{
    return(
        <>
            <Text>Start of racism family</Text>
            {props.children}
            <Text>End of racism family</Text>

        </>

    )
}