import React, {forwardRef, useImperativeHandle} from 'react';
import type {ForwardRefRenderFunction, ComponentProps} from 'react';
import {Keyboard, TextInput as RNTextInput} from 'react-native';

export type TextInputMethods = {
  focus: () => void;
  dismiss: () => void;
};

export type ImperativeTextInputProps = ComponentProps<typeof RNTextInput>;

const iImperativeTextInput: ForwardRefRenderFunction<
  TextInputMethods,
  ImperativeTextInputProps
> = (props, ref) => {
  const textInputRef = useRef<RNTextInput | null>(null);
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        textInputRef.current?.focus();
      },
      dismiss: () => {
        Keyboard.dismiss();
      },
    }),
    [],
  );
  return <RNTextInput {...props} />;
};
export default forwardRef(iImperativeTextInput);
