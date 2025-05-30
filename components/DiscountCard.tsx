import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { COLORS, SIZES } from '../constants';
import { useTheme } from '../theme/ThemeProvider';
import { updateSelectedDiscount } from '../store/features';

interface DiscountCardProps { image: any, item?: any, navigation?: any, dispatch?: any }

const DiscountCard: React.FC<DiscountCardProps> = ({ image, item, navigation, dispatch }) => {

    const { dark } = useTheme();

    return (
        <TouchableOpacity
            onPress={() => {
                dispatch(updateSelectedDiscount(item?._id))
                navigation.navigate("discount-details")
            }}
            style={[styles.container, {
                backgroundColor: dark ? COLORS.dark2 : COLORS.bgPrimary
            }]}
        >
            <View style={[styles.imageContainer, {
                backgroundColor: dark ? COLORS.dark3 : COLORS.white
            }]}>
                <Image
                    source={{ uri: image }}
                    resizeMode='contain'
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    );
};

export const DiscountCardSkeleton = ({ ShimmerPlaceholder }: any) => {
    const { dark } = useTheme();

    return (
        <View style={[styles.container, {
            backgroundColor: dark ? COLORS.dark2 : COLORS.bgPrimary
        }]}>
            <View style={[styles.imageContainer, {
                backgroundColor: dark ? COLORS.dark3 : COLORS.silver
            }]}>
                <ShimmerPlaceholder width={100} style={{ borderRadius: 16, width: "100%", height: "100%" }} />
            </View>
        </View>
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

export default DiscountCard;
