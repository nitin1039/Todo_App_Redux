import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './screens/Index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CountShow from './screens/CountShow';
import { Provider } from 'react-redux';
import store from './redux/store';


const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Index} />
          <Stack.Screen name="CountShow" component={CountShow} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

