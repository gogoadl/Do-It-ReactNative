import React from "react";
import { StyleSheet, SafeAreaView, Text, Dimensions, Platform } from "react-native";
import { Colors } from "react-native-paper";
import color from 'color'

const {width, height} = Dimensions.get('window') // 이 값은 기기를 회전 (landscape)해도 변하지 않는다.

export default function App() {
  return(
    <SafeAreaView style={[styles.safeAreaView]}>
    <Text style={[styles.text]}>os: {Platform.OS}</Text>
    <Text style={[styles.text]}>width : {width} px</Text>
    <Text style={[styles.text]}>height : {height} px</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {backgroundColor: Colors.blue500}, 
  text: { fontSize: 20, color: color(Colors.blue500).lighten(0.9).string()}
})