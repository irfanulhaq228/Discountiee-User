import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';
import { useTheme } from '../theme/ThemeProvider';
import { updateSelectedBrand } from '../store/features';

interface BrandProps {
    _id: string,
    name: string;
    icon: any;
    onPress?: () => void;
    selectedBrand?: any;
    dispatch?: any;
    brandInfo?: any;
    navigation?: any
}

const Brand: React.FC<BrandProps> = ({ _id, name, icon, onPress, selectedBrand, dispatch, brandInfo, navigation }) => {

    const { dark } = useTheme();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={(e) => {
                    const currentRoute = navigation?.getState()?.routes?.[navigation.getState().index]?.name;
                    if (currentRoute === "Home") {
                        dispatch(updateSelectedBrand(brandInfo));
                        navigation.navigate("brand-info");
                    } else if (onPress) {
                        onPress();
                    }
                }}
                style={[styles.iconContainer, { backgroundColor: dark ? COLORS.dark3 : COLORS.white, opacity: selectedBrand === undefined ? 1 : selectedBrand?._id === _id ? 1 : 0.2 }]}>
                <Image
                    source={{ uri: icon }}
                    resizeMode='cover'
                    style={[styles.icon]}
                />
            </TouchableOpacity>
            <Text style={[styles.name, {
                color: dark ? COLORS.white : COLORS.greyscale900
            }]}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 12,
        width: (SIZES.width - 32) / 4
    },
    iconContainer: {
        width: 54,
        height: 54,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: COLORS.lightPrimary
    },
    icon: {
        height: "100%",
        width: "100%"
    },
    name: {
        fontSize: 14,
        fontFamily: "Urbanist Medium",
        color: COLORS.black
    }
});

export default Brand;
