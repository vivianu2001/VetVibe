// AuthNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RoleSelectionScreen from '../screens/RoleSelectionScreen';
import PetOwnerLoginScreen from '../screens/PetOwnerLoginScreen'; 
import VeterinarianLoginScreen from '../screens/VeterinarianLoginScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="RoleSelection">
      <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
      <Stack.Screen name="PetOwnerLogin" component={PetOwnerLoginScreen} />
      <Stack.Screen name="VeterinarianLogin" component={VeterinarianLoginScreen} />
      {/* Add more screens for other roles if needed */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
