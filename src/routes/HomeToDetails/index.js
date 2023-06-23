import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../pages/Home/';
import DetailsScreen from '../../pages/Details/';

const Stack = createStackNavigator();

export default function HomeToDetails() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                    headerTransparent: true,
                    headerTintColor: "#EEF1F7",
                }}
            />
        </Stack.Navigator>
    );
}