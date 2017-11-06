import React from 'react'
import LineChart from '../line-chart'
import * as shape from 'd3-shape'
import YAxis from '../y-axis'
import { View } from 'react-native'

class YAxisExample extends React.PureComponent {

    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        const contentInset = { top: 20, bottom: 20 }

        return (
            <View style={ { height: 200, flexDirection: 'row' } }>
                <YAxis
                    dataPoints={ data }
                    contentInset={ contentInset }
                    labelStyle={ { color: 'grey' } }
                    formatLabel={ value => `${value}ºC` }
                />
                <LineChart
                    style={ { flex: 1, marginLeft: 16 } }
                    dataPoints={ data }
                    fillColor={ 'purple' }
                    strokeColor={ 'rgb(134, 65, 244)' }
                    shadowColor={ 'rgba(134, 65, 244, 0.2)' }
                    contentInset={ contentInset }
                    curve={ shape.curveLinear }
                />
            </View>
        )
    }

}

export default YAxisExample
