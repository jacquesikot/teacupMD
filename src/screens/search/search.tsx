import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SearchIcon, Trash } from '../../svg/searchIcons';
import searchApi from '../../firebase/userSearch';
import { useAppContext } from '../../context/context';
import styles from './styles';

const Search = () => {
  const [recentSearch, setRecentSearch] = useState<any[]>([]);
  const { user } = useAppContext();

  const getRecentSearch = async () => {
    const result = await searchApi.getRecentSearch(user.id ? user.id : '');
    setRecentSearch(result);
  };

  useEffect(() => {
    getRecentSearch();
  }, []);

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
        {recentSearch.map((s) => (
          <TouchableOpacity activeOpacity={0.7} onPress={() => true}>
            <View key={s.id} style={styles.historyItem}>
              <Text key={s.id} style={styles.historyItemText}>
                {s.search_text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Search;
