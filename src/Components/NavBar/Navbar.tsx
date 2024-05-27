import { styled } from "nativewind";
import React from "react";
import { StyleSheet, View, Text, Dimensions  } from "react-native";
import Whitebase from '../../../assets/materials/whitebase_component.svg'

export const Navbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.base}>
                <Whitebase
                    width={'100%'}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    base:{
        width:Dimensions.get('window').width,
    }
});
  