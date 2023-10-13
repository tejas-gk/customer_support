import React from 'react'
import {
    Text, View,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native'

import { useRouter } from 'expo-router'

import styles from '../styles/home-style';
import { COLORS, icons, SIZES } from '../constants';

export default function Hero() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = React.useState("");
  return (
      <View>
          <View style={styles.container}>
              <Text style={styles.userName}>hello Teju</Text>
              <Text style={styles.welcomeMessage}>Serve your customers like a pro</Text>
          </View>
          
          <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
          
    </View>
  )
}
