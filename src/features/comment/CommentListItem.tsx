
import React from 'react';
import { View } from 'react-native';
import { ListItem } from '@rneui/themed';
import HackerNewsItemBuilder from '../item/HackerNewsItemBuilder';
import CommentListItemDetails from './CommentListItemDetails';

type CommentListItemProps = {
  id: number;
  index?: number;
}

export default function CommentListItem({ id, index }: CommentListItemProps) {

  const content = <HackerNewsItemBuilder id={id} index={index} dataBuilder={
    (data) => <CommentListItemDetails data={data} />
  } />

  return (
    <ListItem bottomDivider>
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
