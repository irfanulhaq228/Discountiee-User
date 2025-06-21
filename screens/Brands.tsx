import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-virtualized-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useCallback, useEffect, useState } from 'react';
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity, Modal } from 'react-native';

import Brand from '../components/Brand';
import Header from '../components/Header';
import { useTheme } from '../theme/ThemeProvider';
import Entypo from "react-native-vector-icons/Entypo";
import { updateSelectedBrand } from '../store/features';
import SubHeaderItem from '../components/SubHeaderItem';
import LocationModal from '../components/LocationModal';
import { COLORS, icons, images, SIZES } from '../constants';
import DiscountCard, { DiscountCardSkeleton } from '../components/DiscountCard';
import { API_URL, fn_getBrandsApi, fn_getCategoriesApi, fn_getDiscountByBrandIdApi } from '../api/api';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const Brands = () => {

    const dispatch = useDispatch();
    const { colors, dark } = useTheme();
    const [brands, setBrands] = useState<any[]>([]);
    const [firstTime, setFirstTime] = useState(true);
    const [categories, setCategories] = useState<any>([]);
    const navigation = useNavigation<NavigationProp<any>>();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState<any>(null);
    const [brandsLoader, setBrandsLoader] = useState<boolean>(true);
    const [selectedCategories, setSelectedCategories] = useState<any>([]);
    const [selectedBrandDiscount, setSelectedBrandDiscount] = useState<any>([]);
    const [selectedBrandDiscountLoader, setSelectedBrandDiscountLoader] = useState(false);

    const [finalCategories, setFinalCategories] = useState<any>([]);

    const [canFilter, setCanFilter] = useState(false);
    const globalFilterCities = useSelector((state: any) => state.globalFilterCities);

    useFocusEffect(
        useCallback(() => {
            console.log("====", firstTime);
            setFirstTime(true);
            setBrandsLoader(true);
            fn_getBrands([]);
            fn_getCategories();
        }, [globalFilterCities])
    );

    useEffect(() => {
        if (modalVisible) {
            setSelectedCategories(finalCategories);
            if (finalCategories?.length === 0) {
                setCanFilter(false);
            } else {
                setCanFilter(true);
            }
        }
    }, [modalVisible]);

    const fn_getBrands = async (params: any) => {
        const response = await fn_getBrandsApi(params || [], globalFilterCities);
        if (response?.status) {
            if (firstTime) {
                fn_getDiscounts(response?.data?.[0]?._id);
                setSelectedBrand(response?.data?.[0] || null);
            };
            setBrandsLoader(false);
            setBrands(response?.data);
            if (canFilter) {
                fn_getDiscounts(response?.data?.[0]?._id);
                setSelectedBrand(response?.data?.[0] || null);
            }
        } else {
            setBrandsLoader(false);
            setBrands([]);
        }
    };

    const fn_getCategories = async () => {
        const response = await fn_getCategoriesApi();
        if (response?.status) {
            setCategories(response?.data);
        } else {
            setCategories([]);
        }
    };

    const fn_selectBrand = async (brand: any) => {
        if (selectedBrand?._id === brand?._id) return;
        setSelectedBrandDiscount([]);
        setSelectedBrand(brand);
        await fn_getDiscounts(brand?._id);
    };

    const fn_getDiscounts = async (id: string) => {
        setSelectedBrandDiscountLoader(true);
        const response = await fn_getDiscountByBrandIdApi(id);
        if (response?.status) {
            setSelectedBrandDiscountLoader(false);
            setSelectedBrandDiscount(response?.data);
        } else {
            setSelectedBrandDiscountLoader(false);
            setSelectedBrandDiscount([]);
        }
    };

    const fn_toggleCategory = async (id: string) => {
        const isAvailable = selectedCategories.includes(id);
        if (!isAvailable) {
            setSelectedCategories((preV: any) => [id, ...preV]);
            setCanFilter(true);
        } else {
            const filterData = selectedCategories?.filter((i: any) => i !== id);
            setSelectedCategories(filterData);
            if (filterData?.length === 0) {
                setCanFilter(false);
            }
        };
    };

    const fn_toggleFinalCategory = async (id: string) => {
        const filterData = finalCategories?.filter((i: any) => i !== id);
        setFinalCategories(filterData);
        setSelectedCategories(filterData);
        setSelectedBrand(null);
        setSelectedBrandDiscount([]);
        setBrandsLoader(true);
        fn_getBrands(filterData);
    };

    const fn_filterByCategory = async () => {
        if (!canFilter) return;
        setSelectedBrand(null);
        setFinalCategories(selectedCategories);
        setSelectedBrandDiscount([]);
        setModalVisible(false);
        setBrandsLoader(true);
        fn_getBrands(selectedCategories);
    };

    return (
        <>
            <LocationModal globalFilterCities={globalFilterCities} />
            <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
                <View style={[styles.container, { backgroundColor: colors.background }]}>
                    <View style={{ position: 'relative' }}>
                        <Header title="All Brands" />
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={{ position: 'absolute', right: 0 }}
                            onPress={() => setModalVisible(true)}
                        >
                            <Image source={icons.filter4} style={{ tintColor: COLORS.primary, width: 27, height: 27 }} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.scrollView}>
                        {finalCategories?.length > 0 && (
                            <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap', marginBottom: 15 }}>
                                {categories?.filter(((cat: any) => finalCategories.includes(cat?._id)))?.map((item: any) => (
                                    <TouchableOpacity onPress={() => fn_toggleFinalCategory(item?._id)} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.primary, paddingHorizontal: 6, gap: 5, height: 25, borderRadius: 5 }}>
                                        <Text style={{ color: COLORS.white, fontWeight: '500', fontSize: 12, marginTop: -2 }}>{item?.name}</Text>
                                        <Entypo style={{ color: COLORS.white }} name='circle-with-cross' />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                        {brandsLoader ? (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                {[...Array(8)].map((_, index) => (
                                    <View key={index} style={{ alignItems: 'center', marginBottom: 12, width: (SIZES.width - 32) / 4 }}>
                                        <ShimmerPlaceholder height={54} width={54} style={{ borderRadius: 40 }} />
                                        <ShimmerPlaceholder
                                            height={14}
                                            width={54}
                                            style={{ borderRadius: 7, marginTop: 10 }}
                                        />
                                    </View>
                                ))}
                            </View>
                        ) : brands?.length > 0 ? (
                            <FlatList
                                data={brands}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal={false}
                                numColumns={4}
                                renderItem={({ item, index }) => (
                                    <Brand
                                        _id={item?._id}
                                        name={item.name}
                                        selectedBrand={selectedBrand}
                                        icon={`${API_URL}/${item?.logo}`}
                                        onPress={() => fn_selectBrand(item)}
                                    />
                                )}
                            />
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
                        <View style={{ height: 1, backgroundColor: '#E0E0E0', marginVertical: 7 }} />
                        {!brandsLoader && brands?.length > 0 && (
                            <View>
                                <SubHeaderItem title={selectedBrand?.name || ""} navTitle={"See Brand Info"} onPress={() => { dispatch(updateSelectedBrand(selectedBrand)); navigation.navigate("brand-info") }} />
                                {selectedBrandDiscountLoader ? (
                                    <View style={{
                                        backgroundColor: dark ? COLORS.dark1 : COLORS.white,
                                        marginBottom: 60,
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
                                        marginBottom: 60,
                                    }}>
                                        <FlatList
                                            data={selectedBrandDiscount}
                                            keyExtractor={item => item._id}
                                            numColumns={2}
                                            columnWrapperStyle={{ gap: 16 }}
                                            showsVerticalScrollIndicator={false}
                                            renderItem={({ item }) => (
                                                <DiscountCard image={`${API_URL}/${item?.images?.[0]}`} navigation={navigation} dispatch={dispatch} item={item} />
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
                            </View>
                        )}
                    </ScrollView>
                </View>
                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Select Category</Text>
                            <View style={{ width: "100%", flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
                                {categories?.map((item: any) => (
                                    <TouchableOpacity onPress={() => fn_toggleCategory(item?._id)}>
                                        <Text style={selectedCategories?.find((i: any) => i === item?._id) ? styles.categoryModalActiveBox : styles.categoryModalBox}>{item?.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.closeButtonText}>Close</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={canFilter ? styles.filterButton : { ...styles.filterButton, backgroundColor: COLORS.grayscale400, borderColor: COLORS.grayscale400 }}
                                    onPress={fn_filterByCategory}
                                    activeOpacity={!canFilter ? 1 : 0.5}
                                >
                                    <Text style={canFilter ? styles.filterButtonText : styles.notFilterButtonText}>Filter</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </>
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
    },
    noDataContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.primary,
        padding: 10,
        borderRadius: 5,
        flex: 1
    },
    closeButtonText: {
        color: COLORS.primary,
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center'
    },
    filterButton: {
        marginTop: 20,
        backgroundColor: COLORS.primary,
        borderWidth: 1,
        borderColor: COLORS.primary,
        padding: 10,
        borderRadius: 5,
        flex: 1
    },
    filterButtonText: {
        color: COLORS.white,
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center'
    },
    notFilterButtonText: {
        color: COLORS.grayscale700,
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center'
    },
    categoryModalBox: {
        backgroundColor: COLORS.white,
        height: 28,
        paddingHorizontal: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 5,
        fontWeight: '500',
        borderWidth: 1,
        borderColor: COLORS.grayscale200,
        color: COLORS.grayscale400
    },
    categoryModalActiveBox: {
        backgroundColor: COLORS.lightPrimary,
        height: 28,
        paddingHorizontal: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 5,
        fontWeight: '500',
        borderWidth: 1,
        borderColor: COLORS.primary,
        color: COLORS.white
    }
})

export default Brands