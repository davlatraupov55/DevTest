import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { height, width } from "../consts";
import { useNavigation } from "@react-navigation/native";
import LottieView from 'lottie-react-native';
import animation from '../lottie/index';
import Logo from "../components/logo";

const SplashScreen = () => {

    const navigation = useNavigation();
    const [isAuthLoaded, setAuthloaded] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setAuthloaded(true);
        }, 2000);
    }, []);


    React.useEffect(() => {
        if (isAuthLoaded) {
            navigation.navigate('MainScreen')
        }
    }, [isAuthLoaded])

    return (
        <SafeAreaView style={styles.container} >
            <Logo />
            <LottieView style={styles.lotti}
                autoPlay
                loop
                source={animation.lottieFiles.loader}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lotti: {
        position: 'relative',
        width: width / 4,
        height: width / 4,
        marginTop: height / 35
    }
})

export default SplashScreen