import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import styles, { WIDTH, HEIGHT } from './styles';
import ConsultTab from '../../components/ConsultTab/ConsultTab';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import tabData from './tabData';
import departmentsApi from '../../firebase/departments';

const Consult = () => {
  const [departments, setDepartments] = useState<any[]>([]);

  const getDepartments = async () => {
    const dept = await departmentsApi.getDepartments();
    setDepartments(dept);
  };

  useEffect(() => {
    getDepartments();
  }, []);

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
          data={departments}
          numColumns={3}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => alert('Consultation comming soon')}
            >
              <CategoryItem
                bgColor="light"
                label={item.name}
                image={item.img_url}
                width={WIDTH}
                height={HEIGHT}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Consult;
