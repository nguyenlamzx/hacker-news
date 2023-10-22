
import React from 'react';
import { View, FlatList } from 'react-native';
import { useLocalSearchParams, useGlobalSearchParams, } from 'expo-router';
import { Card } from '@rneui/base';

import StoryListItemBuilder from '../item/HackerNewsItemBuilder';
import StoryListItemDetails from '../story/StoryListItemDetails';
import HtmlView from '../../components/HtmlView';
import CommentListItem from './CommentListItem';

export default function Page() {
  const glob = useGlobalSearchParams();
  const local = useLocalSearchParams();

  const id = Number(local.id);

  console.log("Comment Local:", local.id, "Global:", glob.id);

  return (
    <View style={{flex: 1}}>
      <Card containerStyle={{
        margin: 0,
      }}>
        <StoryListItemBuilder id={id} dataBuilder={
          function (data, isFetching, onRefresh) {
            return (
              <>
                <StoryListItemDetails data={data} />

                <View style={{
                  marginTop: 8,
                }}>
                  <HtmlView source={data.text}></HtmlView>
                </View>

                <View style={{
                  marginTop: 8,
                }}>
                  <FlatList
                    data={data.kids}
                    windowSize={2}
                    refreshing={isFetching}
                    onRefresh={onRefresh}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({ item, index }) => (
                      <View key={item}>
                        <CommentListItem id={item} index={index} />
                      </View>
                    )}
                  />
                </View>
              </>
            );
          }
        } />
      </Card>
    </View>
  );
}
