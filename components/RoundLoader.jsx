import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../constants'

const RoundLoader = () => {
    return (
        <View style={RoundLoadeerStyle.main}>
            <View style={RoundLoadeerStyle.sec}>
                <ActivityIndicator size={'large'} color={COLORS.primary} />
            </View>
        </View>
    )
}

export default RoundLoader;

const RoundLoadeerStyle = StyleSheet.create({
    main: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 9999,
        justifyContent: "center",
        alignItems: "center"
    },
    sec: {
        width: 100,
        height: 100,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})