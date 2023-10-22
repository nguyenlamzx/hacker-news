

import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';

import { useGetV0ItemByItemIdJsonQuery, HackerNewsItem } from '../../redux/services/hackerNewsApi';

type HackerNewsItemBuilderProps = {
  id: number;
  index?: number;
  dataBuilder?: (
    data: HackerNewsItem,
    isFetching: boolean,
    onRefresh: () => void,
  ) => React.ReactNode;
}

export default function HackerNewsItemBuilder({ id, index, dataBuilder }: HackerNewsItemBuilderProps) {

  const { data, error, refetch, isFetching, } = useGetV0ItemByItemIdJsonQuery({
    itemId: id, print: 'pretty',
  }, {
    refetchOnFocus: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

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

  var content;

  if (data) {
    content = dataBuilder(data, isFetching, () => refetch(), );
  } else {
    content = <View style={{flex: 1, minHeight: 60}}>
      <Text>Loading...</Text>
    </View>
  }

  return content;
};
