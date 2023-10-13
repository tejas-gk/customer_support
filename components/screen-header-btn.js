import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native'

import styles from '../styles/search-btn'

export default function ScreenHeaderBtn({iconUrl,handleKeyPress,dimension}) {
  return (
      <TouchableOpacity style={styles.btnContainer} onPress={handleKeyPress}>
          <Image source={iconUrl}
              resizeMode='cover'
              style={styles.btnImg(dimension)}
          />
    </TouchableOpacity>
  )
}
