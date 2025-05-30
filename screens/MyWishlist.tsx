import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-virtualized-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

import { useTheme } from '../theme/ThemeProvider';
import { COLORS, icons, images, SIZES } from '../constants';
import { API_URL, fn_getWithlistPostApi } from '../api/api';
import HeaderWithSearch from '../components/HeaderWithSearch';
import DiscountWithBrand from '../components/DiscountWithBrand';
import { DiscountCardSkeleton } from '../components/DiscountCard';

interface MyWishlistProps {
  navigation: NavigationProp<any>;
};

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const MyWishlist: React.FC<MyWishlistProps> = () => {

  const dispatch = useDispatch();
  const { dark, colors } = useTheme();
  const [data, setData] = useState<any>([]);
  const navigation = useNavigation<NavigationProp<any>>();
  const [wishlistLoader, setWishlistLoader] = useState(true);


  useEffect(() => {
    fn_getWishlist();
  }, []);

  const fn_getWishlist = async () => {
    const idListString = await AsyncStorage.getItem('favourites') as any;
    const idList = JSON.parse(idListString) || [];

    const response = await fn_getWithlistPostApi({ idWishList: idList });
    if (response?.status) {
      setWishlistLoader(false);
      setData(response?.data);
    } else {
      setWishlistLoader(false);
      setData([]);
    }
  };

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <HeaderWithSearch
          title="My Wishlist"
          onPress={() => navigation.navigate("Search")}
        />
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {wishlistLoader ? (
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
          ) : data?.length > 0 ? (
            <View style={{
              backgroundColor: dark ? COLORS.dark1 : COLORS.white,
              marginBottom: 50,
            }}>
              <FlatList
                data={data}
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
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
    marginVertical: 2
  }
});

export default MyWishlist;