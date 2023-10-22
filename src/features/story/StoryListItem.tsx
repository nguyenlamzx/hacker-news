
import React from 'react';
import { View } from 'react-native';
import { ListItem } from '@rneui/themed';

import StoryListItemDetails from './StoryListItemDetails';
import StoryListItemBuilder from '../item/HackerNewsItemBuilder';

type StoryListItemProps = {
  id: number;
  index?: number;
}

export default function StoryListItem({ id, index }: StoryListItemProps) {

  const content = <StoryListItemBuilder id={id} index={index} dataBuilder={
    (data) => <StoryListItemDetails data={data} />
  } />

  var order = null;
  if (index !== undefined) {
    order = <ListItem.Title >{index + 1}.</ListItem.Title>
  }

  return (
    <ListItem bottomDivider>
      {order}
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}>
        {content}
      </View>
    </ListItem>
  );
};
