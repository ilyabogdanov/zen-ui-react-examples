import React from "react";
import { Link } from "react-router-dom";
import {
    HorizontalLayout,
    HorizontalLayoutColumn,
    Text
} from "zen-ui-react";

/**
 * @class
 */
export default class LinkExample extends React.Component {
    render() {
        return (
            <HorizontalLayout height="100%">
                <HorizontalLayoutColumn width="3" padding="5px">

                    <div><Link to="/">Link</Link></div>
                    <div><Link to="">Router-Link</Link></div>

                </HorizontalLayoutColumn>
                <HorizontalLayoutColumn width="3" padding="5px">

                    <Text>Lorem ipsum dolor sit amet, <Link to="/">consectetur adipiscing</Link> elit, sed do eiusmod tempor incididunt</Text>

                </HorizontalLayoutColumn>
                <HorizontalLayoutColumn width="3" padding="5px">

                    <Text>Lorem ipsum dolor sit amet, <Link to="/">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Link> magna aliqua.</Text>

                </HorizontalLayoutColumn>
            </HorizontalLayout>
        )
    }
};