import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';
import { useTheme } from '../theme/ThemeProvider';
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface OrderListItemProps {
    name: string;
    image: any; // Replace with the proper type if you have one, e.g., ImageSourcePropType
    price: string;
    rating: number;
    numReviews: number;
    onPress?: () => void;
    size: string | null; // Optional, string or other type if needed
    color: string;
    quantity: number;
}

const OrderListItem: React.FC<OrderListItemProps> = ({
    name,
    image,
    price,
    rating,
    numReviews,
    onPress,
    size,
    color,
    quantity
}) => {
    const { dark } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, {
                backgroundColor: dark ? COLORS.dark2 : COLORS.white
            }]}>
            <View style={[styles.imageContainer, { 
                backgroundColor: dark ? COLORS.dark3 : COLORS.silver
            }]}>
                <Image
                    source={image}
                    resizeMode='cover'
                    style={styles.image}
                />
            </View>
            <View style={styles.columnContainer}>
                <View style={styles.topViewContainer}>
                    <Text style={[styles.name, {
                        color: dark ? COLORS.secondaryWhite : COLORS.greyscale900
                    }]}>{name}</Text>
                </View>
                <View style={styles.viewContainer}>
                    <View style={[styles.color, {
                        backgroundColor: color
                    }]}></View>
                    <FontAwesome name="star" size={14} color="rgb(250, 159, 28)" />
                    <Text style={[styles.location, {
                        color: dark ? COLORS.greyscale300 : COLORS.grayscale700,
                    }]}>{" "}{rating}  ({numReviews})</Text>
                    {
                        size && (
                            <Text style={[styles.location, {
                                color: dark ? COLORS.greyscale300 : COLORS.grayscale700,
                            }]}>   | {" "} Size= {size}  </Text>
                        )
                    }
                </View>
                <View style={styles.bottomViewContainer}>
                    <View style={styles.priceContainer}>
                        <Text style={[styles.price, { 
                            color: dark ? COLORS.white : COLORS.primary,
                        }]}>${price}</Text>
                    </View>
                    <View style={[styles.qtyContainer, { 
                        backgroundColor: dark ? COLORS.dark3 : COLORS.silver
                    }]}>
                        <Text style={[styles.qtyNum, { 
                            color: dark ? COLORS.white : COLORS.primary
                        }]}>{quantity}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: SIZES.width - 32,
        backgroundColor: COLORS.white,
        padding: 6,
        borderRadius: 16,
        marginBottom: 12,
        height: 112,
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 16
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 16,
        backgroundColor: COLORS.silver
    },
    columnContainer: {
        flexDirection: "column",
        marginLeft: 12,
        flex: 1
    },
    name: {
        fontSize: 17,
        fontFamily: "Urbanist Bold",
        color: COLORS.greyscale900,
        marginVertical: 4,
        marginRight: 40
    },
    location: {
        fontSize: 14,
        fontFamily: "Urbanist Regular",
        color: COLORS.grayscale700,
        marginVertical: 4
    },
    duration: {
        fontSize: 12,
        fontFamily: "Urbanist SemiBold",
        color: COLORS.primary,
        marginRight: 8
    },
    heartIcon: {
        width: 20,
        height: 20,
        tintColor: COLORS.red,
        marginLeft: 6
    },
    reviewContainer: {
        position: "absolute",
        top: 16,
        left: 54,
        width: 46,
        height: 20,
        borderRadius: 4,
        backgroundColor: COLORS.primary,
        zIndex: 999,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    rating: {
        fontSize: 10,
        fontFamily: "Urbanist SemiBold",
        color: COLORS.white,
        marginLeft: 4
    },
    topViewContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 164
    },
    bottomViewContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 2
    },
    viewContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 4
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    price: {
        fontSize: 16,
        fontFamily: "Urbanist SemiBold",
        color: COLORS.primary,
        marginRight: 8
    },
    motoIcon: {
        height: 18,
        width: 18,
        tintColor: COLORS.primary,
        marginRight: 4
    },
    color: {
        height: 16,
        width: 16,
        backgroundColor: COLORS.primary,
        borderRadius: 999,
        marginRight: 8
    },
    qtyContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.silver,
        flexDirection: "row"
    },
    qtyText: {
        fontSize: 18,
        fontFamily: "Urbanist Regular",
        color: COLORS.primary
    },
    qtyNum: {
        fontSize: 14,
        fontFamily: "Urbanist SemiBold",
        color: COLORS.primary,
        marginHorizontal: 12
    }
});

export default OrderListItem;
