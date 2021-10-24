import React, {useRef, useMemo, useCallback} from 'react';
import type {FC} from 'react';
import {StyleSheet, FlatList, Image, View, Animated} from 'react-native';
import type {NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import {Colors} from 'react-native-paper';
import {TouchableView} from './TouchableView';
import {
  useAnimatedValue,
  useMonitorAnimatedValue,
  useTransformStyle,
} from '../hooks';

export type ImageSliderProps = {
  imageUrls: string[];
  imageWidth: number;
  showThumbnails?: boolean;
};

const circleWidth = 10,
  circleMarginRight = 5,
  thumbnailSize = 30;

export const ImageSlider: FC<ImageSliderProps> = ({
  imageUrls,
  imageWidth,
  showThumbnails,
}) => {
  const flatListRef = useRef<FlatList | null>(null);
  const selectedIndexAnimValue = useAnimatedValue(0);
  const selectedIndex = useMonitorAnimatedValue(selectedIndexAnimValue);

  const circleWidthAnimValue = useAnimatedValue(circleWidth);
  const circleMarginRightAnimValue = useAnimatedValue(circleMarginRight);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (imageWidth == 0) return;

      const {contentOffset} = event.nativeEvent;
      const index = Math.round(contentOffset.x / imageWidth);
      selectedIndexAnimValue.setValue(index);
    },
    [],
  );

  const selectImage = useCallback(
    (index: number) => () => {
      flatListRef.current?.scrollToIndex({index});
    },
    [],
  );
  const circles = useMemo(
    () =>
      imageUrls.map((uri, index) => <View key={index} style={styles.circle} />),
    [],
  );

  const thumbnails = useMemo(
    () =>
      imageUrls.map((uri, index) => (
        <TouchableView
          key={index}
          onPress={selectImage(index)}
          style={[styles.thumbnails]}>
          <Image source={{uri}} style={{width: 30, height: 30}} />
        </TouchableView>
      )),
    [],
  );

  const translateX = useTransformStyle({
    translateX: Animated.multiply(
      selectedIndexAnimValue,
      Animated.add(circleWidthAnimValue, circleMarginRightAnimValue),
    ),
  });

  return (
    <>
      <FlatList
        ref={flatListRef}
        horizontal={true}
        contentContainerStyle={{width: imageUrls.length * imageWidth}}
        data={imageUrls}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: imageWidth}]}
            source={{uri: item}}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={[styles.iconBar, {justifyContent: 'center'}]}>
        <View style={{flexDirection: 'row'}}>
          {circles}
          <Animated.View
            style={[styles.circle, styles.selectedCircle, translateX]}
          />
        </View>
      </View>
      {showThumbnails && (
        <View style={[styles.iconBar, {justifyContent: 'space-between'}]}>
          {thumbnails}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {height: 10, resizeMode: 'cover'},
  iconBar: {flexDirection: 'row', padding: 5},
  thumbnails: {borderWidth: 1, padding: 2},
  circle: {
    width: circleWidth,
    height: circleWidth,
    borderRadius: circleWidth / 2,
    marginRight: circleMarginRight,
    backgroundColor: Colors.pink100,
  },
  selectedCircle: {position: 'absolute', backgroundColor: Colors.pink700},
});
