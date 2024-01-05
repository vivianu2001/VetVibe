// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RoleSelectionScreen from './screens/RoleSelectionScreen';
import PetOwnerLoginScreen from './screens/PetOwnerLoginScreen';
import VeterinarianLoginScreen from './screens/VeterinarianLoginScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={RoleSelectionScreen} />
        <Stack.Screen name="Pet Owner" component={PetOwnerLoginScreen} />
        <Stack.Screen name="Veterinarian" component={VeterinarianLoginScreen} />

        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
