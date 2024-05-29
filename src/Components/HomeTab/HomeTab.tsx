import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const HomeTab = () => {
  const [selectedTab, setSelectedTab] = useState('Today');

  const tabs = ['Today', 'Week', 'Month', 'Year'];

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
            key={index}
            style={[styles.tab, selectedTab === tab && styles.selectedTab]}
            onPress={() => setSelectedTab(tab)}
            
        >
            <Text style={[{lineHeight:32}, styles.tabText, selectedTab === tab && styles.selectedTabText]}>{tab}</Text>
        </TouchableOpacity>
      ))}

    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#79B4B7',
    height: 34,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tab: {
    // flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    // height: 34,
  },
  selectedTab: {
    backgroundColor: '#E0F7FA',
    borderRadius: 20,
  },
  tabText: {
    color: '#9D9D9D',
    fontSize: 14,
  },
  selectedTabText: {
    color: '#79B4B7',
    fontWeight: 'bold',
  },
});