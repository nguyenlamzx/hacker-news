
import React from 'react';
import { View } from 'react-native';
import { Tab, TabView } from '@rneui/themed';
import { useLocalSearchParams, useGlobalSearchParams, router, Link } from 'expo-router';

import { routesIds, routeNames, storyConfigs, routeIcons } from "./configs";
import StoryList from './StoryList';

export default function Page() {
  const glob = useGlobalSearchParams();
  const local = useLocalSearchParams();

  console.log("Local:", local.story, "Global:", glob.story);

  const routeIndex = routesIds.indexOf(local.story.toString()) || 0;
  const [index, setIndex] = React.useState(routeIndex);

  return (
    <View style={{flex: 1}}>
      <Tab
        value={index}
        onChange={(e) => {
          router.setParams({ story: routesIds[e] });
          return setIndex(e);
        }}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        {routesIds.map((label, index) => (
          <Tab.Item
            key={label}
            title={routeNames[index]}
            titleStyle={{ fontSize: 12 }}
            icon={{ name: routeIcons[index], type: 'ionicon', color: 'white' }}
          />
        ))}
      </Tab>
    
      <TabView value={index} onChange={setIndex} animationType="spring">
        {routesIds.map((label, index) => (
          <TabView.Item key={label} style={{ width: '100%' }}>
            <StoryList />
          </TabView.Item>
        ))}
      </TabView>
    </View>
  );
}
