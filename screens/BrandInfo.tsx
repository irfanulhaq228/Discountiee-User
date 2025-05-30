import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-virtualized-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { View, StyleSheet, Image, Text, TextInput, FlatList } from 'react-native';

import { API_URL, fn_getDiscountByBrandIdApi } from '../api/api';
import { COLORS, images, SIZES } from '../constants';
import Header from '../components/Header';
import { useTheme } from '../theme/ThemeProvider';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import DiscountCard, { DiscountCardSkeleton } from '../components/DiscountCard';

const BrandInfo = () => {
    const { colors, dark } = useTheme();
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const savedBrand = useSelector((state: any) => state.selectedBrand);
    const [selectedBrandDiscount, setSelectedBrandDiscount] = useState<any>([]);
    const [selectedBrandDiscountLoader, setSelectedBrandDiscountLoader] = useState(false);

    useEffect(() => {
        setSelectedBrandDiscountLoader(true);
        fn_getDiscounts();
    }, []);

    const fn_getDiscounts = async () => {
        setSelectedBrandDiscountLoader(true);
        const response = await fn_getDiscountByBrandIdApi(savedBrand?._id);
        if (response?.status) {
            setSelectedBrandDiscountLoader(false);
            setSelectedBrandDiscount(response?.data);
        } else {
            setSelectedBrandDiscountLoader(false);
            setSelectedBrandDiscount([]);
        }
    };

    return (
        <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                <Header title="Brand Details" />
                <ScrollView style={styles.scrollView}>
                    <View style={{ overflow: "hidden", flexDirection: 'row', alignItems: 'center', gap: 13 }}>
                        <Image
                            resizeMode='contain'
                            source={{ uri: `${API_URL}/${savedBrand?.logo}` }}
                            style={{ width: 80, height: 80, borderRadius: 80, borderWidth: 1, borderColor: "#E0E0E0" }}
                        />
                        <View style={{ gap: 5 }}>
                            <Text style={{ fontSize: 25, fontWeight: 600, color: COLORS.primary, fontFamily: "Urbanist Medium" }}>{savedBrand?.name}</Text>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <FontAwesome6 name="location-dot" style={{ color: COLORS.primary, marginTop: 1 }} size={16} />
                                <TextInput
                                    multiline
                                    style={{ fontFamily: "Urbanist Medium", padding: 0, lineHeight: 10, fontSize: 15, flexShrink: 1, flexGrow: 1 }}
                                    value={`${savedBrand?.address}, ${savedBrand?.city}, ${savedBrand?.country}`}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ height: 1, backgroundColor: '#E0E0E0', marginVertical: 20 }} />

                    {selectedBrandDiscountLoader ? (
                        <View style={{
                            backgroundColor: dark ? COLORS.dark1 : COLORS.white,
                            marginBottom: 50,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 16,
                        }}>
                            {Array.from({ length: 2 }).map((_, index) => (
                                <DiscountCardSkeleton key={index} ShimmerPlaceholder={ShimmerPlaceholder} />
                            ))}
                        </View>
                    ) : selectedBrandDiscount?.length > 0 ? (
                        <View style={{
                            backgroundColor: dark ? COLORS.dark1 : COLORS.white,
                            marginBottom: 50,
                        }}>
                            <FlatList
                                data={selectedBrandDiscount}
                                keyExtractor={item => item.id}
                                numColumns={2}
                                columnWrapperStyle={{ gap: 16 }}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <DiscountCard image={`${API_URL}/${item?.images?.[0]}`} item={item} navigation={navigation} dispatch={dispatch} />
                                )}
                            />
                        </View>
                    ) : (
                        <Image
                            source={images.PngNoDataFound}
                            style={{
                                alignSelf: 'center',
                                width: 330,
                                height: 330,
                                maxWidth: SIZES.width * 1,
                                maxHeight: SIZES.width * 1,
                            }}
                            resizeMode="contain"
                        />
                    )}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 16
    },
    scrollView: {
        marginVertical: 22
    }
})

export default BrandInfo