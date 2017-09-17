import React from "react";
import {
    HorizontalMenu,
    HorizontalMenuColumn,
    HorizontalMenuLink,
    VerticalLayout,
    VerticalLayoutRow,
    Text
} from "zen-ui-react";

/**
 * @class
 */
export default class HorizontalMenuExample extends React.Component {
    render() {
        return (
            <VerticalLayout stretch>
                <VerticalLayoutRow height="64px">
                    <HorizontalMenu>
                        <HorizontalMenuColumn width="50%"/>
                        <HorizontalMenuLink to="/" width="120px" active>Active</HorizontalMenuLink>
                        <HorizontalMenuLink to="/" width="120px">Inactive</HorizontalMenuLink>
                        <HorizontalMenuColumn width="50%"/>
                    </HorizontalMenu>
                </VerticalLayoutRow>
                <VerticalLayoutRow stretch/>
            </VerticalLayout>
        )
    }
};