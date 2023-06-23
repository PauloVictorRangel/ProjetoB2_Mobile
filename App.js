import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';

import AuthorizationRoute from './src/routes/Authorization/';
import ScreensRoute from './src/routes/Screens/';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {true ? <ScreensRoute /> : <AuthorizationRoute />}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});