import OnBoardingScreen1 from '../features/preApp/screens/onboarding/OnBoardingScreen1';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoardingScreen2 from '../features/preApp/screens/onboarding/OnBoardingScreen2';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name='OnBordingFirst'
            component={OnBoardingScreen1}
          />

          <Stack.Screen
            name='OnBoardingSecond'
            component={OnBoardingScreen2}
          />
        </Stack.Navigator>


      </NavigationContainer>
    
    </>
  );
}


