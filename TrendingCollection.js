import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const trendingCollectionItem = ({ item }) => (
<View style={styles.trending_collection_item}>
<Text style={styles.origin}>{item.origin}</Text>
<Text style={styles.about}>{item.about}</Text>
<Text style={styles.tweet_counts}>{item.tweet_counts}</Text>
<Image
    style={styles.news_image}
    source={{uri: item.news_image}}
    />
</View>
  );

const TrendingCollection = ({ item }) => (
<FlatList
    style={styles.trending_collection}
    data={item}
    renderItem={trendingCollectionItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default TrendingCollection;

const styles = StyleSheet.create({
    'origin': {
        'color': '#5e5a5a',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 15,
        'marginTop': 25
    },
    'about': {
        'color': '#060505',
        'fontSize': 20,
        'fontWeight': '400',
        'paddingHorizontal': 15,
        'paddingTop': 5
    },
    'tweet_counts': {
        'color': '#787373',
        'fontSize': 17,
        'fontWeight': '400',
        'paddingHorizontal': 15,
        'paddingTop': 4
    },
    'news_image': {
        'width': '30vw',
        'height': '30vw',
        'marginTop': 10,
        'borderRadius': 15,
        'marginLeft': 15
    }
});