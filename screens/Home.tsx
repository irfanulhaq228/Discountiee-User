import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-virtualized-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';

import Brand from '../components/Brand';
import { useTheme } from '../theme/ThemeProvider';
import SubHeaderItem from '../components/SubHeaderItem';
import { COLORS, icons, images, SIZES } from '../constants';

import LocationModal from '../components/LocationModal';
import DiscountWithBrand from '../components/DiscountWithBrand';
import { DiscountCardSkeleton } from '../components/DiscountCard';
import { API_URL, fn_getBrandsApi, fn_getDiscountWithBrandApi, fn_searchBrandsByNameApi } from '../api/api';

import Feather from "react-native-vector-icons/Feather";
import { updateSelectedBrand } from '../store/features';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const Home = () => {

  const dispatch = useDispatch();
  const { dark, colors } = useTheme();
  const navigation = useNavigation<NavigationProp<any>>();

  const [brands, setBrands] = useState<any[]>([]);
  const [brandsLoader, setBrandsLoader] = useState<boolean>(true);

  const [discounts, setDiscounts] = useState<any[]>([]);
  const [discountsLoader, setDiscountsLoader] = useState<boolean>(true);

  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchLoader, setSearchLoader] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const globalFilterCities = useSelector((state: any) => state.globalFilterCities);

  useFocusEffect(
    useCallback(() => {
      setBrandsLoader(true);
      setBrands([]);
      fn_getBrands();

      setDiscountsLoader(true);
      setDiscounts([]);
      fn_getDiscounts();
    }, [globalFilterCities])
  );

  const fn_getBrands = async () => {
    const response = await fn_getBrandsApi([], globalFilterCities);
    if (response?.status) {
      setBrandsLoader(false);
      setBrands(response?.data);
    } else {
      setBrandsLoader(false);
      setBrands([]);
    }
  };

  const fn_getDiscounts = async () => {
    const response = await fn_getDiscountWithBrandApi(1, globalFilterCities);
    if (response?.status) {
      setDiscountsLoader(false);
      setDiscounts(response?.data);
    } else {
      setDiscountsLoader(false);
      setDiscounts([]);
    }
  };

  const fn_searchBrands = async (query: string) => {
    if (query.trim().length === 0) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setSearchLoader(true);
    setIsSearching(true);

    const response = await fn_searchBrandsByNameApi(query, globalFilterCities);
    if (response?.status) {
      setSearchResults(response?.data || []);
    } else {
      setSearchResults([]);
    }
    setSearchLoader(false);
  };

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
  };

  const renderSearch = () => {
    return (
      <>
        {!showSearch && (
          <TouchableOpacity
            onPress={() => setShowSearch(true)}
            style={{ height: 45, width: '100%', backgroundColor: COLORS.grayscale200, borderRadius: 10, marginBottom: 10, justifyContent: 'center', paddingHorizontal: 15, position: 'relative' }}
          >
            <Text style={{ fontFamily: "Urbanist Regular", color: COLORS.gray }}>Search Here...</Text>
            <Feather name='search' size={20} style={{ position: 'absolute', end: 10, top: 13, color: COLORS.primary }} />
          </TouchableOpacity>
        )}
      </>
    )
  };

  const renderBanner = () => {
    return (
      <View style={[styles.bannerItemContainer, {
        backgroundColor: COLORS.bgPrimary
      }]}>
        <Image source={images.banner} style={{ width: '100%', height: '100%', objectFit: 'contain', alignSelf: 'center', overflow: 'hidden' }} />
      </View>
    )
  };

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
        />
        {discountsLoader ? (
          <View style={{
            backgroundColor: dark ? COLORS.dark1 : COLORS.white,
            marginBottom: 60,
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
            marginBottom: 60,
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

  const renderSearchResults = () => {
    if (!isSearching) return null;

    return (
      <View style={{
        position: 'absolute',
        top: 145, // Position below search input
        left: 16,
        right: 16,
        zIndex: 1000,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        maxHeight: 300,
      }}>
        {searchLoader ? (
          <View style={{ padding: 20, alignItems: 'center' }}>
            <Text style={{ fontFamily: "Urbanist Regular", color: COLORS.gray }}>Searching...</Text>
          </View>
        ) : searchResults.length > 0 ? (
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 15,
                  marginHorizontal: 15,
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.grayscale200,
                }}
                onPress={() => {
                  setSearchText('');
                  setShowSearch(false);
                  setIsSearching(false);
                  navigation.navigate("brand-info");
                  dispatch(updateSelectedBrand(item));
                }}
              >
                <Image
                  source={{ uri: `${API_URL}/${item?.logo}` }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    marginRight: 12,
                  }}
                  resizeMode="contain"
                />
                <View style={{ flex: 1 }}>
                  <Text style={{
                    fontSize: 16,
                    fontFamily: "Urbanist SemiBold",
                    color: COLORS.greyscale900,
                  }}>
                    {item?.name}
                  </Text>
                  {item?.city && (
                    <Text style={{
                      fontSize: 14,
                      fontFamily: "Urbanist Regular",
                      color: COLORS.greyscale600,
                      marginTop: 2,
                    }}>
                      {item?.city}
                    </Text>
                  )}
                </View>
                <Feather name="chevron-right" size={20} color={COLORS.greyscale600} />
              </TouchableOpacity>
            )}
          />
        ) : searchText.trim().length > 0 ? (
          <View style={{ padding: 20, alignItems: 'center' }}>
            <Text style={{ fontFamily: "Urbanist Regular", color: COLORS.greyscale600 }}>
              No brands found for "{searchText}"
            </Text>
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <>
      {showSearch && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 999,
            backgroundColor: COLORS.blackOpacity,
            width: "100%",
            height: "100%"
          }}
          onPress={() => {
            setShowSearch(false);
            setSearchText('');
          }}
          activeOpacity={1}
        />
      )}

      {/* Search Input Overlay */}
      {showSearch && (
        <View style={{
          position: 'absolute',
          top: 100, // Adjust this value based on your header height
          left: 16,
          right: 16,
          zIndex: 1000,
        }}>
          <View style={{
            backgroundColor: COLORS.white,
            borderRadius: 10,
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}>
            <TextInput
              style={{
                height: 45,
                width: '100%',
                paddingHorizontal: 15,
                paddingRight: 50,
                fontSize: 13,
                borderRadius: 10,
                fontFamily: 'Urbanist Regular',
                fontWeight: 500,
                color: COLORS.black
              }}
              placeholder='Search Here...'
              placeholderTextColor={COLORS.gray}
              value={searchText}
              onChangeText={(text) => {
                setSearchText(text);
                fn_searchBrands(text);
              }}
              autoFocus={true}
            />
            <View style={{ position: 'absolute', right: 10, top: 12, flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="search" size={20} style={{ marginRight: 8 }} />
              <TouchableOpacity onPress={() => {
                setShowSearch(false);
                setSearchText('');
                setIsSearching(false);
              }}>
                <Feather name="x" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {/* Search Results Overlay */}
      {renderSearchResults()}

      <LocationModal globalFilterCities={globalFilterCities} />
      <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
        <View style={[styles.container, { backgroundColor: colors.background }]}>
          {renderHeader()}
          <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 15 }}>
            {renderSearch()}
            {renderBanner()}
            {renderBrands()}
            {renderPopularProducts()}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
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
    backgroundColor: COLORS.secondary,
    height: 170,
    borderRadius: 20,
    overflow: 'hidden'
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