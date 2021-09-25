import React, {useEffect, useCallback, useState} from 'react';
import {StyleSheet, View, Text, ActivityIndicator, Button} from 'react-native';
import {Colors} from 'react-native-paper';

export default function Timer() {
  const [loading, setLoading] = useState(true); //  loading의 초기값은 true이며, setLoading 함수로 상태를 변경가능
  const toggleLoading = useCallback(
    () => setLoading((loading) => !loading),
    []
  ); // toggleLoading은 loading의 상태를 반대로 전환한다.
  useEffect(() => {
    // ui가 로딩되고 3초 후 loading의 상태를 false로 만듬
    const id = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(id);
  }, [loading]);

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Timer</Text>
      <Text>loading: {loading.toString()}</Text>
      <Button
        onPress={toggleLoading}
        title={loading ? 'stop loading' : 'start loading'}
      />
      {loading && ( // loading 상태라면 로딩 화면을 보여주도록 함
        <ActivityIndicator size="large" color={Colors.deepPurple700} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: Colors.yellow300},
  title: {fontSize: 30, fontWeight: '600'},
});
