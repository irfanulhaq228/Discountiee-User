import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import RBSheet from 'react-native-raw-bottom-sheet';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import { categories, myCart } from '../data';
import { COLORS, icons, images, SIZES } from '../constants';
import CartCard from '../components/CartCard';
import NotFoundCard from '../components/NotFoundCard';
import Button from '../components/Button';
import ButtonFilled from '../components/ButtonFilled';

interface Product {
  id: string;
  name: string;
  image: any; // Change to the correct type if necessary
  price: number;
  rating: number;
  numReviews: number;
  size?: string;
  color?: string;
  categoryId: string;
}

const Cart: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const refRBSheet = useRef<any>(null);
  const { dark, colors } = useTheme();
  const [selectedBookmarkItem, setSelectedBookmarkItem] = useState<Product | null>(null);
  const [myCartProducts, setMyCartProducts] = useState<any>(myCart || []);
  const [resultsCount, setResultsCount] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["0"]);

  const handleRemoveBookmark = () => {
    if (selectedBookmarkItem) {
      const updatedCartProduct = myCartProducts.filter(
        (product: any) => product.id !== selectedBookmarkItem.id
      );
      setMyCartProducts(updatedCartProduct);
      refRBSheet.current?.close();
    }
  };
  /**
   * Render header
   */
  const renderHeader = () => (
    <TouchableOpacity style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Image
          source={images.logo}
          resizeMode="contain"
          style={[styles.logo, { tintColor: dark ? COLORS.white : COLORS.primary }]}
        />
        <Text style={[styles.headerTitle, { color: dark ? COLORS.white : COLORS.greyscale900 }]}>
          My Cart
        </Text>
      </View>
      <TouchableOpacity>
        <Image
          source={icons.search4}
          resizeMode="contain"
          style={[styles.headerIcon, { tintColor: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
  /**
   * Render my content
   */
  const renderContent = () => {
    const filteredProducts = myCartProducts.filter(
      (product: any) => selectedCategories.includes("0") || selectedCategories.includes(product.categoryId)
    );

    useEffect(() => {
      setResultsCount(filteredProducts.length);
    }, [myCartProducts, selectedCategories]);

    // Category item
    const renderCategoryItem = ({ item }: { item: { id: string; name: string } }) => (
      <TouchableOpacity
        style={{
          backgroundColor: selectedCategories.includes(item.id)
            ? dark
              ? COLORS.dark3
              : COLORS.primary
            : 'transparent',
          padding: 10,
          marginVertical: 5,
          borderColor: dark ? COLORS.dark3 : COLORS.primary,
          borderWidth: 1.3,
          borderRadius: 24,
          marginRight: 12,
        }}
        onPress={() => toggleCategory(item.id)}>
        <Text style={{
          color: selectedCategories.includes(item.id) ? COLORS.white : dark ? COLORS.white : COLORS.primary
        }}>{item.name}</Text>
      </TouchableOpacity>
    );

    // Toggle category selection
    const toggleCategory = (categoryId: string) => {
      const updatedCategories = [...selectedCategories];
      const index = updatedCategories.indexOf(categoryId);

      if (index === -1) {
        updatedCategories.push(categoryId);
      } else {
        updatedCategories.splice(index, 1);
      }

      setSelectedCategories(updatedCategories);
    };

    return (
      <View>
        <View style={styles.categoryContainer}>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={renderCategoryItem}
          />
        </View>

        {/* Results container  */}
        <View>
          {/* result list */}
          <View style={{
            backgroundColor: dark ? COLORS.dark1 : COLORS.secondaryWhite,
            marginVertical: 16
          }}>
            {resultsCount > 0 ? (
              <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <CartCard
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    numReviews={item.numReviews}
                    size={item.size}
                    color={item.color}
                    onPress={() => {
                      setSelectedBookmarkItem(item);
                      refRBSheet.current?.open();
                    }}
                  />
                )}
              />
            ) : (
              <NotFoundCard />
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderContent()}
        </ScrollView>
        <View style={[styles.cartBottomContainer, {
          backgroundColor: dark ? COLORS.dark1 : COLORS.white,
          borderTopColor: dark ? COLORS.dark1 : COLORS.white,
        }]}>
          <View>
            <Text style={[styles.cartTitle, { color: dark ? COLORS.greyscale300 : COLORS.greyscale600 }]}>
              Total Price
            </Text>
            <Text style={[styles.cartSubtitle, { color: dark ? COLORS.white : COLORS.black }]}>
              $1,970.00
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("checkout")}
            style={styles.cartBtn}>
            <Text style={styles.cartBtnText}>Checkout</Text>
            <Image
              source={icons.rightArrow2}
              resizeMode="contain"
              style={styles.bagIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={true}
        height={310}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          draggableIcon: {
            backgroundColor: dark ? COLORS.greyscale300 : COLORS.greyscale300,
          },
          container: {
            borderTopRightRadius: 32,
            borderTopLeftRadius: 32,
            height: 310,
            backgroundColor: dark ? COLORS.dark2 : COLORS.white,
            alignItems: "center",
            width: "100%",
            paddingVertical: 12
          }
        }}>
        <Text style={[styles.bottomSubtitle, { color: dark ? COLORS.white : COLORS.black }]}>
          Remove from Cart?
        </Text>
        <View style={styles.separateLine} />

        <View style={[styles.selectedBookmarkContainer, { backgroundColor: dark ? COLORS.dark2 : COLORS.tertiaryWhite }]}>
          <CartCard
            name={selectedBookmarkItem?.name || ""}
            image={selectedBookmarkItem?.image}
            price={selectedBookmarkItem?.price || 0}
            rating={selectedBookmarkItem?.rating || 0}
            numReviews={selectedBookmarkItem?.numReviews || 0}
            size={selectedBookmarkItem?.size}
            color={selectedBookmarkItem?.color || ""}
            onPress={() => console.log(selectedBookmarkItem)}
          />
        </View>

        <View style={styles.bottomContainer}>
          <Button
            title="Cancel"
            style={{
              width: (SIZES.width - 32) / 2 - 8,
              backgroundColor: dark ? COLORS.dark3 : COLORS.tansparentPrimary,
              borderRadius: 32,
              borderColor: dark ? COLORS.dark3 : COLORS.tansparentPrimary
            }}
            textColor={dark ? COLORS.white : COLORS.primary}
            onPress={() => refRBSheet.current?.close()}
          />
          <ButtonFilled
            title="Yes, Remove"
            style={styles.removeButton}
            onPress={handleRemoveBookmark}
          />
        </View>
      </RBSheet>
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
    padding: 16,
    marginBottom: 32
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  logo: {
    height: 32,
    width: 32,
    tintColor: COLORS.primary
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: "Urbanist Bold",
    color: COLORS.greyscale900,
    marginLeft: 12
  },
  headerIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.greyscale900
  },
  profileContainer: {
    alignItems: "center",
    borderBottomColor: COLORS.grayscale400,
    borderBottomWidth: .4,
    paddingVertical: 20
  },
  categoryContainer: {
    marginTop: 12
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
    paddingHorizontal: 16,
    width: "100%"
  },
  cancelButton: {
    width: (SIZES.width - 32) / 2 - 8,
    backgroundColor: COLORS.tansparentPrimary,
    borderRadius: 32
  },
  removeButton: {
    width: (SIZES.width - 32) / 2 - 8,
    backgroundColor: COLORS.primary,
    borderRadius: 32
  },
  bottomTitle: {
    fontSize: 24,
    fontFamily: "Urbanist SemiBold",
    color: "red",
    textAlign: "center",
  },
  bottomSubtitle: {
    fontSize: 22,
    fontFamily: "Urbanist Bold",
    color: COLORS.greyscale900,
    textAlign: "center",
    marginVertical: 12
  },
  selectedBookmarkContainer: {
    marginVertical: 16,
    backgroundColor: COLORS.tertiaryWhite
  },
  separateLine: {
    width: "100%",
    height: .2,
    backgroundColor: COLORS.greyscale300,
    marginHorizontal: 16
  },
  filterIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.primary
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: SIZES.width - 32,
    justifyContent: "space-between"
  },
  tabBtn: {
    width: (SIZES.width - 32) / 2 - 6,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.4,
    borderColor: COLORS.primary,
    borderRadius: 32
  },
  selectedTab: {
    width: (SIZES.width - 32) / 2 - 6,
    height: 42,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.4,
    borderColor: COLORS.primary,
    borderRadius: 32
  },
  tabBtnText: {
    fontSize: 16,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.primary,
    textAlign: "center"
  },
  selectedTabText: {
    fontSize: 16,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.white,
    textAlign: "center"
  },
  resultContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: SIZES.width - 32,
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "Urbanist Bold",
    color: COLORS.black,
  },
  subResult: {
    fontSize: 14,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.primary
  },
  resultLeftView: {
    flexDirection: "row"
  },
  logoutButton: {
    width: (SIZES.width - 32) / 2 - 8,
    backgroundColor: COLORS.primary,
    borderRadius: 32
  },
  sheetTitle: {
    fontSize: 18,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.black,
    marginVertical: 12
  },
  reusltTabContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: SIZES.width - 32,
    justifyContent: "space-between",
    marginTop: 12
  },
  viewDashboard: {
    flexDirection: "row",
    alignItems: "center",
    width: 36,
    justifyContent: "space-between"
  },
  dashboardIcon: {
    width: 16,
    height: 16,
    tintColor: COLORS.primary
  },
  tabText: {
    fontSize: 20,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.black
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
    width: 230,
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
    marginLeft: 8
  }
});

export default Cart;