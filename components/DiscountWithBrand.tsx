import { useTheme } from '../theme/ThemeProvider';
import React, { useEffect, useState } from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { updateSelectedBrand, updateSelectedDiscount } from '../store/features';
import { fn_favouriteToggleApi, fn_isFavourite } from '../api/api';

interface ProductCardProps {
    image: any;
    brandName: string;
    brandCity: string;
    brandImage: any
    onPress: () => void;
    dispatch?: any;
    brandInfo?: any;
    discountId?: any;
}

const DiscountWithBrand: React.FC<ProductCardProps> = ({ image, brandName, brandCity, brandImage, onPress, dispatch, brandInfo, discountId }) => {

    const { dark } = useTheme();
    const navigation = useNavigation<NavigationProp<any>>();
    const [isFavourite, setIsFavourite] = useState<boolean>(false);

    useEffect(() => {
        const checkFavourite = async () => {
            const result = await fn_isFavourite(discountId);
            setIsFavourite(result);
        };

        checkFavourite();
    }, []);

    const fn_favouriteToggle = async (id: any) => {
        await fn_favouriteToggleApi(id);
        const result = await fn_isFavourite(id);
        setIsFavourite(result);
    };

    return (
        <TouchableOpacity
            onPress={() => {
                dispatch(updateSelectedDiscount(discountId));
                navigation.navigate("discount-details")
            }}
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
            <TouchableOpacity activeOpacity={0.5} style={{ marginTop: 5, flexDirection: 'row', gap: 10 }} onPress={(e) => { e.stopPropagation(); dispatch(updateSelectedBrand(brandInfo)); navigation.navigate("brand-info") }}>
                <View style={{ width: 42, height: 42, backgroundColor: COLORS.bgPrimary, borderRadius: 42, borderWidth: 1, borderColor: COLORS.primary, overflow: "hidden" }}>
                    <Image
                        source={brandImage}
                        resizeMode='contain'
                        style={{ width: 42, height: 42, borderRadius: 42 }}
                    />
                </View>
                <View style={{ justifyContent: "center", gap: 5 }}>
                    <Text style={{ fontFamily: "Urbanist Medium", fontSize: 14, color: COLORS.black }}>{brandName}</Text>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <FontAwesome6 name="location-dot" style={{ color: COLORS.primary }} />
                        <Text style={{ fontFamily: "Urbanist Medium", fontSize: 12 }}>{brandCity}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.favouriteContainer}>
                <TouchableOpacity onPress={() => fn_favouriteToggle(discountId)}>
                    <Image
                        source={isFavourite ? icons.heart5 : icons.heart3Outline}
                        resizeMode='contain'
                        style={styles.heartIcon}
                    />
                </TouchableOpacity>
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
        top: 10,
        right: 10,
        width: 28,
        height: 28,
        borderRadius: 9999,
        backgroundColor: COLORS.lightPrimary,
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

export default DiscountWithBrand;
