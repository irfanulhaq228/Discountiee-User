import React from 'react';
import { View, Platform, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from '../theme/ThemeProvider';
import { COLORS, FONTS, icons } from '../constants';

import { Categories, Home } from '../screens';
import Brands from '../screens/Brands';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    const { dark } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: Platform.OS !== 'ios',
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: Platform.OS === 'ios' ? 90 : 60,
                    backgroundColor: dark ? COLORS.dark1 : COLORS.white,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: "",
                    tabBarIcon: ({ focused }: { focused: boolean }) => {
                        return (
                            <View style={{
                                alignItems: "center",
                                paddingTop: 16
                            }}>
                                <Image
                                    source={focused ? icons.home : icons.home2Outline}
                                    resizeMode="contain"
                                    style={{
                                        width: 24,
                                        height: 24,
                                        tintColor: focused ? dark ? COLORS.white : COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                    }}
                                />
                                <Text style={{
                                    ...FONTS.body4,
                                    color: focused ? dark ? COLORS.white : COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                }}>Home</Text>
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name="brands"
                component={Brands}
                options={{
                    title: "",
                    tabBarIcon: ({ focused }: { focused: boolean }) => {
                        return (
                            <View style={{
                                alignItems: "center",
                                paddingTop: focused ? 8 : 10,
                            }}>
                                <Image
                                    source={focused ? icons.brands : icons.brandsOutline}
                                    resizeMode="contain"
                                    style={{
                                        width: focused ? 32 : 30,
                                        height: focused ? 32 : 30,
                                        tintColor: focused ? dark ? COLORS.white : COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                        marginBottom: -3
                                    }}
                                />
                                <Text style={{
                                    ...FONTS.body4,
                                    color: focused ? dark ? COLORS.white : COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                    marginBottom: -2
                                }}>Brands</Text>
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name="categories"
                component={Categories}
                options={{
                    title: "",
                    tabBarIcon: ({ focused }: { focused: boolean }) => {
                        return (
                            <View style={{
                                alignItems: "center",
                                paddingTop: 16
                            }}>
                                <Image
                                    source={focused ? icons.category : icons.categoryOutline}
                                    resizeMode="contain"
                                    style={{
                                        width: 24,
                                        height: 24,
                                        tintColor: focused ? dark ? COLORS.white : COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                    }}
                                />
                                <Text style={{
                                    ...FONTS.body4,
                                    color: focused ? dark ? COLORS.white : COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                }}>Categories</Text>
                            </View>
                        )
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation