// 초기 버전
import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Colors} from 'react-native-paper'

const title = 'Content'
export default function Content() {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {
    //     // flex: 1,
    //     // height: '100%',
    padding: 5,
    backgroundColor: Colors.lightBlue500,
  },
  text: {fontSize: 20, color: 'white'},
})
// 여러 개의 View가 각기 다른 flex 값을 가질 때
/*
import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Colors} from 'react-native-paper'

const title = 'Content'
export default function Content() {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
      <View style={[{flex: 0, backgroundColor: Colors.red500}]}>
        <Text>flex: 0</Text>
      </View>
      <View style={[{flex: 1, backgroundColor: Colors.green500}]}>
        <Text>flex: 1</Text>
      </View>
      <View style={[{flex: 2, backgroundColor: Colors.purple500}]}>
        <Text>flex: 2</Text>
      </View>
    </View>
  )
}
// prettier-ignore
const styles = StyleSheet.create({
view: {flex: 1, padding: 5, backgroundColor: Colors.lightBlue500},
text: {fontSize: 20, color: 'white'},
})
*/
// flexWrap 효과
/*
import React from 'react'
import {StyleSheet, View, Image} from 'react-native'
import * as D from '../data'

const avatars = D.makeArray(200).map(notUsed => D.randomAvatarUrl())

export default function Content() {
  const children = avatars.map((avatarUrl, index) => (
    <View key={index.toString()} style={styles.avatarView}>
      <Image style={styles.avatar} source={{uri: avatarUrl}} />
    </View>
  ))
  return <View style={[styles.view]}>{children}</View>
}
const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    // overflow: 'hidden',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    flex: 1,
    padding: 5,
  },
  text: {fontSize: 20},
  avatarView: {padding: 3},
  avatar: {width: 50, height: 50, borderRadius: 25},
})
*/
// ScrollView 버전
/*
import React from 'react'
import {StyleSheet, View, Image, ScrollView} from 'react-native'
import * as D from '../data'

const avatars = D.makeArray(200).map(notUsed => D.randomAvatarUrl())

export default function Content() {
  const children = avatars.map((avatarUrl, index) => (
    <View key={index.toString()} style={styles.avatarView}>
      <Image style={styles.avatar} source={{uri: avatarUrl}} />
    </View>
  ))
  return (
    <ScrollView contentContainerStyle={[styles.view]}>{children}</ScrollView>
  )
}
const styles = StyleSheet.create({
  view: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    // flex: 1,
    padding: 5,
  },
  text: {fontSize: 20},
  avatarView: {padding: 3},
  avatar: {width: 50, height: 50, borderRadius: 25},
})
*/
