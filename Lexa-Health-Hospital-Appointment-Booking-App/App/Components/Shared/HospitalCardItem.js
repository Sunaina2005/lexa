import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';


export default function HospitalCardItem({ hospital }) {
  return (
    <View style={{ marginBottom: 20 }}>
      
      <Image
        source={{ uri: hospital.attributes.Image.data.attributes.url }}
        style={{
          width: '100%',
          height: 140,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      {hospital.attributes.Premium? <View style={{display:'flex', position:'absolute',
      flexDirection:'row',
    backgroundColor:Colors.SECONDARY,
  padding:5,borderRadius:99,paddingHorizontal:10,
gap:4, alignItems:'center', margin:5}}>
  <Ionicons name='md-shield-checkmark-sharp' size={18} color={Colors.PRIMARY} />
  <Text style={{color:Colors.PRIMARY, fontFamily:'appfont'}}>Premium Doctor</Text>
  </View>:null}
      <View style={{padding:10, backgroundColor:Colors.white,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
        <Text style={{fontSize:18,
        fontFamily:'appfont-semi'}}>{hospital.attributes.Name}</Text>
        <FlatList
           data={hospital.attributes.categories.data}
           horizontal={true}
         renderItem={({item})=>(
          <Text style={{marginRight:10,
         color:Colors.GRAY}}>{item.attributes.Name}</Text>
         )} />
         <View style={{borderBottomWidth:1,
        borderColor:Colors.LIGHT_GRAY,margin:5,marginBottom:10}}>
          </View> 

          <View style={{display:'flex',flexDirection:'row',gap:5,alignItems:'center'}}>
          <Ionicons name="location" size={18} color={Colors.PRIMARY} />
          <Text>{hospital.attributes.Address}</Text>
        </View>

        <View style={{display:'flex',flexDirection:'row',gap:5,alignItems:'center'}}>
          <Ionicons name="eye-sharp" size={18} color={Colors.PRIMARY} />
          <Text>658 Views</Text>
        </View>

      </View>
    </View>
  );
}
