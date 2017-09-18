import React from "react";
import {
    VerticalLayout,
    VerticalLayoutRow
} from "zen-ui-react";

/**
 * @class
 */
export default class VerticalLayoutExample extends React.Component {
    render() {
        return (
            <VerticalLayout divider>
                {[8, 13, 21, 34].map((e,i) => (
                    <VerticalLayoutRow key={i} height={e+"px"} style={{background: "rgba(0,0,0,"+(0.01*e)+")"}}/>
                ))}
                <VerticalLayoutRow height="100%" style={{background: "white"}}/>
                <VerticalLayoutRow height="2rem" style={{background: "rgba(0,0,0,0.1)"}}/>
                <VerticalLayoutRow padding="5px" style={{background: "rgba(0,0,0,0.1)"}}>no-height</VerticalLayoutRow>
                <VerticalLayoutRow padding="5px" style={{background: "rgba(0,0,0,0.1)"}}>no-height</VerticalLayoutRow>
            </VerticalLayout>
        )
    }
};