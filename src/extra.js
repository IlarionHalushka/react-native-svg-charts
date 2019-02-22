import React from 'react'
import { Svg } from 'expo';
const { G } = Svg;

const Extra = ({ children, ...props }) => {
    return (
        <G>
            {
                React.Children.map(children, child => {
                    return React.cloneElement(child, props)
                })
            }
        </G>
    )
}

export default Extra
