import React from 'react'
import { Svg } from 'expo';
const { G } = Svg;

const Decorator = ({ children, data, ...props }) => {
    return (
        <G>
            {
                React.Children.map(children, child => {
                    return data.map((value, index) => React.cloneElement(child, { value, index, ...props }))
                })
            }
        </G>
    )
}

export default Decorator
