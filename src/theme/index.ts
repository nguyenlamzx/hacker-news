import { createTheme } from "@rneui/themed";

export const theme = createTheme({
  lightColors: {
    primary: '#f4511e',
  },
  darkColors: {
    primary: 'blue',
  },
  components: {
    Button: {
      raised: true,
    },
  },
});