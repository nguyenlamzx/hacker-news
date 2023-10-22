
import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { Text } from '@rneui/themed';

import { routesIds, routesStoryId } from './configs';
import { useGetV0ByStoryIdJsonQuery } from '../../redux/services/hackerNewsApi';
import StoryListItem from './StoryListItem';

const DataList = () => {
  const route = useLocalSearchParams();
  const routeIndex = routesIds.indexOf(route.story.toString()) || 0;
  const storyType = routesStoryId[routeIndex];

  const { data, isFetching, error, refetch, } = useGetV0ByStoryIdJsonQuery({ storyId: storyType, print: 'pretty', },);

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isFetching) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" style={{
          padding: 8,
        }} />
      </View>
    );
  }

  if (error) {
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

      return (
        <View style={{flex: 1}}>
          <Text>An error has occurred:</Text>
          <Text>{errMsg}</Text>
        </View>
      )
    } else {
      // you can access all properties of `SerializedError` here
      return <Text>{error.message}</Text>
    }
  }

  return (
    <FlatList
      data={data}
      windowSize={2}
      refreshing={isFetching}
      onRefresh={() => refetch()}
      keyExtractor={(item) => item.toString()}
      renderItem={({ item, index }) => (
        <View key={item}>
          <StoryListItem id={item} index={index} />
        </View>
      )}
    />
  );
};

export default DataList;
