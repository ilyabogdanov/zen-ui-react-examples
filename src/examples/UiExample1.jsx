import React from "react";
import {
    Modal,
    Window,
    WindowHead,
    Window_Props,
    WindowBody,
    HorizontalLayout,
    HorizontalLayoutColumn,
    VerticalLayout,
    VerticalLayoutRow,
    TextField,
    PasswordField,
    PushButton,
    Button_Props,
    Text
} from "zen-ui-react";

/**
 * @class
 */
export default class UiExample1 extends React.Component {
    render() {
        return (

            <Modal>
                <Window maxWidth="20rem">
                    <WindowHead title="Restricted Area"/>
                    <WindowBody padding="0 40px">

                        <VerticalLayout>
                            <VerticalLayoutRow padding="26px 0 21px 0">

                                <Text>Authentication required</Text>

                            </VerticalLayoutRow>
                            <VerticalLayoutRow>

                                <TextField onChange={function(){}}/>

                            </VerticalLayoutRow>
                            <VerticalLayoutRow height="4px"/>
                            <VerticalLayoutRow>

                                <PasswordField onChange={function(){}}/>

                            </VerticalLayoutRow>
                            <VerticalLayoutRow height="3px"/>
                            <VerticalLayoutRow height="2.4rem">

                                <PushButton stretch onClick={function(){}}>Login</PushButton>

                            </VerticalLayoutRow>
                            <VerticalLayoutRow height="2rem"/>
                        </VerticalLayout>

                    </WindowBody>
                </Window>
            </Modal>

        )
    }
};