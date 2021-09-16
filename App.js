
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './screens/signupscreen';
import AppLoading from 'expo-app-loading';
const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    Yellowtail_400Regular,
    Poppins_400Regular,
    Moul_400Regular,
    Poppins_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Signup">
          <Stack.Screen name="Signup" options={{ headerShown: false }} component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
