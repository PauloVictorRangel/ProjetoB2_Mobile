import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons';

import SearchScreen from '../../pages/Search';
import FavoriteScreen from '../../pages/Favorites';
import HomeToDetails from '../HomeToDetails';

const Tab = createBottomTabNavigator();

export default function ScreensRoute() {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    padding: "calc(1rem + 1vw)",
                    backgroundColor: "#282F3B",
                    borderTopColor: "#282F3B"
                },
                tabBarActiveTintColor: "#FF1D25",
                tabBarInactiveTintColor: "#545D6C",
            }}>
            <Tab.Screen
                name="Home"
                component={HomeToDetails}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name='clapperboard' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name='search' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name='bookmark' size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}