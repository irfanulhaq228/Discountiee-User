import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, icons } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import { useTheme } from '../theme/ThemeProvider';
import ButtonFilled from '../components/ButtonFilled';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import PaymentMethodItemConnected from '../components/PaymentMethodItemConnected';

type Nav = {
  navigate: (value: string) => void
};

// Settings for payment
const SettingsPayment = () => {
  const { colors, dark } = useTheme();
  const { navigate } = useNavigation<Nav>();
  const navigation = useNavigation<NavigationProp<any>>();
  /**
   * Render header
   */
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.back}
              resizeMode='contain'
              style={[styles.backIcon, {
                tintColor: dark ? COLORS.white : COLORS.greyscale900
              }]} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, {
            color: dark ? COLORS.white : COLORS.greyscale900
          }]}>Payment</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={icons.moreCircle}
            resizeMode='contain'
            style={[styles.moreIcon, {
              tintColor: dark ? COLORS.secondaryWhite : COLORS.greyscale900
            }]} />
        </TouchableOpacity>
      </View>
    )
  };

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {renderHeader()}
        <ScrollView
          style={styles.settingsContainer}
          showsVerticalScrollIndicator={false}>
          <PaymentMethodItemConnected
            title="PayPal"
            icon={icons.paypal}
            onPress={() => console.log("PayPal")}
            tintColor=''
          />
          <PaymentMethodItemConnected
            title="Google Pay"
            icon={icons.google}
            onPress={() => console.log("Google Pay")}
            tintColor=''
          />
          <PaymentMethodItemConnected
            title="Apple Pay"
            icon={icons.appleLogo}
            onPress={() => console.log("Google Pay")}
            tintColor={dark ? COLORS.white : COLORS.black}
          />
          <PaymentMethodItemConnected
            title="**** **** **** **** 4679"
            icon={icons.mastercard}
            onPress={() => console.log("Credit Card")}
          />
        </ScrollView>
        <ButtonFilled
          title="Add New Card"
          onPress={() => navigation.navigate('addnewcard')}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  backIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.greyscale900,
    marginRight: 16
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "Urbanist Bold",
    color: COLORS.greyscale900
  },
  moreIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.greyscale900
  },
  settingsContainer: {
    marginVertical: 16
  }
})

export default SettingsPayment