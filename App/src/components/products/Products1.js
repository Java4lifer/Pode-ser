import React from 'react'
import {Text} from 'react-native'

import Products from './Products'

export default props =>{
function getList(){
    return Products.map(
        p=>{
            return(
                <Text key={p.id}>
                    {p.id}) {p.name} preço R${p.price}
                </Text>
            )
        }
    )

}
return(
    <>
        <Text>Lista de Produtos</Text>
        {getList()}
    </>
)
}