// 초기 모습
/*
import React, {forwardRef, useImperativeHandle} from 'react'
import type {ForwardRefRenderFunction, ComponentProps} from 'react'
import {TextInput as RNTextInput} from 'react-native'

export type TextInputMethods = {
  focus: () => void
  dismiss: () => void
}
export type ImperativeTextInputProps = ComponentProps<typeof RNTextInput>

const ImperativeTextInput: ForwardRefRenderFunction<
  TextInputMethods,
  ImperativeTextInputProps
> = (props, ref) => {
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {}, // 조금 뒤 구현합니다.
      dismiss: () => {} // 조금 뒤 구현합니다.
    }),
    []
  )
  return <RNTextInput {...props} />
}
export default forwardRef(ImperativeTextInput)
*/
// TextInputMethods 구현
/*
import React, {forwardRef, useImperativeHandle, useRef} from 'react'
import type {ForwardRefRenderFunction, ComponentProps} from 'react'
import {TextInput as RNTextInput, Keyboard} from 'react-native'

export type TextInputMethods = {
  focus: () => void
  dismiss: () => void
}
export type ImperativeTextInputProps = ComponentProps<typeof RNTextInput>

const ImperativeTextInput: ForwardRefRenderFunction<
  TextInputMethods,
  ImperativeTextInputProps
> = (props, ref) => {
  const textInputRef = useRef<RNTextInput | null>(null)
  useImperativeHandle(
    ref,
    () => ({
      focus() {
        textInputRef.current?.focus()
      },
      dismiss() {
        Keyboard.dismiss()
      }
    }),
    []
  )
  return <RNTextInput ref={textInputRef} {...props} />
}
export default forwardRef(ImperativeTextInput)
*/
// 최종 모습
import React, {forwardRef, useImperativeHandle, useRef} from 'react'
import type {ForwardRefRenderFunction} from 'react'
import {TextInput as RNTextInput, Keyboard} from 'react-native'
import {TextInput} from '../theme/paper'
import type {TextInputProps} from '../theme/paper'
export type TextInputMethods = {
  focus: () => void
  dismiss: () => void
}
export type ImperativeTextInputProps = TextInputProps

const ImperativeTextInput: ForwardRefRenderFunction<
  TextInputMethods,
  ImperativeTextInputProps
> = (props, ref) => {
  const textInputRef = useRef<RNTextInput | null>(null)
  useImperativeHandle(
    ref,
    () => ({
      focus() {
        textInputRef.current?.focus()
      },
      dismiss() {
        Keyboard.dismiss()
      }
    }),
    []
  )
  return <TextInput ref={textInputRef} {...props} />
}
export default forwardRef(ImperativeTextInput)
