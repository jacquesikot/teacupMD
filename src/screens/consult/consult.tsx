import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useQuery } from 'react-query';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles, { WIDTH, HEIGHT } from './styles';
import ConsultTab from '../../components/ConsultTab/ConsultTab';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import tabData from './tabData';
import departmentsApi from '../../firebase/departments';
import { theme } from '../../components';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import ComingSoon from '../../components/ComingSoon/ComingSoon';
import categoryData from '../home/categoryData';

const skeletonArray = [1, 2, 3, 4, 5, 6, 7];

const Consult = () => {
  const [showModal, SetShowModal] = useState<boolean>(false);

  const { isError, data, isLoading } = useQuery(
    'departments',
    departmentsApi.getDepartments
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Consult</Text>
        <Text style={styles.subHeading}>Professional Physician</Text>
      </View>
      <Animatable.View
        animation="fadeIn"
        useNativeDriver={true}
        style={styles.tabContainer}
      >
        {tabData.map((d) => (
          <TouchableOpacity
            onPress={d.onPress}
            activeOpacity={0.8}
            key={d.id.toString()}
          >
            <ConsultTab
              color={d.color}
              upperText={d.title}
              lowerText={d.subText}
              image={d.img}
            />
          </TouchableOpacity>
        ))}
      </Animatable.View>
      <Text style={styles.clinicalText}>Clinical Departments</Text>
      <Animatable.View
        animation="zoomIn"
        useNativeDriver={true}
        style={styles.grid}
      >
        {isLoading ? (
          <SkeletonPlaceholder backgroundColor={theme.colors.light}>
            <View
              style={{
                flexDirection: 'row',
                width: theme.constants.screenWidth,
                flexWrap: 'wrap',
              }}
            >
              {skeletonArray.map((index) => (
                <View
                  key={index}
                  style={{
                    width: WIDTH,
                    height: HEIGHT,
                    borderRadius: wp(4),
                    marginRight: wp(2.6),
                    marginBottom: wp(4),
                  }}
                />
              ))}
            </View>
          </SkeletonPlaceholder>
        ) : (
          <FlatList
            data={categoryData}
            numColumns={3}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => SetShowModal(true)}
              >
                <CategoryItem
                  bgColor="light"
                  label={item.name}
                  width={WIDTH}
                  height={HEIGHT}
                  svg={item.svg}
                />
              </TouchableOpacity>
            )}
          />
        )}
      </Animatable.View>
      <ComingSoon show={showModal} onRequestClose={() => SetShowModal(false)} />
    </SafeAreaView>
  );
};

export default Consult;
