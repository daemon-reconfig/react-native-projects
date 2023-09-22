import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView contentContainerStyle={{paddingHorizontal: 17, paddingTop:12}} horizontal showsHorizontalScrollIndicator={false}>
        <CategoryCard />
        <Text>test</Text>
    </ScrollView>
  )
}

export default Categories