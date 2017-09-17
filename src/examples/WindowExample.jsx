import React from "react";
import {
    ScrollArea,
    Text,
    Window,
    WindowBody,
    WindowCloseButton,
    WindowHead,
    Window_Props
} from "zen-ui-react";

/**
 * @class
 * @prop {*} props.appCallback
 */
export default class WindowExample extends React.Component {
    constructor() {
        super();
        this._onClick = this._onClick.bind(this);
    }
    _onClick() {
        this.props.appCallback(this.constructor.name, "close button", "click");
    }
    render() {
        return (
            <ScrollArea stretch scroll>

                <Window stretch={false} palette={Window_Props.palette.BRANDED}>
                    <WindowHead title="Branded window (non-stretch)">
                        <WindowCloseButton onClick={function () {}}/>
                    </WindowHead>
                    <WindowBody padding="0.7rem">
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </WindowBody>
                </Window>

                <Window stretch={false} palette={Window_Props.palette.BRANDED}>
                    <WindowHead title="Branded window (non-stretch)">
                        <WindowCloseButton onClick={function () {}}/>
                    </WindowHead>
                    <WindowBody padding="0.7rem">
                        <Text>Lorem ipsum dolor sit amet</Text>
                    </WindowBody>
                </Window>

                <Window stretch={false} palette={Window_Props.palette.BRANDED}>
                    <WindowHead title="Branded window (non-stretch)">
                        <WindowCloseButton onClick={function () {}}/>
                    </WindowHead>
                    <WindowBody padding="0.7rem">

                        <Window stretch={false} palette={Window_Props.palette.ORDINARY}>
                            <WindowBody padding="0.7rem">

                            </WindowBody>
                            <WindowHead title="Ordinary window (non-stretch)">
                                <WindowCloseButton onClick={function () {}}/>
                            </WindowHead>
                        </Window>

                    </WindowBody>
                </Window>

            </ScrollArea>
        )
    }
};