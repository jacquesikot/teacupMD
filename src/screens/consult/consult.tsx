import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';

import styles, { WIDTH, HEIGHT } from './styles';
import ConsultTab from '../../components/ConsultTab/ConsultTab';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import tabData from './tabData';
import categoryData from '../home/categoryData';

const Consult = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Consult</Text>
        <Text style={styles.subHeading}>Professional Physician</Text>
      </View>
      <View style={styles.tabContainer}>
        {tabData.map((d) => (
          <ConsultTab
            key={d.id.toString()}
            color={d.color}
            upperText={d.title}
            lowerText={d.subText}
            image={d.img}
          />
        ))}
      </View>
      <Text style={styles.clinicalText}>Clinical Departments</Text>
      <View style={styles.grid}>
        <FlatList
          data={categoryData}
          numColumns={3}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback onPress={() => alert('department')}>
              <CategoryItem
                bgColor="light"
                label={item.name}
                image={item.image}
                width={WIDTH}
                height={HEIGHT}
              />
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Consult;
