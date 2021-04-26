import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SearchIcon, Trash } from '../../svg/searchIcons';

import styles from './styles';

const searchHistory = [
  'Cold',
  'fever',
  'Sleep',
  'dizziness',
  'fish',
  'diabetes',
  'Stomachache',
  'malaria',
  'high blood pressure',
];

const Search = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textInput}>
        <SearchIcon />
        <TextInput
          placeholder="Enter keywords to search"
          style={styles.placeholder}
          keyboardType="default"
          returnKeyType="search"
          autoCompleteType="off"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.historyContainer}>
        <Text style={styles.historyText}>History</Text>
        <TouchableOpacity style={styles.trashButton}>
          <Trash />
          <Text style={styles.trashText}>Clear History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchHistory}>
        {searchHistory.map((h, index) => (
          <TouchableOpacity activeOpacity={0.7} onPress={() => setSearch(h)}>
            <View key={index} style={styles.historyItem}>
              <Text key={index} style={styles.historyItemText}>
                {h}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Search;
