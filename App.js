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
import PetProfileScreen from "./screens/ PetProfileScreen";
import EditPetProfileScreen from "./screens/EditPetProfileScreen";
import VeterinarianEditProfile from "./screens/VeterinarianEditProfile";
import AddTipScreen from "./screens/AddTipScreen";
import EditTipScreen from "./screens/EditTipScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={RoleSelectionScreen} />
        <Stack.Screen name="Pet Owner Login" component={PetOwnerLoginScreen} />
        <Stack.Screen
          name="Pet Owner Home Screen"
          component={PetOwnerHomeScreen}
        />
        <Stack.Screen name="Pet Profile Screen" component={PetProfileScreen} />
        <Stack.Screen
          name="Pet Profile Screen Edit"
          component={EditPetProfileScreen}
        />

        <Stack.Screen
          name="Veterinarian Login"
          component={VeterinarianLoginScreen}
        />
        <Stack.Screen
          name="Veterinarian Home Screen"
          component={VeterinarianHomeScreen}
        />
        <Stack.Screen name="Edit Tip Screen" component={EditTipScreen} />
        <Stack.Screen
          name="Veterinarian Edit Profile Screen"
          component={VeterinarianEditProfile}
        />
        <Stack.Screen name="Add Tip Screen" component={AddTipScreen} />
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
