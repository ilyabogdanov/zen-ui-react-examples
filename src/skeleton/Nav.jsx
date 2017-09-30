import React from "react";
import { Link } from "react-router-dom";
import App_Endpoints from "./App_Endpoints";
import Components from "./Components";
import {
    Text,
    ScrollArea,
    Tree,
    TreeBranch,
    TreeBranchlet,
    TreeLeaf,
    TreeLeafColumn
} from "zen-ui-react";

export default class Nav extends React.Component {
    render() {
        return (
            <ScrollArea style={{background: "white"}}>
                <Tree stretch={false}>
                    <TreeBranch>
                        <TreeBranchlet open={true}>
                            <TreeLeaf>
                                <TreeLeafColumn width={1}>
                                    <Text><b>Examples</b></Text>
                                </TreeLeafColumn>
                            </TreeLeaf>
                            <TreeBranch>
                                {[{
                                    name: "Login Form",
                                    to: App_Endpoints.UI_1
                                }, {
                                    name: "Finance Data",
                                    to: App_Endpoints.UI_2
                                }, {
                                    name: "Task Tracker",
                                    to: App_Endpoints.UI_3
                                }].map((e,i)=>{
                                    return (
                                        <TreeBranchlet key={i}>
                                            <TreeLeaf>
                                                <TreeLeafColumn width={1}>
                                                    <Text clipped><Link to={e.to}>{e.name}</Link></Text>
                                                </TreeLeafColumn>
                                            </TreeLeaf>
                                        </TreeBranchlet>
                                    );
                                })}
                            </TreeBranch>
                        </TreeBranchlet>
                        <TreeBranchlet open={true}>
                            <TreeLeaf>
                                <TreeLeafColumn width={1}>
                                    <Text><b>Components</b></Text>
                                </TreeLeafColumn>
                            </TreeLeaf>
                            <TreeBranch>
                                {Components.map((e,i)=>{
                                    return (
                                        <TreeBranchlet key={i} open={true}>
                                            <TreeLeaf>
                                                <TreeLeafColumn width={1}>
                                                    <Text><b>{e.name}</b></Text>
                                                </TreeLeafColumn>
                                            </TreeLeaf>
                                            <TreeBranch>
                                                {e.list.map((e,i)=>{
                                                    return (
                                                        <TreeBranchlet key={i}>
                                                            <TreeLeaf>
                                                                <TreeLeafColumn width={1}>
                                                                    <Text clipped><Link to={e.to}>{e.name}</Link></Text>
                                                                </TreeLeafColumn>
                                                            </TreeLeaf>
                                                        </TreeBranchlet>
                                                    );
                                                })}
                                            </TreeBranch>
                                        </TreeBranchlet>
                                    );
                                })}
                            </TreeBranch>
                        </TreeBranchlet>
                    </TreeBranch>
                </Tree>
            </ScrollArea>
        );
    }
};

