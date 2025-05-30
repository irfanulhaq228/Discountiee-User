import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';
import Onboarding1Styles from '../styles/OnboardingStyles';
import { COLORS, illustrations } from '../constants';
import { useTheme } from '../theme/ThemeProvider';
import { useNavigation } from '@react-navigation/native';
import ButtonFilled from '../components/ButtonFilled';
import DotsView from '../components/DotsView';
import ButtonOutlined from '../components/ButtonOutlined';

type Nav = {
  navigate: (value: string) => void
}

const Onboarding2 = () => {
  const { navigate } = useNavigation<Nav>();
  const [progress, setProgress] = useState(0);
  const [currentScreen, setCurrentScreen] = useState(1);
  const { colors, dark } = useTheme();

  const handleNext = () => {
    if (currentScreen < 3) {
      setCurrentScreen(currentScreen + 1);
      setProgress((currentScreen + 1) / 3);
    } else {
      navigate('(tabs)');
    }
  };

  return (
    <SafeAreaView style={[Onboarding1Styles.container, { backgroundColor: colors.background }]}>
      <PageContainer>
        <View style={Onboarding1Styles.contentContainer}>
          <Image
            source={
              currentScreen === 1
                ? illustrations.onboarding2
                : currentScreen === 2
                  ? illustrations.onboarding3
                  : illustrations.onboarding7
            }
            resizeMode="contain"
            style={Onboarding1Styles.illustration}
          />
          <View style={Onboarding1Styles.buttonContainer}>
            <View style={Onboarding1Styles.titleContainer}>
              <Text style={[Onboarding1Styles.title, { color: colors.text }]}>
                {currentScreen === 1
                  ? 'All your favorites'
                  : currentScreen === 2
                    ? 'Select What You'
                    : 'Free delivery offers'}
              </Text>
              <Text style={[Onboarding1Styles.subTitle, { color: dark ? COLORS.white : COLORS.primary }]}>
                {currentScreen === 1
                  ? 'DISCOUNTS'
                  : currentScreen === 2
                    ? 'LOVE'
                    : 'FEELESS'}
              </Text>
            </View>
            <Text style={[Onboarding1Styles.description, { color: colors.text }]}>
              {currentScreen === 1
                ? 'Discover all the latest discounts and deals from your favorite brands in one single app.'
                : currentScreen === 2
                  ? 'Your satisfaction is our number one priority. Find the best discounts on the items you love.'
                  : 'Make a smart payment with no delivery fee. You just place the order, we do the rest.'}
            </Text>
            <View style={Onboarding1Styles.dotsContainer}>
              <DotsView progress={progress} numDots={3} />
            </View>
            <ButtonFilled
              title="Next"
              onPress={handleNext}
              style={Onboarding1Styles.nextButton}
            />
            <ButtonOutlined
              title="Skip"
              onPress={() => navigate('(tabs)')}
              style={Onboarding1Styles.skipButton}
            />
          </View>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Onboarding2;