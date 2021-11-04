import {useRef} from 'react';
import {Animated} from 'react-native';

export const useAnimatedValueXY = (
  initValue: {x: number; y: number} = {x: 0, y: 0},
): Animated.ValueXY => {
  return useRef(new Animated.ValueXY(initValue)).current;
};
// const animValue = useRef(new Animated.Value(0)).current ->
// const animValue = useAnimatedValue(0)
