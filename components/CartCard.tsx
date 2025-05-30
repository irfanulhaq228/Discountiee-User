import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES, icons } from '../constants';
import { useTheme } from '../theme/ThemeProvider';
import FontAwesome from "react-native-vector-icons/FontAwesome";

type CartCardProps = {
    name: string; // Product name
    image: any; // Image source
    price: number; // Product price
    rating: number; // Product rating
    numReviews: number; // Number of reviews
    onPress: () => void; // Function to call when card is pressed
    size?: string; // Optional size of the product
    color?: string; // Color of the product
};

const CartCard: React.FC<CartCardProps> = ({
    name,
    image,
    price,
    rating,
    numReviews,
    onPress,
    size,
    color
}) => {
    const { dark } = useTheme();
    const [quantity, setQuantity] = useState<number>(1);

    const increase = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, {
                backgroundColor: dark ? COLORS.dark2 : COLORS.white
            }]}>
            <View 
                style={[styles.imageContainer, { 
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
                    <TouchableOpacity onPress={onPress}>
                        <Image
                            source={icons.delete3}
                            resizeMode='contain'
                            style={styles.heartIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewContainer}>
                    <View style={[styles.color, { backgroundColor: color }]}></View>
                    <FontAwesome name="star" size={14} color="rgb(250, 159, 28)" />
                    <Text style={[styles.location, {
                        color: dark ? COLORS.greyscale300 : COLORS.grayscale700,
                    }]}>{" "}{rating}  ({numReviews})</Text>
                    {size && (
                        <Text style={[styles.location, {
                            color: dark ? COLORS.greyscale300 : COLORS.grayscale700,
                        }]}>   | {" "} Size= {size}  </Text>
                    )}
                </View>
                <View style={styles.bottomViewContainer}>
                    <View style={styles.priceContainer}>
                        <Text style={[styles.price, { 
                            color: dark ? COLORS.white : COLORS.primary
                        }]}>${price}</Text>
                    </View>
                    <View style={[styles.qtyContainer, { 
                        backgroundColor: dark ? COLORS.dark3 : COLORS.silver
                    }]}>
                        <TouchableOpacity onPress={decrease}>
                            <Text style={[styles.qtyText, { 
                                color: dark ? COLORS.white : COLORS.primary
                            }]}>-</Text>
                        </TouchableOpacity>
                        <Text style={[styles.qtyNum, { 
                            color: dark ? COLORS.white : COLORS.primary,
                        }]}>{quantity}</Text>
                        <TouchableOpacity onPress={increase}>
                            <Text style={[styles.qtyText, { 
                                color: dark ? COLORS.white : COLORS.primary
                            }]}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: SIZES.width - 32,
        backgroundColor: COLORS.white,
        padding: 6,
        borderRadius: 16,
        marginBottom: 12,
        height: 112,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 16,
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 16,
        backgroundColor: COLORS.silver,
    },
    columnContainer: {
        flexDirection: 'column',
        marginLeft: 12,
        flex: 1,
    },
    name: {
        fontSize: 17,
        fontFamily: "Urbanist Bold",
        color: COLORS.greyscale900,
        marginVertical: 4,
        marginRight: 40,
    },
    location: {
        fontSize: 14,
        fontFamily: "Urbanist Regular",
        color: COLORS.grayscale700,
        marginVertical: 4,
    },
    priceContainer: {
        flexDirection: 'column',
        marginVertical: 4,
    },
    heartIcon: {
        width: 20,
        height: 20,
        tintColor: COLORS.red,
        marginLeft: 6,
    },
    topViewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width - 164,
    },
    bottomViewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 2,
    },
    viewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
    },
    price: {
        fontSize: 16,
        fontFamily: "Urbanist SemiBold",
        color: COLORS.primary,
        marginRight: 8,
    },
    color: {
        height: 16,
        width: 16,
        borderRadius: 999,
        marginRight: 8,
    },
    qtyContainer: {
        width: 93,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.silver,
        flexDirection: 'row',
    },
    qtyText: {
        fontSize: 18,
        fontFamily: "Urbanist Regular",
        color: COLORS.primary,
    },
    qtyNum: {
        fontSize: 14,
        fontFamily: "Urbanist SemiBold",
        color: COLORS.primary,
        marginHorizontal: 12,
    },
});

export default CartCard;
