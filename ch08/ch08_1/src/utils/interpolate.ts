import {Animated} from 'react-native';

export const interpolate = (
  animValue: Animated.Value,
  outputRange: number[] | string[],
  inputRange: number[] = [0, 1],
): Animated.AnimatedInterpolation => {
  return animValue.interpolate({inputRange, outputRange});
};
// inputRange를 두 번째 매개변수로 하고 자주 사용하는 [0,1] 배열을 기본값으로 하므로 타이핑의 수고를 덜어줍니다.
