import React from "react";
import {
    Zen,
    Modal,
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
export default class ModalExample extends React.Component {
    constructor() {
        super();
        this._onClick = this._onClick.bind(this);
    }
    _onClick() {
        this.props.appCallback(this.constructor.name, "close modal", "click");
    }
    render() {
        return (
            <Zen.Modal>
                <Window palette={Window_Props.palette.BRANDED} maxWidth="600px">
                    <WindowHead title="Branded window (non-stretch)">
                        <WindowCloseButton onClick={this._onClick}/>
                    </WindowHead>
                    <WindowBody padding="9px">
                        <Text>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.</Text>
                    </WindowBody>
                </Window>
            </Zen.Modal>
        )
    }
};