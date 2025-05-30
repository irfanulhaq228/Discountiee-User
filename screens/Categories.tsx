import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-virtualized-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

import Header from '../components/Header';
import { useTheme } from '../theme/ThemeProvider';
import { COLORS, images, SIZES } from '../constants';
import SubHeaderItem from '../components/SubHeaderItem';
import DiscountWithBrand from '../components/DiscountWithBrand';
import { DiscountCardSkeleton } from '../components/DiscountCard';
import { API_URL, fn_getCategoriesApi, fn_getPostsByCategoryApi } from '../api/api';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const Categories = () => {

  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<any>>();

  const [categories, setCategories] = useState([]);
  const [categoriesLoader, setCategoriesLoader] = useState(true);

  const [data, setData] = useState([]);
  const [dataLoader, setDataLoader] = useState(false);

  const [firstTime, setFirstTime] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  useEffect(() => {
    fn_getCategories();
  }, []);

  const fn_selectCategory = (item: any) => {
    setSelectedCategory(item);
    fn_getPostsByCategory(item?._id);
  }

  const fn_getCategories = async () => {
    const response = await fn_getCategoriesApi();
    if (response?.status) {
      setCategoriesLoader(false);
      if (firstTime) {
        setSelectedCategory(response?.data?.[0]);
        setFirstTime(false);
        fn_getPostsByCategory(response?.data?.[0]?._id);
      }
      setCategories(response?.data);
    } else {
      setCategoriesLoader(false);
      setCategories([]);
    }
  };

  const fn_getPostsByCategory = async (id: any) => {
    setDataLoader(true);
    const response = await fn_getPostsByCategoryApi(id);
    if (response?.status) {
      setDataLoader(false);
      setData(response?.data);
    } else {
      setDataLoader(false);
      setData([]);
    }
  };

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Header title="All Categories" />
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'column' }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categoriesLoader ? (
                <View style={{ width: SIZES.width, justifyContent: 'center', alignItems: 'center' }}>
                  <ActivityIndicator size={'large'} color={COLORS.primary} style={{ alignSelf: 'center' }} />
                </View>
              ) : (
                <View style={{ flexDirection: 'row', gap: 5 }}>
                  {categories?.length > 0 ? (
                    categories.map((item: any) => (
                      <TouchableOpacity onPress={() => fn_selectCategory(item)}>
                        <Text style={selectedCategory?._id !== item?._id ? styles.singleCategoryText : { ...styles.singleCategoryText, backgroundColor: COLORS.lightPrimary, color: COLORS.white }} key={item?.id}>{item?.name}</Text>
                      </TouchableOpacity>
                    ))
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
            <View style={{ height: 1, backgroundColor: '#E0E0E0', marginTop: 20 }} />
            <SubHeaderItem title={selectedCategory?.name || ""} />
            {!categoriesLoader && (
              <>
                {dataLoader ? (
                  <View style={{
                    backgroundColor: COLORS.white,
                    marginBottom: 50,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 16,
                  }}>
                    {Array.from({ length: 2 }).map((_, index) => (
                      <DiscountCardSkeleton key={index} ShimmerPlaceholder={ShimmerPlaceholder} />
                    ))}
                  </View>
                ) : data?.length > 0 ? (
                  <View style={{
                    backgroundColor: COLORS.white,
                    marginBottom: 50,
                  }}>
                    <FlatList
                      data={data}
                      keyExtractor={(item: any) => item._id}
                      numColumns={2}
                      columnWrapperStyle={{ gap: 16 }}
                      showsVerticalScrollIndicator={false}
                      renderItem={({ item }) => {
                        return (
                          <DiscountWithBrand
                            image={{ uri: `${API_URL}/${item?.images?.[0]}` }}
                            brandName={item?.brand?.name}
                            brandCity={item?.brand?.city}
                            brandImage={{ uri: `${API_URL}/${item?.brand?.logo}` }}
                            onPress={() => navigation.navigate(item.navigate)}
                            dispatch={dispatch}
                            brandInfo={item?.brand}
                            discountId={item?._id}
                          />
                        )
                      }}
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
              </>
            )}
          </View>
        </ScrollView>
      </View >
    </SafeAreaView >
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
  singleCategoryText: {
    backgroundColor: COLORS.white,
    height: 33,
    paddingHorizontal: 10,
    borderRadius: 30,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderColor: COLORS.primary,
    borderWidth: 1.5,
    paddingBottom: 2,
    color: COLORS.primary,
    fontWeight: '500',
    fontSize: 12
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Categories