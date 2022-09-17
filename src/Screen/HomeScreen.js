import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ListItem, Image, Input} from 'react-native-elements';
const HomeScreen = ({navigation}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=th&apiKey=e72c5a5e1cd74eaa88e178df3a9dff37',
      {method: 'GET'},
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);

        setNews(response.articles);
      })

      .catch(error => console.log(error));
  }, []);
  return (
    <View>
      <Text>ข่าว</Text>
      <FlatList
        data={news}
        ListHeaderComponent={
          <Input
            inputContainerStyle={{
              paddingHorizontal: 10,
              borderWidth: 4,
              borderRadius: 10,
              height: 30,
            }}
            rightIcon={{name: 'search'}}
            placeholder="Search...."
          />
        }
        renderItem={({item}) => (
          <ListItem
            bottomDivider
            onPress={() => navigation.navigate('NewDetailScreen', {new: item})}>
            <Image
              source={{uri: item.urlToImage}}
              style={{width: 100, height: 100}}
            />
            <ListItem.Content>
              <ListItem.Title style={{fontWeight: '400'}}>
                {item.title}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
    </View>
  );
};

export default HomeScreen;
