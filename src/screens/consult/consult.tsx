import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useQuery } from 'react-query';

import styles, { WIDTH, HEIGHT } from './styles';
import ConsultTab from '../../components/ConsultTab/ConsultTab';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import tabData from './tabData';
import departmentsApi from '../../firebase/departments';
import { theme } from '../../components';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Consult = () => {
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
      <Animatable.View animation="fadeIn" style={styles.tabContainer}>
        {tabData.map((d) => (
          <TouchableOpacity
            onPress={() =>
              Alert.alert('Consultation', 'Consultation coming soon')
            }
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
      <Animatable.View animation="zoomIn" style={styles.grid}>
        {isLoading ? (
          <SkeletonPlaceholder backgroundColor={theme.colors.light}>
            <View
              style={{
                flexDirection: 'row',
                width: theme.constants.screenWidth,
                flexWrap: 'wrap',
              }}
            >
              {data.map(() => (
                <View
                  style={{
                    width: WIDTH,
                    height: HEIGHT,
                    borderRadius: 15,
                    marginRight: 10,
                    marginBottom: 10,
                  }}
                />
              ))}
            </View>
          </SkeletonPlaceholder>
        ) : (
          <FlatList
            data={data}
            numColumns={3}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  Alert.alert('Consultation', 'Consultation coming soon')
                }
              >
                <CategoryItem
                  bgColor="light"
                  label={item.name}
                  image={item.img_url}
                  width={WIDTH}
                  height={HEIGHT}
                  imgWidth={item.width}
                  imgHeight={item.height}
                />
              </TouchableOpacity>
            )}
          />
        )}
      </Animatable.View>
    </SafeAreaView>
  );
};

export default Consult;
