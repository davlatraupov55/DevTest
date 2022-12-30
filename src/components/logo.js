import { Image, Text, View, StyleSheet } from 'react-native';
import { width } from '../consts';

const Logo = () => {

    return (
        <View style={{ flexDirection: 'row' }} >
            <Image style={styles.Image} source={require('../img/logo.png')} />
            <Text
                style={styles.text}>
                AzaliaNow
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    Image: {
        height: width / 12,
        width: width / 12
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FF003C',
        marginLeft: width / 20,
    }
})

export default Logo