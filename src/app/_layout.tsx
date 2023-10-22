
import { Stack, useLocalSearchParams, } from 'expo-router';

import { store } from "../redux/store";
import { Provider } from "react-redux";
import { ThemeProvider, Text } from '@rneui/themed';

import { theme } from "../theme";
import { StatusBar } from 'expo-status-bar';

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name='[story]'
            options={{
              title: 'Hacker News',
            }}
           />
          <Stack.Screen
            name='item/[id]'
            options={{
              headerTitle: function (props) {
                const local = useLocalSearchParams();

                return <Text>{`Item #${local.id}`}</Text>;
              },
            }}
           />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}