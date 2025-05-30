import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import React, { useRef, useState } from 'react';
import { COLORS, SIZES, icons, images, socials } from '../constants';
import RBSheet from "react-native-raw-bottom-sheet";
import { ScrollView } from 'react-native-virtualized-view';
import AutoSlider from '../components/AutoSlider';
import { useTheme } from '../theme/ThemeProvider';
import SocialIcon from '../components/SocialIcon';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { NavigationProp, useNavigation } from '@react-navigation/native';

const ElectronicsDetails = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [isFavorite, setIsFavorite] = useState(false);
  const { dark } = useTheme();
  const refRBSheet = useRef<any>(null);

  // Slider images
  const sliderImages = [
    images.electronic1,
    images.electronic2,
    images.electronic3,
    images.electronic6,
  ];

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

        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => setIsFavorite(!isFavorite)}>
            <Image
              source={isFavorite ? icons.heart2 : icons.heart2Outline}
              resizeMode='contain'
              style={styles.bookmarkIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sendIconContainer}
            onPress={() => refRBSheet.current.open()}>
            <Image
              source={icons.send2}
              resizeMode='contain'
              style={styles.sendIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  /**
   * render content
   */
  const renderContent = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const increaseQty = () => {
      setQuantity(quantity + 1);
    }

    const decreaseQty = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }

    const handleColorSelect = (color: any) => {
      setSelectedColor(color);
    };

    const renderCheckmark = (color: any) => {
      if (selectedColor === color) {
        return <FontAwesome name="check" size={18} color="white" />;
      }
      return null;
    };

    return (
      <View style={styles.contentContainer}>
        <View style={styles.contentView}>
          <Text style={[styles.contentTitle, {
            color: dark ? COLORS.white : COLORS.black
          }]}>
            Vinia Headphone
          </Text>
          <TouchableOpacity
            onPress={() => setIsFavorite(!isFavorite)}>
            <Image
              source={isFavorite ? icons.heart2 : icons.heart2Outline}
              resizeMode='contain'
              style={[styles.bookmarkIcon, {
                tintColor: dark ? COLORS.white : COLORS.black
              }]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.ratingContainer}>
          <View style={[styles.ratingView, {
            backgroundColor: dark ? COLORS.dark3 : COLORS.silver
          }]}>
            <Text style={[styles.ratingViewTitle, {
              color: dark ? COLORS.white : "#35383F",
            }]}>7,474 sold</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("productreviews")}
            style={styles.starContainer}>
            <View>
              <Image
                source={icons.starHalf2}
                resizeMode='contain'
                style={[styles.starIcon, {
                  tintColor: dark ? COLORS.white : COLORS.black
                }]}
              />
            </View>
            <View>
              <Text style={[styles.reviewText, {
                color: dark ? COLORS.white : COLORS.greyScale800
              }]}>
                {"   "}4.9 (5,389 reviews)
              </Text>
            </View>
          </TouchableOpacity>

        </View>
        <View style={[styles.separateLine, {
          backgroundColor: dark ? COLORS.greyscale900 : COLORS.grayscale200
        }]} />
        <Text style={[styles.descTitle, {
          color: dark ? COLORS.white : COLORS.greyscale900
        }]}>Description</Text>
        <Text style={[styles.descText, {
          color: dark ? COLORS.greyscale300 : COLORS.greyScale800,
        }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna.</Text>
        <View style={styles.featureContainer}>
          <View style={styles.featureView}>
            <Text style={[styles.descTitle, {
              color: dark ? COLORS.white : COLORS.greyscale900
            }]}>Color</Text>
            <View style={styles.colorContainer}>
              {['#101010', '#9D28AC', '#FF981F', '#3F51B2', '#607D8A', '#7A5548', '#797979'].map((color) => (
                <TouchableOpacity
                  key={color}
                  style={[
                    styles.colorView,
                    { backgroundColor: color },
                    selectedColor === color && styles.selectedColor,
                  ]}
                  onPress={() => handleColorSelect(color)}
                >
                  {renderCheckmark(color)}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.qtyContainer}>
          <Text style={[styles.descTitle, {
            color: dark ? COLORS.white : COLORS.greyscale900
          }]}>Quantity</Text>
          <View style={[styles.qtyViewContainer, {
            backgroundColor: dark ? COLORS.dark3 : COLORS.silver
          }]}>
            <TouchableOpacity
              onPress={decreaseQty}>
              <Feather name="minus" size={20} color={dark ? COLORS.white : "black"} />
            </TouchableOpacity>
            <Text style={[styles.qtyMidText, {
              color: dark ? COLORS.white : COLORS.black
            }]}>{quantity}</Text>
            <TouchableOpacity
              onPress={increaseQty}>
              <Feather name="plus" size={20} color={dark ? COLORS.white : "black"} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.separateLine, {
          backgroundColor: dark ? COLORS.greyscale900 : COLORS.grayscale200
        }]} />
      </View>
    )
  }
  return (
    <View style={[styles.area,
    { backgroundColor: dark ? COLORS.dark1 : COLORS.white }]}>
      <StatusBar hidden />
      <AutoSlider images={sliderImages} />
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderContent()}
      </ScrollView>
      <View style={[styles.cartBottomContainer, {
        backgroundColor: dark ? COLORS.dark1 : COLORS.white,
        borderTopColor: dark ? COLORS.dark1 : COLORS.white,
      }]}>
        <View>
          <Text style={[styles.cartTitle, {
            color: dark ? COLORS.greyscale300 : COLORS.greyscale600
          }]}>Total Price</Text>
          <Text style={[styles.cartSubtitle, {
            color: dark ? COLORS.white : COLORS.black,
          }]}>$720.00</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("cart")}
          style={[styles.cartBtn, {
            backgroundColor: dark ? COLORS.white : COLORS.black
          }]}>
          <Image
            source={icons.bags}
            resizeMode='contain'
            style={[styles.bagIcon, {
              tintColor: dark ? COLORS.black : COLORS.white
            }]}
          />
          <Text style={[styles.cartBtnText, {
            color: dark ? COLORS.black : COLORS.white,
          }]}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnPressMask={true}
        height={360}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          draggableIcon: {
            backgroundColor: dark ? COLORS.dark3 : COLORS.grayscale200,
          },
          container: {
            borderTopRightRadius: 32,
            borderTopLeftRadius: 32,
            height: 360,
            backgroundColor: dark ? COLORS.dark2 : COLORS.white,
            alignItems: "center",
          }
        }}
      >
        <Text style={[styles.bottomTitle, {
          color: dark ? COLORS.white : COLORS.greyscale900
        }]}>Share</Text>
        <View style={[styles.separateLine, {
          backgroundColor: dark ? COLORS.grayscale700 : COLORS.grayscale200,
          marginVertical: 12
        }]} />
        <View style={styles.socialContainer}>
          <SocialIcon
            icon={socials.whatsapp}
            name="WhatsApp"
            onPress={() => refRBSheet.current.close()}
          />
          <SocialIcon
            icon={socials.twitter}
            name="X"
            onPress={() => refRBSheet.current.close()}
          />
          <SocialIcon
            icon={socials.facebook}
            name="Facebook"
            onPress={() => refRBSheet.current.close()}
          />
          <SocialIcon
            icon={socials.instagram}
            name="Instagram"
            onPress={() => refRBSheet.current.close()}
          />
        </View>
        <View style={styles.socialContainer}>
          <SocialIcon
            icon={socials.yahoo}
            name="Yahoo"
            onPress={() => refRBSheet.current.close()}
          />
          <SocialIcon
            icon={socials.titktok}
            name="Tiktok"
            onPress={() => refRBSheet.current.close()}
          />
          <SocialIcon
            icon={socials.messenger}
            name="Chat"
            onPress={() => refRBSheet.current.close()}
          />
          <SocialIcon
            icon={socials.wechat}
            name="Wechat"
            onPress={() => refRBSheet.current.close()}
          />
        </View>
      </RBSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  headerContainer: {
    width: SIZES.width - 32,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 32,
    zIndex: 999,
    left: 16,
    right: 16
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
    fontSize: 30,
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
    marginVertical: 8
  },
  descText: {
    fontSize: 14,
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
    backgroundColor: COLORS.white,
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

export default ElectronicsDetails