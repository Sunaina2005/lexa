import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../../assets/Shared/Colors'

export default function ActionButton() {

    const actionButtonList=[
        {
            id:1,
            name:'Website',
            icon:'earth'
        },
        {
            id:2,
            name:'Email',
            icon:'chatbubble-ellipses'
        },
        {
            id:3,
            name:'Phone',
            icon: 'call'

        },
        {
            
            id:4,
            name:'Direction',
            icon:'navigate'
        },
        {
            id:5,
            name:'Share',
            icon:'share-social'
        }
    ]
  return (
    <View style={{marginTop:15}}>
        <FlatList
           data={actionButtonList}
           columnWrapperStyle={{
            flex:1,
            justifyContent:'space-between',
           }}
           numColumns={5}
           renderItem={({item})=>(
            <TouchableOpacity style={{alignItems:'center'}}>
                <View style={{
                    backgroundColor:Colors.SECONDARY,
                    padding:13,
                    borderRadius:99,
                    alignItems:'center',
                }}>                
                <Ionicons name={item.icon} size={24} color={Colors.PRIMARY} />
                </View>
                <Text style={{
                    fontFamily:'appfont-semi',
                    marginTop:5
                }}>{item.name}</Text>
            </TouchableOpacity>
            )}
            />
            </View>
     
  )
}