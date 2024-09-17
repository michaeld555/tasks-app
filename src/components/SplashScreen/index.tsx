import React, { useEffect, useRef } from "react";
import { View, Image, Animated } from "react-native";
import { styles } from "./styles";
import Icon from '../../assets/icon.png';

export default function SplashScreen() {

    const fadeAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        }).start();

    }, [fadeAnimation]);

    return (

        <View style={styles.container}>

            <Animated.View
                style={[styles.imageContainer, { opacity: fadeAnimation }]}
            >
                <Image style={styles.image} source={Icon} />
            </Animated.View>

        </View>

    );

}