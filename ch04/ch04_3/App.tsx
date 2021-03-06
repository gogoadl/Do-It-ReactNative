import React, {useMemo, useState} from "react";
import type {FC} from 'react'
import { SafeAreaView, StyleSheet, FlatList, View, ScrollView, Dimensions, Text } from "react-native";
import { Colors } from "react-native-paper";
import PersonUsingValueState from './src/screens/PersonUsingValueState'
import PersonUsingPassingState from './src/screens/PersonUsingPassingState'
import PersonUsingObjectState from './src/screens/PersonUsingObjectState'
import * as D from './src/data'
import TopBar from "./src/screens/TopBar";

const {width} = Dimensions.get('window')

type PersonInformation = {
  title: string
  Component: FC<any>
}

const personInformations: PersonInformation[] = [
  {title: 'PersonUsingValueState', Component: PersonUsingValueState},
  {title: 'PersonUsingPassingState', Component: PersonUsingPassingState},
  {title: 'PersonUsingObjectState', Component: PersonUsingObjectState}
]

const numberOfComponents = personInformations.length

export default function App() {
  const [people, setPeople] = useState<D.IPerson>([])
  const children = useMemo(() => 
  personInformations.map(({title, Component}:personInformations) =>(
    <View style={{flex: 1}} key={title}>
      <Text style={[styles.text]}>{title}</Text>
      <FlatList data={people}
      renderItem={({item}) => <Component person={item} />}
      keyExtractor={(item,index) => item.id}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />} />
    </View>))
    , [people.length])

    return (
      <SafeAreaView style={styles.flex}>
        <TopBar setPeople={setPeople} />
        <ScrollView horizontal contentContainerStyle={styles.horizontalScrollView}>
          {children}
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  itemSeparator: {borderWidth: 1, borderColor: Colors.grey500},
  horizontalScrollView: {width: width * numberOfComponents},
  text: {fontSize: 24, textAlign: 'center'}
})