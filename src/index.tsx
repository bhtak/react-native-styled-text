import React, { memo } from "react";
import { StyleProp, Text, TextStyle } from "react-native";

const re = /<([\w]+):'([\d\w#]+)'>((?:(?!<\/\1>).)+)<\/\1>/;

type StyledTextProps = {
  text: string;
  style: StyleProp<TextStyle>;
  textStyle?: Record<string, StyleProp<TextStyle>>;
};

const StyledText: React.FC<StyledTextProps> = ({
  text,
  style,
  textStyle = {},
}) => {
  const m = text.match(re);
  if (m && ["style", "color"].includes(m[1])) {
    return (
      <Text style={style}>
        <Text key="front" style={style}>
          {text.substr(0, m.index)}
        </Text>
        <Text
          key="match"
          style={[style, m[1] === "color" ? { color: m[2] } : textStyle[m[2]]]}
        >
          {m[3]}
        </Text>
        <StyledText
          style={style}
          text={text.substr((m.index || 0) + m[0].length)}
          textStyle={textStyle}
        />
      </Text>
    );
  }
  return <Text style={style}>{text}</Text>;
};

export default memo(StyledText);
