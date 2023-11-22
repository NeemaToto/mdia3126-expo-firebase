import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import Dashboard from './screens/Dashboard';
import UserEmailRegister from './firebase/UserEmailRegister'
import UserEmailSignin from './firebase/UserEmailSignIn'
import UserLogout from './firebase/UserLogOut';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (    
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='UserEmailSignin'>
            <Stack.Screen
              name="UserEmailSignin"
              component={UserEmailSignin}
              options={{
                title: 'Welcome to BCIT',
                headerStyle: {
                  backgroundColor: '#053369',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="UserEmailRegister"
              component={UserEmailRegister}
              options={{
                title: 'Register',
                headerStyle: {
                  backgroundColor: '#053369',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                title: 'Dashboard',
                headerStyle: {
                  backgroundColor: '#053369',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ApplicationProvider>
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
