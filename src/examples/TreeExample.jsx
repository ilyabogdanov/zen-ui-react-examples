import React from "react";
import Components from "./../skeleton/Components";
import {
    ScrollArea,
    Text,
    Tree,
    TreeBranch,
    TreeBranchlet,
    TreeLeaf,
    TreeLinkButton,
    TreeLeafColumn
} from "zen-ui-react";

/**
 * @class
 */
export default class TreeExample extends React.Component {
    render() {
        const array = [];
        var x = 1;
        while(x<10) {
            array.push(x++);
        }
        return (
            <ScrollArea stretch scroll style={{background: "white"}}>
                <Tree stretch={false}>
                    <TreeBranch>
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
                                                                    <TreeLinkButton to="/">{e.name}</TreeLinkButton>
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
        )
    }
};