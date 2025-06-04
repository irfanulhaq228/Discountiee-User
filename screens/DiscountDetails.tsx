import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native-virtualized-view';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';

import { useTheme } from '../theme/ThemeProvider';
import AutoSlider from '../components/AutoSlider';
import { COLORS, SIZES, icons } from '../constants';
import RoundLoader from '../components/RoundLoader';
import { updateSelectedBrand } from '../store/features';
import { API_URL, fn_favouriteToggleApi, fn_getPostDetailsApi, fn_isFavourite } from '../api/api';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const DiscountDetails = () => {

    const { dark } = useTheme();
    const dispatch = useDispatch();
    const [timeLeft, setTimeLeft] = useState("");
    const [isFavorite, setIsFavorite] = useState(false);
    const navigation = useNavigation<NavigationProp<any>>();

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
        };
    }, [post]);

    useEffect(() => {
        if (post) {
            const interval = setInterval(() => {
                const timerString = fn_showTimer(post);
                setTimeLeft(timerString);

                if (timerString === "00:00:00") {
                    clearInterval(interval);
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [post]);

    const fn_showTimer = (post: any) => {
        const parseTime = (timeStr: any) => {
            const [time, modifier] = timeStr.split(" ");
            let [hours, minutes] = time.split(":").map(Number);

            if (modifier === "PM" && hours < 12) hours += 12;
            if (modifier === "AM" && hours === 12) hours = 0;

            return { hours, minutes };
        };

        let startDate, endDate;

        if (post?.immediately) {
            startDate = new Date(post?.createdAt);
        } else {
            const { hours, minutes } = parseTime(post.uploadTime || "12:00 AM");
            startDate = new Date(post.uploadDate);
            startDate.setHours(hours, minutes, 0);
        }

        const { hours: endHours, minutes: endMinutes } = parseTime(post.endTime || "12:00 AM");
        endDate = new Date(post.endDate) as any;
        endDate.setHours(endHours, endMinutes, 0);

        const now = new Date() as any;
        const diff = Math.max(0, endDate - now); // prevent negative

        let totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        totalSeconds %= (3600 * 24);
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        const hms = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        return days > 0 ? `${days}d ${hms}` : hms;
    };

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

                <View style={{ height: 1, backgroundColor: '#E0E0E0', marginVertical: 15 }} />

                <Text style={[styles.descTitle, { color: dark ? COLORS.white : COLORS.greyscale900 }]}>
                    Time Left
                </Text>

                <Text style={styles.timer}>
                    {timeLeft}
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
    iconContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    contentContainer: {
        marginHorizontal: 12
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
    timer: {
        fontFamily: "Urbanist Bold",
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 70,
        color: COLORS.primary
    }
})

export default DiscountDetails;