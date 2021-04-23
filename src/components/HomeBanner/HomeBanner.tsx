import React, { useState, useRef } from 'react';
import { View, Text, Animated, Image } from 'react-native';
import { theme } from '..';

import styles from './styles';

interface Props {}

const data = [
  {
    id: 1,
    banner: require('../../../assets/images/infoBanner.png'),
  },
  {
    id: 2,
    banner: require('../../../assets/images/infoBanner.png'),
  },
  {
    id: 3,
    banner: require('../../../assets/images/infoBanner.png'),
  },
];

const HomeBanner = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const slidesRef = useRef(null);

  const IMG_FORM_FACTOR = 2.68;

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        renderItem={({ item }: any) => {
          return (
            <View>
              <Image
                source={item.banner}
                style={{
                  width: theme.constants.screenWidth,
                  height: theme.constants.screenWidth / IMG_FORM_FACTOR,
                }}
              />
              <View style={{ width: 15 }} />
            </View>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item: any) => item.id.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
    </View>
  );
};

export default HomeBanner;
