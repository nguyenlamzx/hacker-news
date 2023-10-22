import URL from 'url-parse';
import React from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';


import { HackerNewsItem, HackerNewsItemType } from '../../redux/services/hackerNewsApi';
import { Link, useRouter } from 'expo-router';

type StoryListItemDetailsProps = {
  data: HackerNewsItem;
}

const StoryListItemDetails: React.FC<StoryListItemDetailsProps> = ({ data }) => {

  const router = useRouter();

  const getTitle = function () {
    switch (data.type) {
      case HackerNewsItemType.Story:
      case HackerNewsItemType.Job:
      case HackerNewsItemType.Poll:
      case HackerNewsItemType.Pollopt:
        return data.title;

      case HackerNewsItemType.Comment:
        break;
    }

    return data.text;
  };

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
    const score = `${data.score} points`;
    const author = `by ${data.by}`;
    const time = getTimeDifference();

    return [
      score,
      author,
      time,
    ].join(' ');
  };
  var source;
  const url = data.url;

  try {
    const urlObj = new URL(url);
    source = urlObj.hostname;
    console.log(`Hostname: ${source}`);
  } catch (error) {
    source = '';
    console.error(`Invalid URL: ${error.message}`);
  }

  var title = getTitle();
  if (source.length > 0) {
    title = `${title} (${source})`;
  }

  const listItemContent = (
    <ListItem.Content>
      <ListItem.Title>{title}</ListItem.Title>
      <ListItem.Subtitle style={{
        marginTop: 4,
        color: 'rgba(0,0,0,0.6)',
      }}>{geSubTitle()}</ListItem.Subtitle>
      {/* <ListItem.Title>{JSON.stringify(data)}</ListItem.Title> */}
    </ListItem.Content>
  );

  const handleStoryPress = () => {
    console.log("Story Pressed:", data.id, url, source);
    if ((url || '').length === 0) {
      return router.push(`/item/${data.id}`);
    }

    console.log("Story Pressed > Linking.openURL:", data.id, url, source);
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity
      onPress={() => handleStoryPress()}
    >
      {listItemContent}
    </TouchableOpacity>
  );
};

export default StoryListItemDetails;
