import React, { useState, useEffect } from 'react';
import BottomTabNavigation from './BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Categories, MyWishlist, Notifications, Onboarding1 } from '../screens';
import Brands from '../screens/Brands';
import BrandInfo from '../screens/BrandInfo';
import DiscountDetails from '../screens/DiscountDetails';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const checkIfFirstLaunch = async () => {
            try {
                const value = await AsyncStorage.getItem('alreadyLaunched')
                if (value === null) {
                    await AsyncStorage.setItem('alreadyLaunched', 'true')
                    setIsFirstLaunch(true)
                } else {
                    setIsFirstLaunch(true)
                }
            } catch (error) {
                setIsFirstLaunch(false)
            }
            setIsLoading(false)
        }

        checkIfFirstLaunch()
    }, []);

    if (isLoading) {
        return null;
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}

                initialRouteName={isFirstLaunch ? 'onboarding1' : 'welcome'}>

                <Stack.Screen name="onboarding1" component={Onboarding1} />

                <Stack.Screen name="(tabs)" component={BottomTabNavigation} />

                <Stack.Screen name="brands" component={Brands} />
                <Stack.Screen name="brand-info" component={BrandInfo} />
                <Stack.Screen name="categories" component={Categories} />
                <Stack.Screen name="mywishlist" component={MyWishlist} />
                <Stack.Screen name="notifications" component={Notifications} />
                <Stack.Screen name="discount-details" component={DiscountDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation