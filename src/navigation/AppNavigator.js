import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainToDoScreen from "../Screeens/MainToDoScreen";
import NewToDoScreen from "../Screeens/NewToDoScreen";
import SplashScreen from "../Screeens/SplashScreen";

const Stack = createNativeStackNavigator();



function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'}>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainScreen" component={MainToDoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NewToDoScreen" component={NewToDoScreen} options={{
          headerStyle: { backgroundColor: '#FFF' }, headerTitle: 'Вернуться назад'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator