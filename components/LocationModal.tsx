import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../constants';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const LocationModal = () => {

    const [canFilter, setCanFilter] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableOpacity activeOpacity={0.5} style={styles.main} onPress={() => setModalVisible(true)}>
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
                        <Text style={styles.modalTitle}>Select Desired City</Text>
                        <View style={{ width: "100%", flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>

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
                                activeOpacity={!canFilter ? 1 : 0.5}
                            >
                                <Text style={canFilter ? styles.filterButtonText : styles.notFilterButtonText}>Filter</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
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
});