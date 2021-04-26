import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
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
import { CommonActions } from '@react-navigation/routers';

const Home = ({ navigation }: StackScreenProps<HomeNavParamList, 'Home'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader
        notification={() => navigation.navigate('Notifications')}
        cart={() => navigation.navigate('Cart')}
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
            onPress={() =>
              navigation.dispatch(
                CommonActions.navigate({
                  name: 'Consult',
                })
              )
            }
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
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => alert('department')}
              >
                <CategoryItem
                  bgColor="light"
                  label={item.name}
                  image={item.image}
                />
              </TouchableOpacity>
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
                sale={item.sale_price}
                cart={() => alert('added to cart')}
                details={() =>
                  navigation.navigate('ProductDetail', { product: item })
                }
              />
            )}
          />
        </View>
        <View style={styles.departmentContainer}>
          <Text style={styles.department}>Recenty Viewed</Text>
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
                sale={item.sale_price}
                cart={() => alert('added to cart')}
                details={() =>
                  navigation.navigate('ProductDetail', { product: item })
                }
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
