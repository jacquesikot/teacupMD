import React, { useRef, useState } from 'react';
import { View, Animated, Text, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import styles from './styles';
import OnBoardingSlider from '../../components/OnboardingSlider/OnboardingSlider';
import data from './data';
import { AuthParamList } from '../../types/navigationTypes';
import OnboardingButton from '../../components/OnboardingButton/OnboardingButton';

const Onboarding = ({
  navigation,
}: StackScreenProps<AuthParamList, 'OnBoarding'>) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const slidesRef = useRef(null);

  return (
    <SafeAreaView style={styles.page}>
      <View style={{ flex: 1 }} />
      <View style={styles.sliderContainer}>
        <Animated.FlatList
          data={data}
          renderItem={({ item }: any) => {
            return (
              <OnBoardingSlider
                image={item.image}
                topText={item.topText}
                bottomText={item.bottomText}
              />
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

      <View style={styles.buttonContainer}>
        <OnboardingButton
          percentage={(currentIndex + 1) * (100 / data.length)}
          onPress={() => {
            if (slidesRef.current && currentIndex < 2) {
              slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
            } else {
              navigation.navigate('Welcome');
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
