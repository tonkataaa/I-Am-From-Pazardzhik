import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import OnBoardingScreen1 from '../features/preApp/screens/onboarding/OnBoardingScreen1';
import OnBoardingScreen2 from '../features/preApp/screens/onboarding/OnBoardingScreen2';
import OnBoardingScreen3 from '../features/preApp/screens/onboarding/OnBoardingScreen3';
import OnBoardingScreen4 from '../features/preApp/screens/onboarding/OnBoardingScreen4';
import EventsScreen from '../features/Home/screens/EventsScreen';
import TransportScreen from '../features/Home/screens/TransportScreen';
import BussinessScreen from '../features/Home/screens/BussinessScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  function HomeTabs(){
    return(
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Събития') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Транспорт') {
              iconName = focused ? 'bus' : 'bus';
            } else if (route.name === 'Бизнес') {
              iconName = focused ? 'storefront' : 'storefront';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'grey',
        })}
      >
        <Tab.Screen name='Събития' component={EventsScreen} options={{headerShown: false}} />
        <Tab.Screen name='Транспорт' component={TransportScreen} options={{headerShown: false}} />
        <Tab.Screen name='Бизнес' component={BussinessScreen} options={{headerShown: false}} />
      </Tab.Navigator>
    );
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name='OnBoardingFirst'
            component={OnBoardingScreen1}
          />

          <Stack.Screen
            name='OnBoardingSecond'
            component={OnBoardingScreen2}
          />

          <Stack.Screen
            name='OnBoardingThird'
            component={OnBoardingScreen3}
          />

          <Stack.Screen
            name='OnBoardingFourth'
            component={OnBoardingScreen4}
          />

          <Stack.Screen
            name='Home'
            component={HomeTabs}
          />

        </Stack.Navigator>
      </NavigationContainer>
    
    </>
  );
}


