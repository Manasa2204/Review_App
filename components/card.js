import React from 'react'
import { View,Text} from "react-native";
import {styles} from "./global"

export default function Card(props) {
  return (
    <View style={styles.card}>
        <View style={styles.cardContent}>
            {props.children}
        </View>
    </View>
  )
}
