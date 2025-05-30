import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native-virtualized-view';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';

import { useTheme } from '../theme/ThemeProvider';
import AutoSlider from '../components/AutoSlider';
import { API_URL, fn_favouriteToggleApi, fn_getPostDetailsApi, fn_isFavourite } from '../api/api';
import { COLORS, SIZES, icons } from '../constants';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { updateSelectedBrand } from '../store/features';
import RoundLoader from '../components/RoundLoader';

const DiscountDetails = () => {

    const { dark } = useTheme();
    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationProp<any>>();
    const [isFavorite, setIsFavorite] = useState(false);

    const [post, setPost] = useState<any>(null);
    const [loader, setLoader] = useState(true);

    const selectedDiscount = useSelector((state: any) => state.selectedDiscount);

    useEffect(() => {
        fn_getPostDetails();
    }, []);

    useEffect(() => {
        if (post) {
            const checkFavourite = async () => {
                const result = await fn_isFavourite(post?._id);
                setIsFavorite(result);
            };

            checkFavourite();
        }
    }, [post]);

    const fn_getPostDetails = async () => {
        const response = await fn_getPostDetailsApi(selectedDiscount);
        if (response?.status) {
            setLoader(false);
            setPost(response?.data);
        } else {
            setLoader(false);
            setPost(null);
        }
    };

    const fn_favouriteToggle = async (id: any) => {
        await fn_favouriteToggleApi(id);
        const result = await fn_isFavourite(id);
        setIsFavorite(result);
    };

    // render header
    const renderHeader = () => {

        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image
                        source={icons.back}
                        resizeMode='contain'
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    const renderContent = () => {

        const date = new Date(post?.createdAt);

        const formattedDate = `${date.toDateString()}, ${date.getHours() % 12 || 12
            }:${date.getMinutes().toString().padStart(2, '0')} ${date.getHours() >= 12 ? 'PM' : 'AM'
            }`

        return (
            <View style={styles.contentContainer}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        dispatch(updateSelectedBrand(post?.brand));
                        navigation.navigate("brand-info")
                    }}
                    style={{ overflow: "hidden", flexDirection: 'row', alignItems: 'center', gap: 13, marginTop: 15 }}
                >
                    <Image
                        resizeMode='contain'
                        source={{ uri: `${API_URL}/${post?.brand?.logo}` }}
                        style={{ width: 80, height: 80, borderRadius: 80, borderWidth: 1, borderColor: "#E0E0E0" }}
                    />
                    <View style={{ gap: 5 }}>
                        <Text style={{ fontSize: 25, fontWeight: 600, color: COLORS.primary, fontFamily: "Urbanist Medium" }}>{post?.brand?.name}</Text>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <FontAwesome6 name="location-dot" style={{ color: COLORS.primary, marginTop: 1 }} size={16} />
                            <Text style={{ fontFamily: "Urbanist Medium", padding: 0, fontSize: 15, flexShrink: 1, flexGrow: 1 }}>
                                {`${post?.brand?.address}, ${post?.brand?.city}, ${post?.brand?.country}`}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ height: 1, backgroundColor: '#E0E0E0', marginVertical: 15 }} />

                <View style={styles.contentView}>
                    <Text style={[styles.contentTitle, {
                        color: dark ? COLORS.white : COLORS.black,
                    }]}>
                        Discount Detail
                    </Text>
                    <TouchableOpacity
                        onPress={() => fn_favouriteToggle(post?._id)}>
                        <Image
                            source={isFavorite ? icons.heart2 : icons.heart2Outline}
                            resizeMode='contain'
                            style={[styles.bookmarkIcon, {
                                tintColor: dark ? COLORS.white : COLORS.primary
                            }]}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={[styles.descTitle, { color: dark ? COLORS.white : COLORS.greyscale900 }]}>
                    Description
                </Text>

                <Text style={[styles.descText, { color: dark ? COLORS.greyscale300 : COLORS.greyScale800 }]}>
                    {post?.description}
                </Text>

                <Text style={[styles.descTitle, { color: dark ? COLORS.white : COLORS.greyscale900 }]}>
                    Discount Start
                </Text>

                <Text style={[styles.descText, { color: dark ? COLORS.greyscale300 : COLORS.primary }]}>
                    {post?.immediately ? (
                        <>
                            {formattedDate}
                        </>
                    ) : (
                        <>
                            {post?.uploadDate}, {post?.uploadTime}
                        </>
                    )}
                </Text>

                <Text style={[styles.descTitle, { color: dark ? COLORS.white : COLORS.greyscale900 }]}>
                    Discount Expiry
                </Text>

                <Text style={[styles.descText, { color: dark ? COLORS.greyscale300 : COLORS.error }]}>
                    {post?.endDate}, {post?.endTime}
                </Text>
            </View >
        )
    }

    return (
        <View style={[styles.area,
        { backgroundColor: dark ? COLORS.dark1 : COLORS.white }]}>
            {loader && <RoundLoader />}
            <StatusBar hidden />
            <AutoSlider images={post?.images} />
            {renderHeader()}
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderContent()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    headerContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 35,
        position: "absolute",
        top: 16,
        zIndex: 999,
        left: 16,
        backgroundColor: COLORS.white,
        width: 35,
        height: 35,
    },
    backIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.black
    },
    bookmarkIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.black
    },
    sendIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.black
    },
    sendIconContainer: {
        marginLeft: 8
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    contentContainer: {
        marginHorizontal: 12
    },
    separateLine: {
        width: SIZES.width - 32,
        height: 1,
        backgroundColor: COLORS.grayscale200
    },
    bottomTitle: {
        fontSize: 24,
        fontFamily: "Urbanist SemiBold",
        color: COLORS.black,
        textAlign: "center",
        marginTop: 12
    },
    socialContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 12,
        width: SIZES.width - 32
    },
    contentView: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        width: SIZES.width - 32
    },
    contentTitle: {
        fontSize: 25,
        fontFamily: "Urbanist Bold",
        color: COLORS.black,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: SIZES.width - 32,
        marginVertical: 12
    },
    ratingView: {
        width: 68,
        height: 24,
        borderRadius: 4,
        backgroundColor: COLORS.silver,
        alignItems: "center",
        justifyContent: "center"
    },
    ratingViewTitle: {
        fontSize: 10,
        fontFamily: "Urbanist SemiBold",
        color: "#35383F",
        textAlign: "center"
    },
    starContainer: {
        marginHorizontal: 16,
        flexDirection: "row",
        alignItems: "center"
    },
    starIcon: {
        height: 20,
        width: 20
    },
    reviewText: {
        fontSize: 14,
        fontFamily: "Urbanist Medium",
        color: COLORS.greyScale800
    },
    descTitle: {
        fontSize: 18,
        fontFamily: "Urbanist Bold",
        color: COLORS.greyscale900,
        marginTop: 8,
        marginBottom: 4
    },
    descText: {
        fontSize: 15,
        color: COLORS.greyScale800,
        fontFamily: "Urbanist Regular",
    },
    featureContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: SIZES.width - 32,
        marginVertical: 12
    },
    featureView: {
        flexDirection: "column",
    },
    sizeContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    sizeView: {
        height: 40,
        width: 40,
        borderRadius: 999,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: COLORS.greyscale600,
        marginRight: 12
    },
    sizeText: {
        fontSize: 16,
        fontFamily: "Urbanist Bold",
        color: COLORS.greyscale600,
        textAlign: "center"
    },
    selectedSize: {
        backgroundColor: 'black',
        borderColor: 'black',
    },
    selectedText: {
        color: 'white',
    },
    colorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    colorView: {
        width: 40,
        height: 40,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    selectedColor: {
        marginRight: 7.8
    },
    qtyContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: SIZES.width - 32,
        marginVertical: 12
    },
    qtyViewContainer: {
        backgroundColor: COLORS.silver,
        height: 48,
        width: 134,
        borderRadius: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 16
    },
    qtyViewText: {
        fontSize: 18,
        fontFamily: "Urbanist Bold",
        color: COLORS.black,
        textAlign: "center"
    },
    qtyMidText: {
        fontSize: 18,
        fontFamily: "Urbanist Bold",
        color: COLORS.black,
        textAlign: "center",
        marginHorizontal: 16
    },
    cartBottomContainer: {
        position: "absolute",
        bottom: 12,
        left: 0,
        right: 0,
        width: SIZES.width,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 104,
        backgroundColor: COLORS.white,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
        borderTopColor: COLORS.white,
        borderTopWidth: 1,
    },
    cartTitle: {
        fontSize: 12,
        fontFamily: "Urbanist Medium",
        color: COLORS.greyscale600,
        marginBottom: 6
    },
    cartSubtitle: {
        fontSize: 24,
        fontFamily: "Urbanist Bold",
        color: COLORS.black,
    },
    cartBtn: {
        height: 58,
        width: 250,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 32,
        backgroundColor: COLORS.black,
        flexDirection: "row",
    },
    cartBtnText: {
        fontSize: 16,
        fontFamily: "Urbanist Bold",
        color: COLORS.white,
        textAlign: "center"
    },
    bagIcon: {
        height: 20,
        width: 20,
        tintColor: COLORS.white,
        marginRight: 8
    }
})

export default DiscountDetails;