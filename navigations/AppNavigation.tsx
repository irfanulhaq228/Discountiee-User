import React, { useState, useEffect } from 'react';
import BottomTabNavigation from './BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AddNewAddress, AddNewCard, AddPromo, Address, BagsDetails, Call, CancelOrder, CancelOrderPaymentMethods, Categories, CategoryBags, CategoryClothes, CategoryElectronics, CategoryJewelry, CategoryKitchen, CategoryShoes, CategoryToys, CategoryWatch, ChangeEmail, ChangePassword, ChangePIN, Chat, Checkout, CheckoutSuccessful, ChooseShippingMethods, ClothesDetails, CreateNewPassword, CreateNewPIN, CustomerService, EditProfile, ElectronicsDetails, EnterYourPIN, Ereceipt, FillYourProfile, Fingerprint, ForgotPasswordEmail, ForgotPasswordMethods, ForgotPasswordPhoneNumber, Inbox, JewerlyDetails, KitchenDetails, Login, MostPopularProducts, MyWishlist, Notifications, Onboarding1, Onboarding2, OtpVerification, PaymentMethods, ProductEreceipt, ProductReviews, Profile, Search, SelectShippingAddress, SettingsHelpCenter, SettingsInviteFriends, SettingsLanguage, SettingsNotifications, SettingsPayment, SettingsPrivacyPolicy, SettingsSecurity, ShoesDetails, Signup, TopupEreceipt, TopupEwalletAmount, TopupEwalletMethods, ToysDetails, TrackOrder, TransactionHistory, VideoCall, WatchDetails, Welcome } from '../screens';
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
    }, [])

    if (isLoading) {
        return null;
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}

                initialRouteName={isFirstLaunch ? 'onboarding1' : 'welcome'}>

                <Stack.Screen name="onboarding1" component={Onboarding1} />
                <Stack.Screen name="onboarding2" component={Onboarding2} />

                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="signup" component={Signup} />

                <Stack.Screen name="(tabs)" component={BottomTabNavigation} />

                <Stack.Screen name="brands" component={Brands} />
                <Stack.Screen name="brand-info" component={BrandInfo} />
                <Stack.Screen name="categories" component={Categories} />
                <Stack.Screen name="mywishlist" component={MyWishlist} />
                <Stack.Screen name="notifications" component={Notifications} />
                <Stack.Screen name="discount-details" component={DiscountDetails} />

                <Stack.Screen name="addnewaddress" component={AddNewAddress} />
                <Stack.Screen name="addnewcard" component={AddNewCard} />
                <Stack.Screen name="addpromo" component={AddPromo} />
                <Stack.Screen name="address" component={Address} />
                <Stack.Screen name="bagsdetails" component={BagsDetails} />
                <Stack.Screen name="call" component={Call} />
                <Stack.Screen name="cancelorder" component={CancelOrder} />
                <Stack.Screen name="cancelorderpaymentmethods" component={CancelOrderPaymentMethods} />
                <Stack.Screen name="categorybags" component={CategoryBags} />
                <Stack.Screen name="categoryclothes" component={CategoryClothes} />
                <Stack.Screen name="categoryelectronics" component={CategoryElectronics} />
                <Stack.Screen name="categoryjewelry" component={CategoryJewelry} />
                <Stack.Screen name="categorykitchen" component={CategoryKitchen} />
                <Stack.Screen name="categoryshoes" component={CategoryShoes} />
                <Stack.Screen name="categorytoys" component={CategoryToys} />
                <Stack.Screen name="categorywatch" component={CategoryWatch} />
                <Stack.Screen name="changeemail" component={ChangeEmail} />
                <Stack.Screen name="changepassword" component={ChangePassword} />
                <Stack.Screen name="changepin" component={ChangePIN} />
                <Stack.Screen name="chat" component={Chat} />
                <Stack.Screen name="checkout" component={Checkout} />
                <Stack.Screen name="checkoutsuccessful" component={CheckoutSuccessful} />
                <Stack.Screen name="chooseshippingmethods" component={ChooseShippingMethods} />
                <Stack.Screen name="clothesdetails" component={ClothesDetails} />
                <Stack.Screen name="createnewpassword" component={CreateNewPassword} />
                <Stack.Screen name="createnewpin" component={CreateNewPIN} />
                <Stack.Screen name="customerservice" component={CustomerService} />
                <Stack.Screen name="editprofile" component={EditProfile} />
                <Stack.Screen name='electonicsdetails' component={ElectronicsDetails} />
                <Stack.Screen name="enteryourpin" component={EnterYourPIN} />
                <Stack.Screen name="ereceipt" component={Ereceipt} />
                <Stack.Screen name="fillyourprofile" component={FillYourProfile} />
                <Stack.Screen name="fingerprint" component={Fingerprint} />
                <Stack.Screen name="forgotpasswordemail" component={ForgotPasswordEmail} />
                <Stack.Screen name="forgotpasswordmethods" component={ForgotPasswordMethods} />
                <Stack.Screen name="forgotpasswordphonenumber" component={ForgotPasswordPhoneNumber} />
                <Stack.Screen name="inbox" component={Inbox} />
                <Stack.Screen name="jewerlydetails" component={JewerlyDetails} />
                <Stack.Screen name="kitchendetails" component={KitchenDetails} />
                <Stack.Screen name="mostpopularproducts" component={MostPopularProducts} />
                <Stack.Screen name="otpverification" component={OtpVerification} />
                <Stack.Screen name="paymentmethods" component={PaymentMethods} />
                <Stack.Screen name="productereceipt" component={ProductEreceipt} />
                <Stack.Screen name="productreviews" component={ProductReviews} />
                <Stack.Screen name="search" component={Search} />
                <Stack.Screen name="selectshippingaddress" component={SelectShippingAddress} />
                <Stack.Screen name="settingshelpcenter" component={SettingsHelpCenter} />
                <Stack.Screen name="settingsinvitefriends" component={SettingsInviteFriends} />
                <Stack.Screen name="settingslanguage" component={SettingsLanguage} />
                <Stack.Screen name="settingsnotifications" component={SettingsNotifications} />
                <Stack.Screen name="settingspayment" component={SettingsPayment} />
                <Stack.Screen name="settingsprivacypolicy" component={SettingsPrivacyPolicy} />
                <Stack.Screen name="settingssecurity" component={SettingsSecurity} />
                <Stack.Screen name="shoesdetails" component={ShoesDetails} />
                <Stack.Screen name="topreceipt" component={TopupEreceipt} />
                <Stack.Screen name="topupewalletamount" component={TopupEwalletAmount} />
                <Stack.Screen name="topupewalletmethods" component={TopupEwalletMethods} />
                <Stack.Screen name="toysdetails" component={ToysDetails} />
                <Stack.Screen name="trackorder" component={TrackOrder} />
                <Stack.Screen name="transactionhistory" component={TransactionHistory} />
                <Stack.Screen name="videocall" component={VideoCall} />
                <Stack.Screen name="watchdetails" component={WatchDetails} />
                <Stack.Screen name="welcome" component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation