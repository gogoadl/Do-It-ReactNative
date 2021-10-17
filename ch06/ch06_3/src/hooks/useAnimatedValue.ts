import {useMemo, useRef} from 'react';
import {Animated} from 'react-native';

const makeArray = (length: number) => new Array(length).fill(null);

export const useAnimatedValue = (length: number, initValue: number = 0) => {
  return useMemo(
    () => makeArray(length).map(notUsed => new Animated.Value(initValue)),
    [],
  );
};
// const animValue = useRef(new Animated.Value(0)).current ->
// const animValue = useAnimatedValue(0)
