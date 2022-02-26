import React, {useState, useRef} from 'react'
import { StyleSheet, SafeAreaView, FlatList, Animated } from 'react-native'
import { Block, Button } from 'galio-framework'

// Components 
import OnboardingItem from './OnboardingItem'
import Paginator from './Paginator'

// data
import slides from '../slides'

export default function Onboarding() {
   const scrollX = useRef(new Animated.Value(0)).current
   const [currentIndex, setCurrentIndex] = useState(0)
   const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
   const renderItem = ({ item }) => (
    <OnboardingItem item={item} />
   );
   const slideRef = useRef(null)
   
   const viewableItemsChanges = useRef(({ viewableItems }) => {
      setCurrentIndex(viewableItems[0].index);
   }).current

   const scrollTo = () => {
      if (currentIndex < slides.length - 1) {
         slideRef.current.scrollToIndex({index: currentIndex + 1});
      } else {
         console.log('Last index')
      }
   }

  return (
     <SafeAreaView style={styles.container}>
        <Block flex={3}>
           <FlatList
              ref={slideRef}
              data={slides}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              bounces={false}
              keyExtractor={(item) => item.id}
              viewabilityConfig={viewConfig}
              onScroll={Animated.event(
                 [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                   {
                        useNativeDriver: false
                    }
              )}
              onViewableItemsChange = {viewableItemsChanges}
           />
        </Block>
        <Paginator data={slides} scrollX={scrollX} />
        {/* <Button onPress={scrollTo} color='#0ea5e9' shadowless>
           Next
        </Button> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   }
})
