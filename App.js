import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuthContextProvider, { authContext } from './store/auth-context';

import LoginScreen from './screens/login/LoginScreen';
import SignupScreen from './screens/login/SignupScreen';
import { Colors } from './constants/Colors';
import FollowedArtists from './screens/content/artist/FollowedArtists';
import SearchArtists from './screens/content/artist/SearchArtists';
import IconButton from './components/ui/IconButton';

function Content(){
  const Stack = createNativeStackNavigator();
  return(
    <Stack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      contentStyle:{
        backgroundColor: Colors.corkboard,
      },
    }}>
      <Stack.Screen 
        name='FollowedArtists'
        component={FollowedArtists}
        options={({navigation})=> ({
          title: 'Followed Artists',
          headerLeft: ({tintColor})=>{
            return(
              <IconButton icon='person' onPress={()=>navigation.navigate('Account')} color={tintColor} size={24} />
            );
          },
          headerRight: ({tintColor})=>{
            return(
              <IconButton icon='search' onPress={()=>navigation.navigate('SearchArtists')} color={tintColor} size={24} />
            );
          }
        })}
      />
      <Stack.Screen 
        name='SearchArtists'
        component={SearchArtists}
        options={{
          title: "Search Artists",
        }}
        />
    </Stack.Navigator>
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
    <>
      <NavigationContainer>
        <AuthContextProvider> 
          <Root />
        </AuthContextProvider>
      </NavigationContainer>
      <StatusBar style='dark'/>
    </>
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
