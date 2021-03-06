import React, { Component } from 'react';
import {FooterCell} from './FooterCell';

export class TableFooter extends Component {

    createFooterCells(root, column, i) {
        let children = React.Children.toArray(root.props.children);

        return React.Children.map(children, (column,i) => {
            return <FooterCell key={i} {...column.props} />;
        });
    }

    render() {
        let content;
        if(this.props.columnGroup) {
            let rows = React.Children.toArray(this.props.columnGroup.props.children);
            content = rows.map((row, i) => {
                return <tr key={i} className="ui-state-default">{this.createFooterCells(row)}</tr>;
            });
        }
        else {
            content = <tr className="ui-state-default">{this.createFooterCells(this)}</tr>;
        }

        return (
            <tfoot className="ui-datatable-tfoot">
                {content}
            </tfoot>
        );
    }
}