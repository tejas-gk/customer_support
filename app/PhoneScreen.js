import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity,Image } from 'react-native';
import Phonlog from '../src/api/phonlog';

const PhoneScreen = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (id) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };

  const renderItem = ({ item }) => {
    let interactionDay = '';
    const todayIDs = [1, 2, 3]; 
    const yesterdayIDs = [4, 5, 6]; 
  
    if (todayIDs.includes(item.id)) {
      interactionDay = 'Today';
    } else if (yesterdayIDs.includes(item.id)) {
      interactionDay = 'Yesterday';
    }
  
    return (
      <TouchableOpacity onPress={() => toggleExpand(item.id)}>
          <Text style={styles.main}>{interactionDay}</Text>
        <View style={styles.item}>
          <View style={styles.row}>
            <View style={styles.leftContainer}>
              <Image source={item.img} resizeMode="contain" style={styles.logo} />
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.startTime}>{item.startTime}</Text>
            </View>
          </View>
          {expandedItem === item.id && (
            <View>
              <View style={styles.descriptionLabelContainer}>
                <Text style={styles.descriptionLabel}>Description:</Text>
                <Text style={styles.text}> {item.desc}</Text>
              </View>
              <View style={styles.descriptionLabelContainer}>
                <Text style={styles.descriptionLabel}>Phone Number: </Text>
                <Text style={styles.text}>{item.phno}</Text>
              </View>
              <View style={styles.descriptionLabelContainer}>
                <Text style={styles.descriptionLabel}>startTime: </Text>
              <Text style={styles.text}>{item.startTime}</Text>
              </View>
              <View style={styles.descriptionLabelContainer}>
                <Text style={styles.descriptionLabel}>End Time: </Text>
              <Text style={styles.text}>{item.endTime}</Text>
              </View>
              <View style={styles.descriptionLabelContainer}>
                <Text style={styles.descriptionLabel}>Total Duration: </Text>
              <Text style={styles.text}>{item.TotalDuration}</Text>
              </View>
              
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Phone Log History</Text>
      <FlatList data={Phonlog} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main:{
   padding:3,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Background color for the entire screen
  },
  header: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#007bff', // Header background color
    padding: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: 'white', // Item background color
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 16,
    marginBottom: 8,
    marginLeft:2,
    color: '#333', // Text color for name
  },
  text: {
    marginTop:3,
    fontSize: 14,
    color: '#333', // Text color for details
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align children components horizontally with space in between
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  startTime: {
    fontSize: 14,
    color: '#333',
  },
  descriptionLabelContainer: {
    flexDirection: 'row', // Optional: Align Description label with the following text
  },
  descriptionLabel: {
    marginTop:3,
    color: 'blue', // Set the color you desire for the Description label
    fontSize: 14,
    fontWeight: 'bold', // You can adjust the font weight if needed
  },
});

export default PhoneScreen;
