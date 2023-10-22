// Tabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StoryList from '../features/story/StoryList';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TopStories" component={StoryList} />
      <Tab.Screen name="NewStories" component={StoryList} />
      <Tab.Screen name="BestStories" component={StoryList} />
    </Tab.Navigator>
  );
}

export default Tabs;
