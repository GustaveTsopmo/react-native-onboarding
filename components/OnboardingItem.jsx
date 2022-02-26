import { Block, Text } from 'galio-framework'
import React from 'react'
import {Image, StyleSheet, useWindowDimensions} from 'react-native'

export default function OnboardingItem(props) {
   const { width } = useWindowDimensions();
   const item = props.item

   return (
      <Block style={[styles.container, { width }]}>
         <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />
         <Block flex={0.3}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
         </Block>
     </Block>
  )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   image: {
      flex: 0.7,
      justifyContent: 'center'
   },
   title: {
      fontWeight: '900',
      fontSize: 28,
      marginBottom: 10,
      color: '#0ea5e9',
      textAlign: 'center',
   },
   description: {
      fontWeight: '300',
      color: 'gray',
      textAlign: 'center',
      paddingHorizontal: 64,
   },

})