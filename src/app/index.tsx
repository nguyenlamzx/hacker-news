
import { Redirect, useGlobalSearchParams } from "expo-router";

import { initialRouteName } from '../features/story/configs';

export default function Route() {
  const glob = useGlobalSearchParams();
  const initialRoute = glob.story || initialRouteName;
  
  return (
   <Redirect href={`/${initialRoute}`} /> 
  );
}