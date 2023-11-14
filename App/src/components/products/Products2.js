import React from "react";
import { Text, FlatList, SafeAreaView } from "react-native";
import Products from "./Products";

export default props =>{
    const rendprod = ({item: p}) =>{
        return <Text>{p.id}) {p.name} - $ {p.price} </Text>
    }

    return(
        <SafeAreaView>
            <Text>Product List, yes</Text>
            <FlatList
            data={Products}
            keyExtractor={i=>`${i.id}`}
            renderItem={rendprod}/>
        </SafeAreaView>
    )
}