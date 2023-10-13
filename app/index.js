import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Animated,
    StyleSheet
} from 'react-native';
import { Stack } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import Hero from '../components/hero';
import ScreenHeaderBtn from '../components/screen-header-btn';


const { COLORS, icons, SIZES, FONTS, images } = require('../constants');

const Home = () => {
    const navigation = useNavigation();

    const navigateToTransactionHistory=()=>{

        navigation.navigate('PhoneScreen')
    }
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const drawerWidth = 200;
    const animationValue = new Animated.Value(0);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    }

    const translateX = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-drawerWidth, 0],
    });

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.lightWhite
        }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity onPress={toggleDrawer}>
                            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                    ),
                    headerTitle: "",
                }}
            />

            {isDrawerOpen && (
                <View style={styles.drawer}>
                    <TouchableOpacity onPress={toggleDrawer}>
                        <Text onClick={toggleDrawer}>Close Drawer</Text>
                    </TouchableOpacity>
                </View>
            )}

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    <Hero />
                    <Text>Hello</Text>
                    
                    {/* Add a button to navigate to the HomePage */}
                    <TouchableOpacity onPress={navigateToTransactionHistory}>
                        <Text>Go to Transaction History</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    drawer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 200,
        height: '100%',
        backgroundColor: '#FFF',
        borderRightWidth: 1,
        borderColor: '#CCC',
    },
  
});

export default Home;
