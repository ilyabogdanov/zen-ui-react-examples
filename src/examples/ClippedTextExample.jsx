import React from "react";
import {
    Text,
    Text_Props
} from "zen-ui-react";

const ClippedTextExample = () => (

    <Text clipped={true} padding="5px" x={Text_Props.xAlign.LEFT} y={Text_Props.yAlign.MIDDLE}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>

);
export default ClippedTextExample;