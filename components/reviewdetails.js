import React from 'react'
import {  StyleSheet,View,Text,Image} from "react-native";
import {styles,ratings} from "./global"
import Card from './card';

export default function ReviewDetails({route,navigation}){
    const {title,rating,body,key}=route.params
    
    return (
        <View style={styles.container}>
            <Card>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <View style={styles.rating}>
                <Text>Gamezone rating:</Text>
                <Image source={ratings[rating]}/>

            </View>
            </Card>
        </View>
    )
}

