import { LineChart } from 'react-native-chart-kit';
import { View, Dimensions } from 'react-native';
import { Text } from '@ui-kitten/components';

const screenWidth = Dimensions.get('window').width;

export default function Line() {

    const data = {
        labels: ["New Media", "Digital Design", "Computer Systems"],
        datasets: [
            {
                data: [
                    40000,
                    50000,
                    60000,
                ],
                color: (opacity = 1) => `rgba(37, 37, 37, ${opacity})`, // Color of points inside
                strokeWidth: 2 // optional
            }
        ],
    };

    const chartConfig = {
        backgroundColor: "white",
        backgroundGradientFrom: "white",
        backgroundGradientTo: "white",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(37, 37, 37, ${opacity})`, // under chart color
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, //labels
        strokeWidth: 2,
        useShadowColorFromDataset: false,
        style: {
            backgroundColor: 'white',
            borderRadius: 16,
        },
        propsForDots: {
            r: '5',
            strokeWidth: '2',
            stroke: 'black', //stroke colors
        }
    }

    return (
        <View>
            <Text category='h5'>Average Starting Salary</Text>
            <LineChart
                data={data}
                width={screenWidth}
                height={250}
                chartConfig={chartConfig}
                bezier
            />
        </View>
    )
}