import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { Modal, StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';

import { COLORS } from '../constants';
import { fn_getBrandsCitiesApi } from '../api/api';
import { updateGlobalFilterCities } from '../store/features';

import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LocationModal = ({ globalFilterCities }: any) => {
    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCities, setSelectedCities] = useState<any>([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const [filteredCities, setFilteredCities] = useState([]);
    const [uniqueCities, setUniqueCities] = useState<any>([]);

    useFocusEffect(
        useCallback(() => {
            if (modalVisible) {
                fn_getBrandsCities();
            } else {
                setSearchQuery('');
                setDropdownVisible(false);
                setSelectedCities(globalFilterCities);
            }
        }, [modalVisible, globalFilterCities])
    );

    const fn_getBrandsCities = async () => {
        const response = await fn_getBrandsCitiesApi();
        if (response?.status) {
            setUniqueCities(response?.data);
            setFilteredCities(response?.data);
        } else {
            console.log("Error fetching cities:", response?.message);
            setUniqueCities([]);
        }
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const filtered = uniqueCities.filter((city: any) =>
            city.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCities(filtered);
    };

    const toggleCitySelection = (cityName: any) => {
        setSelectedCities((prev: any) => {
            if (prev.includes(cityName)) {
                return prev.filter((name: any) => name !== cityName);
            } else {
                return [...prev, cityName];
            }
        });
    };

    const removeCity = (cityName: any) => {
        setSelectedCities((prev: any) => prev.filter((name: any) => name !== cityName));
    };

    const applyFilters = () => {
        dispatch(updateGlobalFilterCities(selectedCities));
        setModalVisible(false);
    };

    return (
        <>
            <TouchableOpacity activeOpacity={0.5} style={selectedCities?.length > 0 ? styles.main : { ...styles.main, backgroundColor: COLORS.gray }} onPress={() => setModalVisible(true)}>
                <FontAwesome6 name="location-dot" style={{ color: COLORS.white, fontSize: 15, marginRight: -2 }} />
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Desired Cities</Text>
                        <TouchableOpacity
                            style={styles.selectInput}
                            activeOpacity={0.6}
                            onPress={() => setDropdownVisible(!dropdownVisible)}
                        >
                            <Text style={styles.selectInputText}>
                                {selectedCities.length === 1 ? `${selectedCities.length} city selected` : selectedCities?.length > 1 ? `${selectedCities.length} cities selected` : 'Select Cities'}
                            </Text>
                            <MaterialIcons size={18} name='keyboard-arrow-down' style={{ position: 'absolute', end: 13, top: 7 }} />
                        </TouchableOpacity>
                        {dropdownVisible && (
                            <View style={styles.dropdown}>
                                <TextInput
                                    style={{ ...styles.selectInput, paddingTop: 2, paddingBottom: 3 }}
                                    placeholder="Search City"
                                    value={searchQuery}
                                    onChangeText={handleSearch}
                                />
                                <Octicons name="search" size={13} style={{ position: 'absolute', end: 25, top: 20 }} />
                                <ScrollView style={styles.dropdownList}>
                                    {filteredCities.map((city: any, index: number) => (
                                        <TouchableOpacity
                                            key={index}
                                            activeOpacity={0.6}
                                            style={styles.cityButton}
                                            onPress={() => toggleCitySelection(city)}
                                        >
                                            <Text style={styles.cityButtonText}>
                                                {city}
                                            </Text>
                                            {selectedCities.includes(city) && (
                                                <FontAwesome name="check-square" size={16} style={{ position: 'absolute', end: 3, top: 6, color: COLORS.primary }} />
                                            )}
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>
                        )}
                        <View style={{ ...styles.selectedCitiesContainer, marginTop: selectedCities?.length > 0 ? 10 : 0 }}>
                            {selectedCities.map((city: any) => (
                                <TouchableOpacity key={city} activeOpacity={0.9} style={styles.selectedCityBox} onPress={() => removeCity(city)}>
                                    <Text style={styles.selectedCityText}>{city}</Text>
                                    <TouchableOpacity onPress={() => removeCity(city)}>
                                        <Entypo name="cross" style={styles.removeCityIcon} />
                                    </TouchableOpacity>
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
                                style={styles.filterButton}
                                activeOpacity={0.5}
                                onPress={applyFilters}
                            >
                                <Text style={styles.filterButtonText}>Filter</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "100%", marginTop: 10, flexDirection: 'row', gap: 7, alignItems: 'center' }}>
                            <FontAwesome6 name='circle-exclamation' size={17} color={COLORS.primary} />
                            <Text style={{ fontSize: 12, color: COLORS.greyScale800, fontFamily: "Urbanist" }}>This filter will applies on all over the application</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default LocationModal;

const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        backgroundColor: COLORS.primary,
        height: 33,
        width: 30,
        top: '18%',
        right: -1,
        zIndex: 9,
        borderWidth: 1,
        borderColor: COLORS.white,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 99
    },
    modalContent: {
        width: '80%',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        padding: 20,
        paddingBottom: 12,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    closeButton: {
        marginTop: 15,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.primary,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 20,
        flex: 1
    },
    closeButtonText: {
        color: COLORS.primary,
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center'
    },
    filterButton: {
        marginTop: 15,
        backgroundColor: COLORS.primary,
        borderWidth: 1,
        borderColor: COLORS.primary,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 20,
        flex: 1
    },
    filterButtonText: {
        color: COLORS.white,
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center'
    },
    cityButton: {
        position: 'relative',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.grayscale400,
        backgroundColor: COLORS.white,
        paddingVertical: 6,
        marginHorizontal: 11
    },
    cityButtonText: {
        color: COLORS.grayscale700,
        fontSize: 12,
        paddingHorizontal: 2
    },
    selectInput: {
        position: 'relative',
        width: '100%',
        borderWidth: 1,
        borderColor: COLORS.grayscale400,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        fontSize: 12,
        paddingBottom: 9,
        paddingTop: 7,
        paddingHorizontal: 15
    },
    selectInputText: {
        color: COLORS.grayscale700,
        fontSize: 12
    },
    dropdown: {
        position: 'relative',
        width: '100%',
        maxHeight: 200,
        marginTop: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.grayscale400,
        borderRadius: 10,
        backgroundColor: COLORS.white
    },
    dropdownList: {
        maxHeight: 200,
        marginTop: 5
    },
    selectedCitiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: "100%",
        gap: 5
    },
    selectedCityBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    selectedCityText: {
        color: COLORS.white,
        marginRight: 8,
        fontSize: 12,
    },
    removeCityIcon: {
        color: COLORS.white,
        fontSize: 15
    },
});