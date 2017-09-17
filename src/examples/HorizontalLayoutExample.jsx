import React from "react";
import {
    HorizontalLayout,
    HorizontalLayoutColumn
} from "zen-ui-react";

const HorizontalLayoutExample = () => (

    <HorizontalLayout divider height="100%">
        {/*{[8, 13, 21, 34, 55, 89].map((e,i) => (
            <HorizontalLayoutColumn key={i} width={e+"px"} style={{background: "rgba(0,0,0,"+(0.01*e)+")"}}/>
        ))}*/}
        {[8, 13, 21, 34, 55, 89].map((e,i) => (
            <HorizontalLayoutColumn key={i} width={0.0512312*e+"rem"} style={{background: "rgba(0,0,0,"+(0.01*e)+")"}}/>
        ))}
        {[2, 3, 5, 8, 13, 21].map((e,i) => (
            <HorizontalLayoutColumn key={i} width={1.01023123123*e+"%"} style={{background: "rgba(0,0,0,"+(0.042*e)+")"}}/>
        ))}
        {[2, 3, 5, 8, 13, 21].map((e,i) => (
            <HorizontalLayoutColumn key={i} width={e} style={{background: "rgba(0,0,0,"+(0.042*e)+")"}}/>
        ))}
        <HorizontalLayoutColumn style={{whiteSpace:"nowrap"}}>no-width</HorizontalLayoutColumn>
    </HorizontalLayout>

);
export default HorizontalLayoutExample;
