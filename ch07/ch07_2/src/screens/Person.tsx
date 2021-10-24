import React, {useState} from 'react';
import type {FC} from 'react';
import {Colors} from 'react-native-paper';
import moment from 'moment-with-locales-es6';
import * as D from '../data';
import {Image} from 'react-native';
import {
  View,
  Text,
  UnderlineText,
  TouchableView,
  MaterialCommunityIcon as Icon,
} from '../theme/navigation';
import {Avatar} from '../components';
import {styles} from './Person.style';

export type PersonProps = {
  person: D.IPerson;
  deletePressed: () => void;
};
// prettier-ignore
const Person: FC<PersonProps> = ({person: initialPerson, deletePressed}) => {
  const [person,setPerson] = useState<D.IPerson>(initialPerson)
    
  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} />
          <Text style={[styles.text]}>Press Me</Text>
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon name="trash-can-outline" size={26} color={Colors.lightBlue500}
            onPress={deletePressed}/>
        </View>
        <Text numberOfLines={3} ellipsizeMode="tail"
          style={[styles.text, styles.comments]}>
          {person.comments}
        </Text>
        <Image style={[styles.image]} source={{uri: person.image}} />
        <TouchableView style={[styles.countsView]}>
          <Icon
            name="comment"
            size={24}
            color={Colors.blue500}
          />
          </TouchableView>
          <TouchableView style={[styles.countsView]}>
          <Icon
            name="twitter-retweet"
            size={24}
            color={Colors.purple500}
          />
          </TouchableView>
          <TouchableView style={[styles.countsView]}>
          <Icon
            name="heart"
            size={24}
            color={Colors.red500}
          />
        </TouchableView>
      </View>
    </View>
  )
}
export default Person;
