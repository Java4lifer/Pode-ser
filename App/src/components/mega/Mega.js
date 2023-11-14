import React, { Component } from "react"
import { Button, Text, TextInput } from 'react-native'

export default class Mega extends Component {
    state ={
        howmanynum: this.props.howmanynum,
        numbers: []
    }

    althowmany = (many) =>{
        this.setState({ howmanynum: +many })
    }

    createnewnum = num =>{
        const nue = parseInt(Math.random()*60)+1
        return num.includes(nue) ? this.createnewnum(num) : nue
    }

    createnum = () => {
        const numers = Array(this.state.howmanynum)
        .fill()
        .reduce(n => [...n, this.createnewnum(n)], [])
        this.setState({numers})
    }


    render() {
        return(
            <>
            <Text>
                Mega-cena.
            </Text>
            <TextInput
            keyboardType={"numeric"}
            style={{borderBottomWidth: 1}}
            placeholder="How many numbers"
            value={this.state.howmanynum}
            onChange={this.althowmany}
            />
            <Button title="Maketh thy numbers"
            onPress={this.createnum}/>
            <Text>
                {this.state.numbers.join(", ")}
            </Text>
            </>
        )
    }
}