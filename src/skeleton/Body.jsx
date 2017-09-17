import React from "react";
import { Switch, Route } from "react-router-dom";
import App_Endpoints from "./App_Endpoints";
import ComboboxExample from "../examples/ComboboxExample";
import PushButtonExample from "../examples/PushButtonExample";
import ToggleButtonExample from "../examples/ToggleButtonExample";
import TextExample from "../examples/TextExample";
import LinkExample from "../examples/LinkExample";
import ClippedTextExample from "../examples/ClippedTextExample";
import CheckboxExample from "../examples/CheckboxExample";
import RadioExample from "../examples/RadioExample";
import TextFieldExample from "../examples/TextFieldExample";
import NumberFieldExample from "../examples/NumberFieldExample";
import TimeFieldExample from "../examples/TimeFieldExample";
import HorizontalLayoutExample from "../examples/HorizontalLayoutExample";
import VerticalLayoutExample from "../examples/VerticalLayoutExample";
import LoadingMaskExample from "../examples/LoadingMaskExample";
import WindowExample from "../examples/WindowExample";
import ModalExample from "../examples/ModalExample";
import HorizontalMenuExample from "../examples/HorizontalMenuExample";
import PathExample from "../examples/PathExample";
import TreeExample from "../examples/TreeExample";
import UiExample1 from "../examples/UiExample1";
import UiExample2 from "../examples/UiExample2";
import UiExample3 from "../examples/UiExample3";

export default class Body extends React.Component {
    render() {
        return (
            <Switch>

                {/* example */}

                <Route path={App_Endpoints.UI_1}              render={(props) => <UiExample1              {...this.props} /> } />
                <Route path={App_Endpoints.UI_2}              render={(props) => <UiExample2              {...this.props} /> } />
                <Route path={App_Endpoints.UI_3}              render={(props) => <UiExample3              {...this.props} /> } />

                {/* button */}

                <Route path={App_Endpoints.COMBOBOX}          render={(props) => <ComboboxExample         {...this.props} /> } />
                <Route path={App_Endpoints.PUSH_BUTTON}       render={(props) => <PushButtonExample       {...this.props} /> } />
                <Route path={App_Endpoints.TOGGLE_BUTTON}     render={(props) => <ToggleButtonExample     {...this.props} /> } />

                {/* content */}

                <Route path={App_Endpoints.TEXT}              render={(props) => <TextExample             {...this.props} /> } />
                <Route path={App_Endpoints.CLIPPED_TEXT}      render={(props) => <ClippedTextExample      {...this.props} /> } />

                {/* input */}

                <Route path={App_Endpoints.CHECKBOX}          render={(props) => <CheckboxExample         {...this.props} /> } />
                <Route path={App_Endpoints.RADIO}             render={(props) => <RadioExample            {...this.props} /> } />
                <Route path={App_Endpoints.TEXT_FIELD}        render={(props) => <TextFieldExample        {...this.props} /> } />
                <Route path={App_Endpoints.NUMBER_FIELD}      render={(props) => <NumberFieldExample      {...this.props} /> } />
                <Route path={App_Endpoints.TIME_FIELD}        render={(props) => <TimeFieldExample        {...this.props} /> } />

                {/* layout */}

                <Route path={App_Endpoints.HORIZONTAL_LAYOUT} render={(props) => <HorizontalLayoutExample {...this.props} /> } />
                <Route path={App_Endpoints.VERTICAL_LAYOUT}   render={(props) => <VerticalLayoutExample   {...this.props} /> } />

                {/* navigation */}

                <Route path={App_Endpoints.HORIZONTAL_MENU}   render={(props) => <HorizontalMenuExample   {...this.props} /> } />
                <Route path={App_Endpoints.LINK}              render={(props) => <LinkExample             {...this.props} /> } />
                <Route path={App_Endpoints.PATH}              render={(props) => <PathExample             {...this.props} /> } />

                {/* panel */}

                <Route path={App_Endpoints.LOADING_MASK}      render={(props) => <LoadingMaskExample      {...this.props} /> } />
                <Route path={App_Endpoints.TREE}              render={(props) => <TreeExample             {...this.props} /> } />

                {/* window */}

                <Route path={App_Endpoints.MODAL}             render={(props) => <ModalExample            {...this.props} /> } />
                <Route path={App_Endpoints.WINDOW}            render={(props) => <WindowExample           {...this.props} /> } />

            </Switch>
        );
    }
};