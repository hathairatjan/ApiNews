import {View, Text} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Image} from 'react-native-elements';
import dayjs from 'dayjs';
const NewDetailScreen = ({route}) => {
  const newData = route.params.new;

  console.log(newData);
  return (
    <ScrollView>
      <View style={{alignItems: 'center', marginTop: 5}}>
        <Image
          source={{uri: newData.urlToImage}}
          style={{width: 300, height: 200, resizeMode: 'contain'}}
        />
      </View>
      <View style={{marginTop: 15, paddingHorizontal: 20}}>
        <Text h1 h1Style={{fontSize: 18, marginBottom: 10}}>
          {newData.title}
        </Text>
        <Text style={{marginBottom: 5}}>{newData.description}</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>{newData.author}</Text>
          <Text>{dayjs(newData.publishedAt).fromNow()}</Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default NewDetailScreen;
