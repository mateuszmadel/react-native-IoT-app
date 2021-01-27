import React from "react";
import {StyleSheet, Text,View} from "react-native";
import {  fromHsv } from 'react-native-color-picker'

export default ({ name,place,command,color}) => {

    return (
        <View style={[styles.tab,
            {backgroundColor:fromHsv(color)}
            ]}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.place}>{place}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    tab:{
        flex:1,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        margin:20,
        height:'25%',
        flexBasis: '30%'
    },
    title:{
        fontSize:24,
        fontFamily:'Lora_400Regular'
    },
    place:{
        fontSize:16,
        fontFamily:'Roboto_400Regular'
    }
})