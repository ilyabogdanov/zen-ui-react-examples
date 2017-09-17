import React from "react";
import {
    Zen
} from "zen-ui-react";

/**
 * @class
 */
export default class TextExample extends React.Component {
    render() {
        return (
            <Zen.ScrollArea stretch scroll>
                <Zen.Text padding="10px">
                    <h1>Heading 1</h1>
                    <h2>heading 2</h2>
                    <h3>Heading 3</h3>
                    <p>Paragraph:</p>
                    <p><b>Lorem ipsum</b> <i>dolor sit amet</i>, <u>consectetur adipiscing elit</u>, <s>sed do eiusmod</s> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Unordered List:</p>
                    <ul>
                        <li>list item</li>
                        <li>list item</li>
                        <li>
                            list item
                            <ul>
                                <li>list item</li>
                                <li>list item</li>
                                <li>list item</li>
                            </ul>
                        </li>
                        <li>list item</li>
                        <li>list item</li>
                    </ul>
                    <p>Ordered List:</p>
                    <ol>
                        <li>list item</li>
                        <li>list item</li>
                        <li>
                            list item
                            <ol>
                                <li>list item</li>
                                <li>list item</li>
                                <li>list item</li>
                            </ol>
                        </li>
                        <li>list item</li>
                        <li>list item</li>
                    </ol>
                    <p>Definition List:</p>
                    <dl>
                        <dt>Termin</dt>
                        <dd>It's definition.</dd>
                        <dt>Lipsum</dt>
                        <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</dd>
                    </dl>
                    <p>Table:</p>
                    <table>
                        <thead>
                        <tr>
                            <th>
                                thead th
                            </th>
                            <td>
                                thead td
                            </td>
                            <td>
                                thead td
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>
                                tbody th
                            </th>
                            <td>
                                tbody td
                            </td>
                            <td>
                                tbody td
                            </td>
                        </tr>
                        <tr>
                            <th>
                                tbody th
                            </th>
                            <td>
                                tbody td
                            </td>
                            <td>
                                tbody td
                            </td>
                        </tr>
                        <tr>
                            <th>
                                tbody th
                            </th>
                            <td>
                                tbody td
                            </td>
                            <td>
                                tbody td
                            </td>
                        </tr>
                        <tr>
                            <th>
                                tbody th
                            </th>
                            <td>
                                tbody td
                            </td>
                            <td>
                                tbody td
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </Zen.Text>
            </Zen.ScrollArea>
        )
    }
};