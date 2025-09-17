import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoardingScreen1 from '../features/preApp/screens/onboarding/OnBoardingScreen1';
import OnBoardingScreen2 from '../features/preApp/screens/onboarding/OnBoardingScreen2';
import OnBoardingScreen3 from '../features/preApp/screens/onboarding/OnBoardingScreen3';
import OnBoardingScreen4 from '../features/preApp/screens/onboarding/OnBoardingScreen4';


const Stack = createNativeStackNavigator();

export default function App() {
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
        </Stack.Navigator>


      </NavigationContainer>
    
    </>
  );
}


