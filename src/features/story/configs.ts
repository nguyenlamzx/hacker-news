

export const storyConfigs = [
  {
    id: 'newest',
    route: 'newstories',
    title: 'Newest Story',
    icon: 'timer-outline',
  },
  {
    id: 'top',
    route: 'topstories',
    title: 'Top Story',
    icon: 'star-outline',
  },
  {
    id: 'best',
    route: 'beststories',
    title: 'Best Story',
    icon: 'medal-outline',
  },
];

export const routesIds = storyConfigs.map((config) => config.id);
export const routesStoryId = storyConfigs.map((config) => config.route);
export const routeNames = storyConfigs.map((config) => config.title);
export const routeIcons = storyConfigs.map((config) => config.icon);
export const initialRouteName = routesIds[0];