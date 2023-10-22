import React from "react";
import { useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";

type HtmlViewProps = {
  source: string;
}

export default function HtmlView({ source }: HtmlViewProps) {
  const { width } = useWindowDimensions();

  return (
    <RenderHTML
      contentWidth={width}
      source={{
        html: source,
      }}
    />
  );
}