
import React from 'react';
import { View } from 'react-native';
import { ListItem } from '@rneui/themed';


import { HackerNewsItem } from '../../redux/services/hackerNewsApi';
import HtmlView from '../../components/HtmlView';

type CommentListItemDetailsProps = {
  data: HackerNewsItem;
}

export default function CommentListItemDetails({ data }: CommentListItemDetailsProps) {

  const getTimeDifference = function () {

    const time = data.time * 1000;

    const currentTimeInSeconds = new Date().getTime();
    const timeDifference = (currentTimeInSeconds - time) / 1000;

    if (timeDifference < 3600) {
      return `${Math.floor(timeDifference / 60)} minutes ago`;
    } else if (timeDifference < 86400) {
      return `${Math.floor(timeDifference / 3600)} hours ago`;
    } else {
      return `${Math.floor(timeDifference / 86400)} days ago`;
    }
  }

  const geSubTitle = function () {
    const author = `${data.by}`;
    const time = getTimeDifference();

    return [
      author,
      time,
    ].join(' ');
  };

  const listItemContent = (
    <ListItem.Content>
      <ListItem.Subtitle style={{
        marginTop: 4,
        color: 'rgba(0,0,0,0.6)',
      }}>{geSubTitle()}</ListItem.Subtitle>
      <ListItem.Title style={{
        marginTop: 4,
        color: 'rgba(0,0,0,0.6)',
      }}>
        <HtmlView source={data.text}></HtmlView>
      </ListItem.Title>
      
      {/* <ListItem.Title>{JSON.stringify(data)}</ListItem.Title> */}
    </ListItem.Content>
  );

  return (
    <View>
      {listItemContent}
    </View>
  );
};
