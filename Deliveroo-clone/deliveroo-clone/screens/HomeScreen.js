import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image 
                source={{
                    uri: "https://links.papareact.com/wru"
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                <Text className="font-bold text-xl">Current Location
                    <ChevronDownIcon size={20} color="#00CCBB"/>
                </Text>
            </View>
            <UserIcon size={35} />
        </View>
        {/* Search Bar */}
        <View className="flex-row items-center space-x-3 pb-2 mx-4">
            <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                <MagnifyingGlassIcon color="gray" size={20}/>
                <TextInput placeholder='Restraunts annd Cuisines' keyboardType='default'/>
            </View>
            <AdjustmentsVerticalIcon />
        </View>
        {/*Body*/}
        <ScrollView>
            {/* Categories */}
            <Categories />
            
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen