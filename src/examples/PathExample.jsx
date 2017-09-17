import React from "react";
import {
    Path,
    PathItem
} from "zen-ui-react";

/**
 * @class
 */
export default class PathExample extends React.Component {
    render() {
        return (
            <Path stretch={true}>
                {[1,2,3,4].map(function (e) {
                    return <PathItem key={e} to={e!==4 ? "/" : ""}>item {e}</PathItem>
                })}
            </Path>
        )
    }
};