import React from 'react'
import type {FC,ComponentProps} from 'react'
import { TouchableOpacity, View } from 'react-native'
import { StyleProp, ViewStyle} from 'react-native'

type touchableOpacityProps = ComponentProps<typeof TouchableOpacity>;

export type TouchableViewProps = touchableOpacityProps & {
    viewStyle?: StyleProp<ViewStyle>
}

export const TouchableView: FC<TouchableViewProps> = ({children, viewStyle, ...touchableProps}) => {
    return (
    <TouchableOpacity {...touchableProps}>
        <View style={[viewStyle]}> {children}</View>
    </TouchableOpacity>
    )
}
