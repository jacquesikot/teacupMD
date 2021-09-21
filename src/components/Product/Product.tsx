import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import { theme } from '..';
import { CartIcon } from '../../svg/homeIcons';
import { Trash } from '../../svg/searchIcons';
import styles, { MARGIN_RIGHT, WIDTH, HEIGHT } from './styles';

interface Props {
  width?: number;
  height?: number;
  bgColor: 'light' | 'white';
  label: string;
  image: string;
  price: string;
  cart?: any;
  details: any;
  qty: string;
  main_content: string;
  sale: string;
  saved?: any;
  marginRight?: number;
  prescription?: string;
}

const Product = ({
  width,
  height,
  bgColor,
  label,
  image,
  price,
  cart,
  details,
  qty,
  main_content,
  sale,
  saved,
  marginRight,
  prescription,
}: Props) => {
  const widthValue = width ? width : WIDTH;
  const heightValue = height ? height : HEIGHT;
  const salePrice = Number(sale);
  const marginRightValue = marginRight ? marginRight : MARGIN_RIGHT;

  return (
    <View
      style={[
        styles.container,
        {
          width: widthValue,
          height: heightValue,
          backgroundColor: theme.colors[bgColor],
          marginRight: marginRightValue,
        },
      ]}
    >
      <TouchableOpacity activeOpacity={0.8} onPress={details}>
        <Image
          {...{
            uri: image
              ? image
              : `https://via.placeholder.com/100x65.png/fff?text=No+Image`,
          }}
          tint="light"
          transitionDuration={300}
          style={{ width: 120, height: 125 }}
        />
      </TouchableOpacity>
      {/* 
      <View style={styles.qty}>
        <Text style={styles.qtyText}>{qty}</Text>
      </View> */}

      <Text style={styles.label} numberOfLines={1}>
        {`${label}`}
      </Text>
      {prescription === 'YES' ? (
        <Text style={styles.prescription}>Prescription</Text>
      ) : (
        <Text style={styles.prescription}></Text>
      )}

      {/* <Text style={styles.main_content} numberOfLines={1}>
        {main_content}
      </Text> */}

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View>
          {/* <View
            style={[
              styles.sale,
              {
                backgroundColor:
                  salePrice > 0 ? theme.colors.red : theme.colors.green,
              },
            ]}
          >
            <Text style={styles.saleText}>
              {salePrice > 0 ? (
                <Text style={styles.discountText}>
                  {(
                    ((Number(price) - Number(sale)) / Number(price)) *
                    100
                  ).toFixed(0) + '% Off'}
                </Text>
              ) : (
                <Text style={styles.discountText}>Available</Text>
              )}
            </Text>
          </View> */}

          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              ZK {Number(sale) > 0 ? sale : price}
            </Text>
            <View style={{ flex: 1 }} />
          </View>
        </View>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={cart ? cart : saved}>
          <View style={styles.cart}>
            {saved ? (
              <Trash />
            ) : (
              <CartIcon color={theme.colors.primary} width={12} />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;
