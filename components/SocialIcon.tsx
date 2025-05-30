import { Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';
import { useTheme } from '../theme/ThemeProvider';

interface SocialIconProps {
  icon: ImageSourcePropType;
  name: string;
  onPress: () => void;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, name, onPress }) => {
  const { dark } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={icon}
        resizeMode='contain'
        style={styles.icon}
      />
      <Text
        style={[styles.name, {
          color: dark ? COLORS.white : COLORS.greyscale900
        }]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center"
  },
  icon: {
    width: (SIZES.width - 32) / 4 - 24,
    height: (SIZES.width - 32) / 4 - 24,
  },
  name: {
    fontSize: 14,
    color: COLORS.black,
    textAlign: "center",
    fontFamily: "Urbanist Regular",
    marginTop: 6,
  }
});

export default SocialIcon;
