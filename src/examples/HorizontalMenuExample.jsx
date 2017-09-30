import React from "react";
import {
    HorizontalMenu,
    HorizontalMenuColumn,
    HorizontalMenuLink,
    VerticalLayout,
    VerticalLayoutRow
} from "zen-ui-react";

export default class HorizontalMenuExample extends React.Component {
    render() {
        return (
            <VerticalLayout>
                <VerticalLayoutRow height="4rem">
                    <HorizontalMenu>
                        <HorizontalMenuColumn width="50%"/>
                        <HorizontalMenuLink to="/" width="8rem" active>Active</HorizontalMenuLink>
                        <HorizontalMenuLink to="/" width="8rem">Inactive</HorizontalMenuLink>
                        <HorizontalMenuColumn width="50%"/>
                    </HorizontalMenu>
                </VerticalLayoutRow>
                <VerticalLayoutRow height="100%"/>
            </VerticalLayout>
        )
    }
};