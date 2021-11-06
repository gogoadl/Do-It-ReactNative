import React, {useCallback} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {
  SafeAreaView,
  View,
  UnderlineText,
  TopBar,
  Text,
  MaterialCommunityIcon as Icon,
} from '../theme/navigation';
import * as D from '../data';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NavigationHeader} from '../theme';
import {LeftRightNavigation} from '../components';

const title = 'HomeRight';
export default function HomeRight() {
  const navigation = useNavigation();
  const goBack = useCallback(
    () => navigation.canGoBack() && navigation.goBack(),
    [],
  );
  const goHome = useCallback(
    () => navigation.navigate('Home', {id: D.randomId()}),
    [],
  );

  const route = useRoute();
  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <NavigationHeader
          title={title}
          Left={() => (
            <Icon name="arrow-left-bold" size={50} onPress={goBack} />
          )}
          Right={() => (
            <Icon
              name="shield-airplane"
              size={30}
              onPress={() => Alert.alert('menu pressed')}
            />
          )}
        />
        <TopBar>
          <Text onPress={goBack}>go back</Text>
          <Text onPress={goHome}>go Right</Text>
        </TopBar>
        <LeftRightNavigation distance={40} onLeftToRight={goHome}>
          <View style={[styles.content]}>
            <Text style={[styles.text]}>{title}</Text>
            <Text style={[styles.text]}>{JSON.stringify(route, null, 2)}</Text>
          </View>
        </LeftRightNavigation>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  text: {marginRight: 10, fontSize: 20},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
