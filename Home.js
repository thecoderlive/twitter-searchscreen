import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import TrendingNews from './TrendingNews'
import TrendingCollection from './TrendingCollection'

const Home = () => (
<ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
<TrendingNews item={item.trending_news}/>
<TrendingCollection item={item.trending_collection}/>
</ScrollView>
)

export default Home;

const styles = StyleSheet.create({
    
});