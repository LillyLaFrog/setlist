import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuthContextProvider, { authContext } from './store/auth-context';
import AuthForm from './components/Auth/AuthForm';

import LoginScreen from './screens/login/LoginScreen';
import SignupScreen from './screens/login/SignupScreen';
import { Colors } from './constants/Colors';

function Content(){
  return(
    <Text>App goes here</Text>
  );
}

function Auth(){
  const Stack = createNativeStackNavigator();
  return(
    <Stack.Navigator screenOptions={{
      contentStyle:{
        backgroundColor: Colors.metal,
      },
      headerShown: false
    }}>
      <Stack.Screen 
        name='Login'
        component={LoginScreen}
      />
      <Stack.Screen 
        name='Signup'
        component={SignupScreen}
        />
    </Stack.Navigator>
  );
}

function Root(){
  authCtx = useContext(authContext);
    return(
      (authCtx.isLoggedIn?<Content/>:<Auth />)
    );
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
