import type { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";
import { withUniwind } from "uniwind";

const ThemedPath = withUniwind(Path);

/**
 * Compact Codepos mark used beside native navigation titles and work log entries.
 */
export function T3Wordmark(props: {
  readonly height: number;
  readonly color?: ColorValue;
  readonly colorClassName?: string;
}) {
  return (
    <Svg
      accessibilityLabel="Codepos"
      height={props.height}
      width={props.height}
      viewBox="0 0 1024 1024"
    >
      <ThemedPath
        d="M679 302c-48-37-102-55-162-55-146 0-265 119-265 265s119 265 265 265c60 0 114-18 162-55"
        color={props.color}
        colorClassName={props.colorClassName}
        fill="none"
        stroke="currentColor"
        strokeWidth={112}
        strokeLinecap="round"
      />
      <ThemedPath
        d="m642 431 84 81-84 81"
        color={props.color}
        colorClassName={props.colorClassName}
        fill="none"
        stroke="currentColor"
        strokeWidth={66}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
