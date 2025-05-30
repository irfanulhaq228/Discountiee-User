import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { useTheme } from '../theme/ThemeProvider';
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface ProductCardProps {
    name: string;
    image: any; // Use 'require' for local images or 'ImageSourcePropType' for more robust typing
    numSolds: number;
    price: string;
    rating: number;
    onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    name,
    image,
    numSolds,
    price,
    rating,
    onPress
}) => {
    const [isFavourite, setIsFavourite] = useState<boolean>(false);
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
                    resizeMode='contain'
                    style={styles.image}
                />
            </View>
            <View style={styles.favouriteContainer}>
                <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
                    <Image
                        source={isFavourite ? icons.heart5 : icons.heart3Outline}
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

export default ProductCard;
