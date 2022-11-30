import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const trendingNewsItem = ({ item }) => (
<View style={styles.trending_news_item}>
<Image
    style={styles.trending_news_image}
    source={{uri: item.trending_news_image}}
    />
</View>
  );

const TrendingNews = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.trending_news}
    data={item}
    renderItem={trendingNewsItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default TrendingNews;

const styles = StyleSheet.create({
    'trending_news_image': {
        'width': '100vw',
        'height': '70vw'
    }
});