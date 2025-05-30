import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { COLORS, icons } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import { useTheme } from '../theme/ThemeProvider';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import HeaderWithSearch from '../components/HeaderWithSearch';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const CategoryClothes = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const { dark, colors } = useTheme()

    return (
        <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                <HeaderWithSearch
                    title="Clothes"
                    icon={icons.search}
                    onPress={() => navigation.navigate("search")}
                />
                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}>
                    <View style={{
                        backgroundColor: dark ? COLORS.dark1 : COLORS.white,
                        marginVertical: 16
                    }}>
                        <FlatList
                            data={products.clothes}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            columnWrapperStyle={{ gap: 16 }}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (
                                    <ProductCard
                                        name={item.name}
                                        image={item.image}
                                        numSolds={item.numSolds}
                                        price={item.price}
                                        rating={item.rating}
                                        onPress={() => navigation.navigate(item.navigate)}
                                    />
                                )
                            }}
                        />
                    </View>
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
        marginVertical: 2
    }
})

export default CategoryClothes