import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { useTheme } from '../theme/ThemeProvider';
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Define the type for the component props
interface WishlistCardProps {
    name: string;
    image: any; // Adjust the type according to your image source (e.g., ImageSourcePropType)
    numSolds: number;
    price: string;
    rating: number;
    onPress: () => void;
}

const WishlistCard: React.FC<WishlistCardProps> = ({
    name,
    image,
    numSolds,
    price,
    rating,
    onPress
}) => {
    const { dark } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, {
                backgroundColor: dark ? COLORS.dark2 : COLORS.bgPrimary
            }]}>
            <View style={[styles.imageContainer, {
                backgroundColor: dark ? COLORS.dark3 : COLORS.white
            }]}>
                <Image
                    source={image}
                    resizeMode='cover'
                    style={styles.image}
                />
            </View>
            <View style={styles.favouriteContainer}>
                <TouchableOpacity onPress={onPress}>
                    <Image
                        source={icons.heart5}
                        resizeMode='contain'
                        style={styles.heartIcon}
                    />
                </TouchableOpacity>
            </View>
            <Text style={[styles.name, {
                color: dark ? COLORS.secondaryWhite : COLORS.greyscale900,
            }]}>{name}</Text>
            <View style={styles.viewContainer}>
                <Image
                    source={icons.heart5}
                    resizeMode='contain'
                    style={{ ...styles.heartIcon, tintColor: COLORS.primary }}
                />
                <Text style={[styles.location, {
                    color: dark ? COLORS.greyscale300 : COLORS.grayscale700,
                }]}>{" "}{rating}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: (SIZES.width - 32) / 2 - 12,
        backgroundColor: COLORS.white,
        padding: 6,
        borderRadius: 16,
        marginBottom: 12,
        marginRight: 4
    },
    imageContainer: {
        width: "100%",
        height: 140,
        borderRadius: 16,
        backgroundColor: COLORS.silver
    },
    image: {
        width: "100%",
        height: 140,
        borderRadius: 16
    },
    name: {
        fontSize: 17,
        fontFamily: "Urbanist Bold",
        color: COLORS.greyscale900,
        marginTop: 6,
        marginHorizontal: 4
    },
    location: {
        fontSize: 12,
        fontFamily: "Urbanist Regular",
        color: COLORS.grayscale700,
        marginVertical: 4
    },
    bottomPriceContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    price: {
        fontSize: 18,
        fontFamily: "Urbanist Bold",
        color: COLORS.primary,
        marginRight: 8
    },
    heartIcon: {
        width: 16,
        height: 16,
        tintColor: COLORS.white,
    },
    favouriteContainer: {
        position: "absolute",
        top: 16,
        right: 16,
        width: 28,
        height: 28,
        borderRadius: 9999,
        backgroundColor: COLORS.primary,
        zIndex: 999,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    viewContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 4,
        marginBottom: 2
    },
    soldContainer: {
        width: 66,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        backgroundColor: COLORS.silver
    },
    soldText: {
        fontSize: 12,
        fontFamily: "Urbanist Medium",
        color: COLORS.grayscale700,
        marginVertical: 4
    }
});

export default WishlistCard;
