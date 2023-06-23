import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../../pages/Welcome/';
import SignInScreen from '../../pages/SignIn/';
import SignUpScreen from '../../pages/SignUp/';
import ForgotPasswordScreen from '../../pages/ForgotPassword/';
import HomeScreen from '../../pages/Home';
import DetailsScreen from '../../pages/Details';

const Stack = createStackNavigator();

export default function AuthorizationRoute() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                    headerTintColor: "#EEF1F7",
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                    headerTintColor: "#EEF1F7",
                }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                    headerTintColor: "#EEF1F7",
                }}
            />
        </Stack.Navigator>
    );
}