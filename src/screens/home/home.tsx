import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';

import styles from './styles';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import { theme } from '../../components';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import categorydata from './categoryData';
import productData from './productData';
import Product from '../../components/Product/Product';
import { HomeNavParamList } from '../../types/navigationTypes';

const Home = ({ navigation }: StackScreenProps<HomeNavParamList, 'Home'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader
        notification={() => navigation.navigate('Notifications')}
        cart={() => alert('cart')}
      />
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <HomeBanner />
        <View style={styles.departmentContainer}>
          <Text style={styles.department}>Departments</Text>
          <TouchableOpacity
            style={styles.moreContainer}
            onPress={() => alert('more departmnet')}
          >
            <Text style={styles.more}>More</Text>
            <Icon name="chevron-right" color={theme.colors.darkGrey} />
          </TouchableOpacity>
        </View>
        <View style={styles.departmentSlider}>
          <FlatList
            data={categorydata}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback onPress={() => alert('department')}>
                <CategoryItem
                  bgColor="light"
                  label={item.name}
                  image={item.image}
                />
              </TouchableWithoutFeedback>
            )}
          />
        </View>
        <View style={styles.departmentContainer}>
          <Text style={styles.department}>Pharmacy</Text>
          <TouchableOpacity
            style={styles.moreContainer}
            onPress={() => navigation.navigate('Pharmacy')}
          >
            <Text style={styles.more}>More</Text>
            <Icon name="chevron-right" color={theme.colors.darkGrey} />
          </TouchableOpacity>
        </View>
        <View style={styles.productSlider}>
          <FlatList
            data={productData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Product
                bgColor="light"
                label={item.title}
                image={item.images[0]}
                price={item.price}
                cart={() => alert('added to cart')}
                details={() => alert('product pressed')}
              />
            )}
          />
        </View>
        <View style={styles.departmentContainer}>
          <Text style={styles.department}>Recenty Viewed</Text>
          <TouchableOpacity
            style={styles.moreContainer}
            onPress={() => alert('more pharmacy')}
          >
            <Text style={styles.more}>More</Text>
            <Icon name="chevron-right" color={theme.colors.darkGrey} />
          </TouchableOpacity>
        </View>
        <View style={[styles.productSlider, { marginBottom: 30 }]}>
          <FlatList
            data={productData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Product
                bgColor="light"
                label={item.title}
                image={item.images[0]}
                price={item.price}
                cart={() => alert('added to cart')}
                details={() => alert('product pressed')}
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
