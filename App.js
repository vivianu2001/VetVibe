// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RoleSelectionScreen from "./screens/RoleSelectionScreen";
import PetOwnerLoginScreen from "./screens/PetOwnerLoginScreen";
import VeterinarianLoginScreen from "./screens/VeterinarianLoginScreen";
import SignupScreen from "./screens/SignupScreen";
import PetOwnerSign from "./screens/PetOwnerSign";
import VeterinarianSign from "./screens/VeterinarianSign";
import PetOwnerHomeScreen from "./screens/PetOwnerHomeScreen";
import VeterinarianHomeScreen from "./screens/VeterinarianHomeScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={RoleSelectionScreen} />
        <Stack.Screen name="Pet Owner" component={PetOwnerLoginScreen} />
        <Stack.Screen name="Pet Owner Home Screen" component={PetOwnerHomeScreen} />
        <Stack.Screen name="Veterinarian" component={VeterinarianLoginScreen} />
        <Stack.Screen name="Veterinarian Home Screen" component={VeterinarianHomeScreen} />
        <Stack.Screen name="Sign up" component={SignupScreen} />
        <Stack.Screen name="Sign up Owner" component={PetOwnerSign} />
        <Stack.Screen
          name="Sign up Veterinarian"
          component={VeterinarianSign}
        />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
