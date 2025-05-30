import { useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native-virtualized-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ListRenderItemInfo } from 'react-native';

import Brand from '../components/Brand';
import { banners } from '../data';
import { useTheme } from '../theme/ThemeProvider';
import SubHeaderItem from '../components/SubHeaderItem';
import { COLORS, icons, images, SIZES } from '../constants';

import { API_URL, fn_getBrandsApi, fn_getDiscountWithBrandApi } from '../api/api';
import DiscountWithBrand from '../components/DiscountWithBrand';
import { DiscountCardSkeleton } from '../components/DiscountCard';

interface BannerItem {
  id: number;
  discount: string;
  discountName: string;
  bottomTitle: string;
  bottomSubtitle: string;
}

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const Home = () => {

  const dispatch = useDispatch();
  const { dark, colors } = useTheme();
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation<NavigationProp<any>>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [brands, setBrands] = useState<any[]>([]);
  const [brandsLoader, setBrandsLoader] = useState<boolean>(true);

  const [discounts, setDiscounts] = useState<any[]>([]);
  const [discountsLoader, setDiscountsLoader] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % banners.length;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, banners.length]);

  useEffect(() => {
    setBrandsLoader(true);
    fn_getBrands();

    setDiscountsLoader(true);
    fn_getDiscounts();
  }, []);

  const fn_getBrands = async () => {
    const response = await fn_getBrandsApi([]);
    if (response?.status) {
      setBrandsLoader(false);
      setBrands(response?.data);
    } else {
      setBrandsLoader(false);
      setBrands([]);
    }
  };

  const fn_getDiscounts = async () => {
    const response = await fn_getDiscountWithBrandApi(1);
    if (response?.status) {
      setDiscountsLoader(false);
      setDiscounts(response?.data);
    } else {
      setDiscountsLoader(false);
      setDiscounts([]);
    }
  };

  const onScrollToIndexFailed = (info: {
    index: number;
    highestMeasuredFrameIndex: number;
    averageItemLength: number;
  }) => {
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
    }, 500); // Retry after a short delay
  };

  const getItemLayout = (_: any, index: number) => ({
    length: SIZES.width,
    offset: SIZES.width * index,
    index,
  });

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.viewLeft}>
          <Image
            source={images.dTextLogo}
            resizeMode='contain'
            style={styles.userIcon}
          />
        </View>
        <View style={styles.viewRight}>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate("notifications")}>
            <Image
              source={icons.notificationBell2}
              resizeMode='contain'
              style={[styles.bellIcon, { tintColor: dark ? COLORS.white : COLORS.greyscale900 }]}
            />
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => navigation.navigate("mywishlist")}>
            <Image
              source={icons.heartOutline}
              resizeMode='contain'
              style={[styles.bookmarkIcon, { tintColor: dark ? COLORS.white : COLORS.greyscale900 }]}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderBannerItem = ({ item }: ListRenderItemInfo<BannerItem>) => (
    <View style={[styles.bannerContainer, {
      backgroundColor: dark ? COLORS.dark3 : COLORS.transparent
    }]}>
      <View style={styles.bannerTopContainer}>
        <View>
          <Text style={[styles.bannerDicount, {
            color: dark ? COLORS.white : COLORS.black,
          }]}>{item.discount} OFF</Text>
          <Text style={[styles.bannerDiscountName, {
            color: dark ? COLORS.white : COLORS.black
          }]}>{item.discountName}</Text>
        </View>
        <Text style={[styles.bannerDiscountNum, {
          color: dark ? COLORS.white : COLORS.black
        }]}>{item.discount}</Text>
      </View>
      <View style={styles.bannerBottomContainer}>
        <Text style={[styles.bannerBottomTitle, {
          color: dark ? COLORS.white : COLORS.black
        }]}>{item.bottomTitle}</Text>
        <Text style={[styles.bannerBottomSubtitle, {
          color: dark ? COLORS.white : COLORS.black
        }]}>{item.bottomSubtitle}</Text>
      </View>
    </View>
  );

  const keyExtractor = (item: { id: number | string }) => item.id.toString();

  const renderDot = (index: number) => {
    return (
      <View
        style={[styles.dot, index === currentIndex ? styles.activeDot : null]}
        key={index}
      />
    );
  };

  const renderBanner = () => {
    return (
      <View style={[styles.bannerItemContainer, {
        backgroundColor: dark ? COLORS.dark3 : COLORS.bgPrimary
      }]}>
        <FlatList
          data={banners}
          ref={flatListRef}
          renderItem={renderBannerItem}
          keyExtractor={keyExtractor}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          getItemLayout={getItemLayout}
          onScrollToIndexFailed={onScrollToIndexFailed}
          // onEndReached={handleEndReached}
          // onEndReachedThreshold={0.5}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.round(
              event.nativeEvent.contentOffset.x / SIZES.width
            );
            setCurrentIndex(newIndex);
          }}
        />
        <View style={styles.dotContainer}>
          {banners.map((_, index) => renderDot(index))}
        </View>
      </View>
    )
  }

  const renderBrands = () => {
    return (
      <View>
        <SubHeaderItem
          title="Popular Brands"
          navTitle="See all"
          onPress={() => navigation.navigate("brands")}
        />

        {brandsLoader ? (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {[...Array(4)].map((_, index) => (
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
            data={brands.slice(0, 4)}
            keyExtractor={(item, index) => index.toString()}
            horizontal={false}
            numColumns={4}
            renderItem={({ item }) => (
              <Brand
                _id={item?._id}
                name={item?.name}
                icon={`${API_URL}/${item?.logo}`}
                dispatch={dispatch}
                brandInfo={item}
                navigation={navigation}
              />
            )}
          />
        ) : (
          <Text>No Brand Found</Text>
        )}
      </View>
    );
  };

  const renderPopularProducts = () => {

    return (
      <View>
        <SubHeaderItem
          title="Recent Discounts"
          navTitle="See All"
          onPress={() => navigation.navigate("mostpopularproducts")}
        />
        {discountsLoader ? (
          <View style={{
            backgroundColor: dark ? COLORS.dark1 : COLORS.white,
            marginBottom: 50,
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 16,
          }}>
            {Array.from({ length: 4 }).map((_, index) => (
              <DiscountCardSkeleton key={index} ShimmerPlaceholder={ShimmerPlaceholder} />
            ))}
          </View>
        ) : discounts?.length > 0 ? (
          <View style={{
            backgroundColor: dark ? COLORS.dark1 : COLORS.white,
            marginBottom: 50,
          }}>
            <FlatList
              data={discounts}
              keyExtractor={item => item._id}
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
      </View>
    )
  }

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 15 }}>
          {renderBanner()}
          {renderBrands()}
          {renderPopularProducts()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

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
  headerContainer: {
    flexDirection: "row",
    width: SIZES.width - 32,
    justifyContent: "space-between",
    alignItems: "center"
  },
  userIcon: {
    width: 160,
    height: 40
  },
  viewLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  greeeting: {
    fontSize: 12,
    fontFamily: "Urbanist Regular",
    color: "gray",
    marginBottom: 4
  },
  title: {
    fontSize: 20,
    fontFamily: "Urbanist Bold",
    color: COLORS.greyscale900
  },
  viewNameContainer: {
    marginLeft: 12
  },
  viewRight: {
    flexDirection: "row",
    alignItems: "center"
  },
  bellIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black,
    marginRight: 8
  },
  bookmarkIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black
  },
  searchBarContainer: {
    width: SIZES.width - 32,
    backgroundColor: COLORS.secondaryWhite,
    padding: 16,
    borderRadius: 12,
    height: 52,
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  searchIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.lightPrimary
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Urbanist Regular",
    marginHorizontal: 8
  },
  filterIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.primary
  },
  bannerContainer: {
    width: SIZES.width - 32,
    height: 154,
    paddingHorizontal: 28,
    paddingTop: 28,
    borderRadius: 32,
    backgroundColor: COLORS.bgPrimary
  },
  bannerTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  bannerDicount: {
    fontSize: 12,
    fontFamily: "Urbanist Medium",
    color: COLORS.black,
    marginBottom: 4
  },
  bannerDiscountName: {
    fontSize: 16,
    fontFamily: "Urbanist Bold",
    color: COLORS.black
  },
  bannerDiscountNum: {
    fontSize: 46,
    fontFamily: "Urbanist Bold",
    color: COLORS.black
  },
  bannerBottomContainer: {
    marginTop: 8
  },
  bannerBottomTitle: {
    fontSize: 14,
    fontFamily: "Urbanist Medium",
    color: COLORS.black
  },
  bannerBottomSubtitle: {
    fontSize: 14,
    fontFamily: "Urbanist Medium",
    color: COLORS.black,
    marginTop: 4
  },
  userAvatar: {
    width: 64,
    height: 64,
    borderRadius: 999
  },
  firstName: {
    fontSize: 16,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.dark2,
    marginTop: 6
  },
  bannerItemContainer: {
    width: "100%",
    paddingBottom: 10,
    backgroundColor: COLORS.secondary,
    height: 170,
    borderRadius: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.gray3,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: COLORS.primary,
  }
})

export default Home