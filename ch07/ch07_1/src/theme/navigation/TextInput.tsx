import React from 'react';
import type {ForwardRefRenderFunction, ComponentProps} from 'react';
import {StyleSheet, TextInput as RNTextInput} from 'react-native';
import {useTheme} from '@react-navigation/native';

export type TextInputProps = ComponentProps<typeof RNTextInput>;

export const TextInput: ForwardRefRenderFunction<RNTextInput, TextInputProps> =
  ({style, ...props}, ref) => {
    const {colors} = useTheme();

    return (
      <RNTextInput
        //ref={ref} // attempted to assign to readonly property 오류 발생
        style={[
          {color: colors.text, borderColor: colors.text},
          styles.textInput,
          style,
        ]}
        placeholderTextColor={colors.text}
        {...props}
      />
    );
  };

const styles = StyleSheet.create({
  textInput: {borderWidth: 1, borderRadius: 5},
});
